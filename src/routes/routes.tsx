import React from 'react';

import { 
    Routes as Switch, 
    Route
} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Success from '../pages/Success';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/success' element={<Success/>} />
        </Switch>
    );
};

export default Routes;