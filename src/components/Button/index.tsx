import React from 'react';

import { 
    Container
} from './styles';

import { 
    TButton
} from '../../types/Button';

import { 
    TChildren 
} from '../../types/Children';

const Button: React.FC<TButton & TChildren> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    )
}

export default Button;