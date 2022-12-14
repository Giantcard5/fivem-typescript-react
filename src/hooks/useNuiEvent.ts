import { useEffect, useRef, MutableRefObject } from 'react';

import { 
    NuiHandlerSignature, 
    NuiMessageData 
} from '../types/Message';

export const useNuiEvent = <T = any>(action: string, handler: (data: T) => void) => {
    const savedHandler: MutableRefObject<NuiHandlerSignature<T>> = useRef(() => {});

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (event: MessageEvent<NuiMessageData<T>>) => {
            const { 
                action: eventAction, 
                data 
            } = event.data;

            if (savedHandler.current) {
                if (eventAction === action) {
                    savedHandler.current(data);
                };
            };
        };

        window.addEventListener('message', eventListener);

        return () => window.removeEventListener('message', eventListener);
    }, [action]);
};