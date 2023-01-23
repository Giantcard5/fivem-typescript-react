import React from 'react';

import { 
    Container
} from './styles';

import Block from '../../components/Block';

const Success: React.FC = () => {
    return (
        <Container>
            <Block type='content'>
                Success
            </Block>
        </Container>
    );
};

export default Success;