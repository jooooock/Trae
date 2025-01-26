import { ReconnectingWebSocketClient } from "./reconnecting-websocket";
import { EventEmitter } from "eventemitter3";
export declare class RpcWebSocketClient extends EventEmitter {
    ws: ReconnectingWebSocketClient;
    private logger?;
    private requestId;
    private pendingRequests;
    private messageBarrier;
    private msgQueue;
    messageGenerator(): AsyncGenerator<Uint8Array>;
    /**
     * Creates an instance of RpcWebSocketClient.
     * @param address - WebSocket address as a string or a function returning a Promise<string>.
     * @param protocols - WebSocket protocols as a string or an array of strings.
     */
    constructor(ws: ReconnectingWebSocketClient, logger?: any | undefined);
    get isReady(): boolean;
    /**
     * Calls an RPC method with the given parameters.
     * @param method - The RPC method name.
     * @param params - The parameters for the RPC method.
     * @returns A promise that resolves with the RPC response.
     */
    call(method: string, params?: any, timeoutMs?: number): Promise<any>;
    sendMessage(msg: any): void;
    private handleMessage;
    startMessageLoop(isOpen: () => boolean): Promise<void>;
    /**
     * Closes the WebSocket connection and stops reconnection attempts.
     */
    close(code?: number, reason?: string): void;
}
