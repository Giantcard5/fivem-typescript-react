import React from 'react';

import { 
    Container 
} from './styles';

import { 
    TChildren 
} from '../../types/Children';

import { 
    TForm
} from '../../types/Form';

const Form: React.FC<TChildren & TForm> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    );
};

export default Form;