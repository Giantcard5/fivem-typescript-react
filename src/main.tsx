import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './core/index';

import { 
    GlobalStyles 
} from './styles/global';

import { 
    VisibilityProvider 
} from './providers/Visibility';

import { 
    debugData 
} from './utils/debugData';

debugData([
    {
        action: 'setVisible',
        data: true,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <VisibilityProvider>
            <App/>

            {GlobalStyles()}
        </VisibilityProvider>
    </React.StrictMode>
);