const sw = self,
  VERSION = 4,
  resourceCacheName = `vscode-resource-cache-${VERSION}`,
  rootPath = sw.location.pathname.replace(/\/service-worker.js$/, ""),
  url = new URL(location.toString()),
  scheme = url.protocol,
  searchParams = url.searchParams,
  remoteAuthority = searchParams.get("remoteAuthority"),
  resourceBaseAuthority = searchParams.get("vscode-resource-base-authority"),
  resolveTimeout = 3e4,
  ICUBE_CACHE_NAME = "icube-webview-pre-html-cache-v1",
  urlsToCache = [rootPath + "/index.html", rootPath + "/fake.html"];
scheme !== "vscode-webview:" &&
  (self.addEventListener("install", (t) => {
    t.waitUntil(
      caches
        .open(ICUBE_CACHE_NAME)
        .then(function (e) {
          return e.addAll(urlsToCache);
        })
        .catch((e) => {
          console.error("service worker install error", e);
        }),
    );
  }),
  self.addEventListener("fetch", (t) => {
    const e = new URL(t.request.url);
    !e.pathname.startsWith(rootPath) ||
      e.host.includes("+") ||
      t.respondWith(
        caches.match(t.request, { ignoreSearch: !0 }).then(function (s) {
          return s || fetch(t.request);
        }),
      );
  }));
class RequestStore {
  constructor() {
    (this.map = new Map()), (this.requestPool = 0);
  }
  create() {
    const e = ++this.requestPool;
    let s;
    const o = new Promise((c) => (s = c)),
      n = { resolve: s, promise: o };
    this.map.set(e, n);
    const l = setTimeout(() => {
      clearTimeout(l);
      const c = this.map.get(e);
      if (c === n) {
        c.resolve({ status: "timeout" }), this.map.delete(e);
        return;
      }
    }, resolveTimeout);
    return { requestId: e, promise: o };
  }
  resolve(e, s) {
    const o = this.map.get(e);
    return o ? (o.resolve({ status: "ok", value: s }), this.map.delete(e), !0) : !1;
  }
}
const resourceRequestStore = new RequestStore(),
  localhostRequestStore = new RequestStore(),
  unauthorized = () => new Response("Unauthorized", { status: 401 }),
  notFound = () => new Response("Not Found", { status: 404 }),
  methodNotAllowed = () => new Response("Method Not Allowed", { status: 405 }),
  requestTimeout = () => new Response("Request Timeout", { status: 408 });
sw.addEventListener("message", async (t) => {
  switch (t.data.channel) {
    case "version": {
      const e = t.source;
      sw.clients.get(e.id).then((s) => {
        s && s.postMessage({ channel: "version", version: VERSION });
      });
      return;
    }
    case "did-load-resource": {
      const e = t.data.data;
      resourceRequestStore.resolve(e.id, e) || console.log("Could not resolve unknown resource", e.path);
      return;
    }
    case "did-load-localhost": {
      const e = t.data.data;
      localhostRequestStore.resolve(e.id, e.location) || console.log("Could not resolve unknown localhost", e.origin);
      return;
    }
    default: {
      console.log("Unknown message");
      return;
    }
  }
}),
  sw.addEventListener("fetch", (t) => {
    const e = new URL(t.request.url);
    if (typeof resourceBaseAuthority == "string" && e.protocol === "https:" && e.hostname.endsWith("." + resourceBaseAuthority))
      switch (t.request.method) {
        case "GET":
        case "HEAD": {
          const s = e.hostname.slice(0, e.hostname.length - (resourceBaseAuthority.length + 1)),
            o = s.split("+", 1)[0],
            n = s.slice(o.length + 1);
          return t.respondWith(processResourceRequest(t, { scheme: o, authority: n, path: e.pathname, query: e.search.replace(/^\?/, "") }));
        }
        default:
          return t.respondWith(methodNotAllowed());
      }
    if (e.origin !== sw.origin && e.host === remoteAuthority)
      switch (t.request.method) {
        case "GET":
        case "HEAD":
          return t.respondWith(processResourceRequest(t, { path: e.pathname, scheme: e.protocol.slice(0, e.protocol.length - 1), authority: e.host, query: e.search.replace(/^\?/, "") }));
        default:
          return t.respondWith(methodNotAllowed());
      }
    if (e.origin !== sw.origin && e.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/)) return t.respondWith(processLocalhostRequest(t, e));
  }),
  sw.addEventListener("install", (t) => {
    t.waitUntil(sw.skipWaiting());
  }),
  sw.addEventListener("activate", (t) => {
    t.waitUntil(sw.clients.claim());
  });
async function processResourceRequest(t, e) {
  const s = await sw.clients.get(t.clientId);
  if (!s) return console.error("Could not find inner client for request"), notFound();
  const o = getWebviewIdForClient(s);
  if (!o) return console.error("Could not resolve webview id"), notFound();
  const n = t.request.method === "GET",
    d = (a, m) => {
      if (a.status === "timeout") return requestTimeout();
      const r = a.value;
      if (r.status === 304) {
        if (m) return m.clone();
        throw new Error("No cache found");
      }
      if (r.status === 401) return unauthorized();
      if (r.status !== 200) return notFound();
      const f = { "Access-Control-Allow-Origin": "*" },
        p = r.data.byteLength,
        q = t.request.headers.get("range");
      if (q) {
        const h = q.match(/^bytes\=(\d+)\-(\d+)?$/g);
        if (h) {
          const E = Number(h[1]),
            C = Number(h[2]) || p - 1;
          return new Response(r.data.slice(E, C + 1), { status: 206, headers: { ...f, "Content-range": `bytes 0-${C}/${p}` } });
        } else return new Response(null, { status: 416, headers: { ...f, "Content-range": `*/${p}` } });
      }
      const i = { ...f, "Content-Type": r.mime, "Content-Length": p.toString() };
      r.etag && ((i.ETag = r.etag), (i["Cache-Control"] = "no-cache")), r.mtime && (i["Last-Modified"] = new Date(r.mtime).toUTCString());
      const w = new URL(t.request.url).searchParams.get("vscode-coi");
      w === "3"
        ? ((i["Cross-Origin-Opener-Policy"] = "same-origin"), (i["Cross-Origin-Embedder-Policy"] = "require-corp"))
        : w === "2"
          ? (i["Cross-Origin-Embedder-Policy"] = "require-corp")
          : w === "1" && (i["Cross-Origin-Opener-Policy"] = "same-origin");
      const y = new Response(r.data, { status: 200, headers: i });
      return n && r.etag && caches.open(resourceCacheName).then((h) => h.put(t.request, y)), y.clone();
    },
    l = await getOuterIframeClient(o);
  if (!l.length) return console.log("Could not find parent client for request"), notFound();
  let c;
  n && (c = await (await caches.open(resourceCacheName)).match(t.request));
  const { requestId: g, promise: u } = resourceRequestStore.create();
  for (const a of l) a.postMessage({ channel: "load-resource", id: g, scheme: e.scheme, authority: e.authority, path: e.path, query: e.query, ifNoneMatch: c?.headers.get("ETag") });
  return u.then((a) => d(a, c));
}
async function processLocalhostRequest(t, e) {
  const s = await sw.clients.get(t.clientId);
  if (!s) return fetch(t.request);
  const o = getWebviewIdForClient(s);
  if (!o) return console.error("Could not resolve webview id"), fetch(t.request);
  const n = e.origin,
    d = async (u) => {
      if (u.status !== "ok" || !u.value) return fetch(t.request);
      const a = u.value,
        m = t.request.url.replace(new RegExp(`^${e.origin}(/|$)`), `${a}$1`);
      return new Response(null, { status: 302, headers: { Location: m } });
    },
    l = await getOuterIframeClient(o);
  if (!l.length) return console.log("Could not find parent client for request"), notFound();
  const { requestId: c, promise: g } = localhostRequestStore.create();
  for (const u of l) u.postMessage({ channel: "load-localhost", origin: n, id: c });
  return g.then(d);
}
function getWebviewIdForClient(t) {
  return new URL(t.url).searchParams.get("id");
}
async function getOuterIframeClient(t) {
  return (await sw.clients.matchAll({ includeUncontrolled: !0 })).filter((s) => {
    const o = new URL(s.url);
    return (o.pathname === `${rootPath}/` || o.pathname === `${rootPath}/index.html` || o.pathname === `${rootPath}/index-no-csp.html`) && o.searchParams.get("id") === t;
  });
}
