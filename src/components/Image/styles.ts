import { styled } from '@stitches/react';

export const Container = styled('img', {
    variants: {
        type: {
            'account': {
                width: '1vmax',
                height: '1vmax',

                background: 'red'
            },
            'password': {
                width: '1vmax',
                height: '1vmax',

                background: 'blue'
            },
        },
    },
});