import React from 'react';

import { 
    Container 
} from './styles';

import { 
    TChildren 
} from '../../types/Children';

import { 
    TBlock
} from '../../types/Block';

const Block: React.FC<TChildren & TBlock> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    );
};

export default Block;