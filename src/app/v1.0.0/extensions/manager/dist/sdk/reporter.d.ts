export interface CustomEventPayload {
    /** 自定义事件名称 */
    name: string;
    /** metrics 上报的是可以被度量的值，也就是数值 */
    metrics?: {
        [key: string]: number;
    };
    /** categories 上报的是分类，维度，用来做筛选，分组 */
    categories?: {
        [key: string]: string;
    };
}
export interface ICommandService {
    executeCommand<T = any>(commandId: string, ...args: any[]): Thenable<T | undefined>;
}
export declare class ICubeSlardarService {
    private readonly commandService;
    constructor(commandService: ICommandService);
    error(error: Error, extra?: CustomEventPayload["categories"]): void;
    event(payload: CustomEventPayload): void;
    private report;
}
