import { Callback, Stream } from "./stream-to-websocket-frame";
import { Emitter, Event } from "vscode-protocol/vs/base/common/event";
import { DisposableStore } from "vscode-protocol/vs/base/common/lifecycle";
export declare class EventStream extends DisposableStore implements Stream {
    dataEmitter: Emitter<any>;
    endEmitter: Emitter<any>;
    openEmitter: Emitter<any>;
    read: Event<any>;
    constructor();
    write(data: string | Uint8Array, callback: Callback): void;
    destroy(): void;
}
