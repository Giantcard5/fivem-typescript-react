import React from 'react';

import { 
    Container
} from './styles';

import { 
    TImage
} from '../../types/Image';

const Image: React.FC<TImage> = (props) => {
    return (
        <Container 
            type={props.type}
            src={props.src}
            alt={props.alt}
        />
    )
}

export default Image;