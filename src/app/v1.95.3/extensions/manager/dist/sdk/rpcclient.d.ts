import { RpcWebSocketClient } from '../ws';
import { PseudoWebSocket } from './websocket';
import { ICommandService } from './reporter';
import { connectToExchange } from './exchange';
export { PseudoWebSocket, connectToExchange, RpcWebSocketClient };
export interface IWSClientAdditionalOptions {
    protocol?: string;
    autoconnect?: boolean;
    reconnect?: boolean;
    reconnect_interval?: number;
    max_reconnects?: number;
    name?: string;
    logger?: any;
}
export interface IWSRequestParams {
    [x: string]: any;
    [x: number]: any;
}
export interface IWebSocketRPCClient extends Pick<RpcWebSocketClient, 'call' | 'close'> {
    ping: (options?: PingOptions) => Promise<number>;
    serverInfo: () => Promise<any>;
    callJSONRpc: (options: CallJSONRpcOptions) => Promise<any>;
    callVolo: (options: CallVoloOptions) => Promise<any>;
    callStream: (options: CallStreamOptions) => Promise<any>;
    callWebSocket: (options: CallWebSocketOptions) => Promise<PseudoWebSocket>;
    client?: RpcWebSocketClient;
}
/**
 * make a websocket RPC client
 * @param endpoint {string} example: `ws://localhost:8080`, or `ws://token:xxx@localhost:8080` with protocol set to token
 */
export declare function makeWebSocketRpcClient(endpoint: string | (() => Promise<string>), options?: IWSClientAdditionalOptions, commandService?: ICommandService): Promise<IWebSocketRPCClient>;
export interface CallOptionsBase {
    module_port: string;
    socket_path?: string;
}
export interface PingOptions {
    showLog?: boolean;
}
export interface CallJSONRpcOptions extends CallOptionsBase {
    req: any;
}
export interface CallVoloOptions extends CallOptionsBase {
    cmd: string;
    req: any;
}
export interface CallStreamOptions extends CallOptionsBase {
    req: any;
    onData: (data: string | Uint8Array) => void;
    onEnd?: () => void;
}
export interface CallWebSocketOptions extends CallOptionsBase {
    /**
     * path (maybe with query), e.g. /api/ws?a=1
     */
    path?: string;
    name?: string;
    req?: any;
}
