import { StreamToWebSocket } from './stream-to-websocket-frame';
import { EventStream } from './event';
export declare class PseudoWebSocket extends EventTarget {
    #private;
    private stream;
    private protocols?;
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
    readyState: number;
    onopen?: (event: Event) => void;
    onmessage?: (event: MessageEvent) => void;
    onerror?: (event: ErrorEvent) => void;
    onclose?: (event: CloseEvent) => void;
    reconnect?: () => void;
    converter?: StreamToWebSocket;
    userClosed: boolean;
    constructor(stream: EventStream, protocols?: string | string[] | null | undefined);
    send(data: string | Uint8Array): void;
    close(code: number, reason: string): void;
}
