self.addEventListener('install', (event) => {
  console.log('Service Worker 安装成功');
});
self.addEventListener('fetch', (event) => {
   const request = event.request;
    const headers = new Headers(request.headers);
    headers.set('x-my-custom-header', 'The Most Amazing Header Ever');
    const newRequest = new Request(request, { headers });
    console.log(newRequest);
    const keys = headers.keys();
    console.log('service worker代理', location.search);
    event.respondWith(fetch(newRequest));
});
