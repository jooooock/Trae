import { EventEmitter } from "eventemitter3";
interface IReconnectingWebSocketClientOptions {
    logger?: Console;
    protocols?: string | string[];
    dynamicOptions?: () => any;
}
export declare class ReconnectingWebSocketClient extends EventEmitter {
    private address;
    private options;
    private WebSocketImpl;
    ws: WebSocket;
    private shouldReconnect;
    private reconnectAttempts;
    private maxReconnectAttempts;
    private initializeWebSocketPromise;
    reconnectDelay: number;
    reconnectMaxDelay: number;
    get OPEN(): 1;
    get CONNECTING(): 0;
    get CLOSING(): 2;
    get CLOSED(): 3;
    get readyState(): number;
    readyPromise: () => Promise<void>;
    /**
     * Creates an instance of RpcWebSocketClient.
     * @param address - WebSocket address as a string or a function returning a Promise<string>.
     * @param protocols - WebSocket protocols as a string or an array of strings.
     */
    constructor(address: string | (() => Promise<string>), options?: IReconnectingWebSocketClientOptions, WebSocketImpl?: typeof WebSocket);
    private resolveAddress;
    private initializeWebSocket;
    /**
     * Sets up WebSocket event handlers.
     */
    private setupEventHandlers;
    private handleReconnection;
    send(msg: any): void;
    /**
     * Closes the WebSocket connection and stops reconnection attempts.
     */
    close(code?: number, reason?: string): void;
}
export {};
