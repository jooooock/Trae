import * as vscode from "vscode";
import { makeWebSocketRpcClient } from "../sdk/rpcclient";
export declare function activate(context: vscode.ExtensionContext): Promise<{
    connectToExchange: (rpcClient: import("../sdk/rpcclient").IWebSocketRPCClient | null, options: import("../sdk/rpcclient").CallWebSocketOptions & {
        WebSocketCtor?: any;
        getUrl?: () => Promise<string>;
    }, logger?: any) => {
        sendMessage: (msg: any) => void;
        startMessageLoop: (onMessage: (msg: unknown) => Promise<void>) => Promise<void>;
        getWS: () => Promise<import("../sdk/websocket").PseudoWebSocket | null>;
        closeWS: () => void;
    };
    makeWebSocketRpcClient: typeof makeWebSocketRpcClient;
    sessionId: string;
    rpcClient: import("../sdk/rpcclient").IWebSocketRPCClient;
    devspaceInfo: Record<string, any> | undefined;
    getClientId: () => any;
}>;
export declare function deactivate(): void;
