import React from 'react';

import { 
    Container
} from './styles';

import { 
    TText
} from '../../types/Text';

const Text: React.FC<TText> = (props) => {
    return (
        <Container type={props.type}>
            {props.text}
        </Container>
    );
};

export default Text;