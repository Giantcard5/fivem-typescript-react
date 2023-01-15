
import { Context, useContext } from 'react';

import { 
    VisibilityContext 
} from '../providers/Visibility';

import { 
    TVisibility 
} from '../types/Providers';

export const useVisibility = () => useContext<TVisibility>(VisibilityContext as Context<TVisibility>);