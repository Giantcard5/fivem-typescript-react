import React, { useEffect, useState, createContext } from 'react';

import { 
    TChildren 
} from '../types/Children';

import { 
    TVisibility 
} from '../types/Providers';

import { 
    fetchNui 
} from '../utils/fetchNui';

import { 
    isEnvBrowser 
} from '../utils/misc';

import { 
    useNuiEvent 
} from '../hooks/useNuiEvent';

export const VisibilityContext = createContext<TVisibility | null>(null);

export const VisibilityProvider: React.FC<TChildren> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);

    useNuiEvent<boolean>('setVisible', setVisible);

    useEffect(() => {
        if (!visible) return;

        const keyHandler = (event: KeyboardEvent) => {
            if (['Escape'].includes(event.code)) {
                if (!isEnvBrowser()) fetchNui('hideFrame');
                else setVisible(!visible);
            }
        };

        window.addEventListener('keydown', keyHandler);

        return () => window.removeEventListener('keydown', keyHandler);
    }, [visible]);

    return (
        <VisibilityContext.Provider value={{ visible, setVisible }}>
            <div style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
                {props.children}
            </div>
        </VisibilityContext.Provider>
    );
};