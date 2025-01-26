import { IWebSocketRPCClient, PseudoWebSocket } from "./rpcclient";
import { CallWebSocketOptions } from "./rpcclient";
/**
 * 连接到 exchange，并保持连接，以便处理后端消息请求，如 execute_command
 */
export declare const connectToExchange: (rpcClient: IWebSocketRPCClient | null, options: CallWebSocketOptions & {
    WebSocketCtor?: any;
    getUrl?: () => Promise<string>;
}, logger?: any) => {
    sendMessage: (msg: any) => void;
    startMessageLoop: (onMessage: (msg: unknown) => Promise<void>) => Promise<void>;
    getWS: () => Promise<PseudoWebSocket | null>;
    closeWS: () => void;
};
