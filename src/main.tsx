import React from 'react';
import ReactDOM from 'react-dom/client';

// Change to HashRouter
import { 
    BrowserRouter  
} from 'react-router-dom';

import { 
    GlobalStyles 
} from './styles/global';

import { 
    VisibilityProvider 
} from './providers/Visibility';

import { 
    debugData 
} from './utils/debugData';

import Routes from './routes/routes';

debugData([
    {
        action: 'setVisible',
        data: true,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <VisibilityProvider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>

            {GlobalStyles()}
        </VisibilityProvider>
    </React.StrictMode>
);