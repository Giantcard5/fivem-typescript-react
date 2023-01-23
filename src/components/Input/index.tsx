import React from 'react';

import { 
    Container
} from './styles';

import { 
    TInput
} from '../../types/Input';

const Input: React.FC<TInput> = ({...rest}) => {
    return (
        <Container {...rest}/>
    )
}

export default Input;