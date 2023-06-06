export declare class WebSocketMock {
    constructor(url: string | URL);
    onmessage(event: MessageEvent<any>): void;
    close(): void;
}
