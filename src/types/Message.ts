export type NuiMessageData<T = unknown> = {
    action: string;
    data: T;
};

export type NuiHandlerSignature<T> = (data: T) => void;