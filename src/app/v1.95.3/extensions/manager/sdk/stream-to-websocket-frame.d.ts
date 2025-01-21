export declare const OPCODE_CONTINUATION = 0;
export declare const OPCODE_TEXT = 1;
export declare const OPCODE_BINARY = 2;
export declare const OPCODE_CLOSE = 8;
export declare const OPCODE_PING = 9;
export declare const OPCODE_PONG = 10;
export type Callback = (arg: {
    resultCode?: number;
    data?: Uint8Array;
}) => void;
export interface Stream {
    destroy?: () => void;
    write?: (data: string | Uint8Array, callback: Callback) => void;
    read: (callback: Callback) => void;
}
export interface Frame {
    isFinal: boolean;
    opcode: number;
    masked: boolean;
    payloadLength: number;
    maskingKey: Uint8Array;
    payloadData: Uint8Array;
}
export interface Config {
    onFrame?: (frame: Frame) => void;
    onData: (data: string | Uint8Array) => void;
    onClosed?: () => void;
    onError?: (errorMessage: string) => void;
}
export declare class StreamToWebSocket {
    private stream;
    private config;
    onClosed: () => void;
    onError: (errorMessage: string) => void;
    closing: any;
    receiver: any;
    constructor(stream: Stream, config: Config);
    listen(): void;
    close(_errorMessage?: string): void;
    _sendFrame(opcode: number, data: Uint8Array, masked: boolean, finalFragment: boolean): void;
    sendFrame(data: string | Uint8Array): boolean;
    sendPong(data: Uint8Array): void;
    sendPing(data: Uint8Array): void;
}
