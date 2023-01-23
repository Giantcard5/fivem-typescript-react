import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    
    variants: {
        type: {
            content: {
                alignItems: 'center',
                justifyContent: 'center',

                flexDirection: 'column',

                width: '20%',
                
                margin: '4%',
            },
            header: {
                flexDirection: 'column',

                width: '100%',
                height: '14%',

                margin: '0vmax 0vmax 1.4vmax 0vmax',
            },
            form: {
                alignItems: 'center',
                justifyContent: 'space-between',

                margin: '0vmax 0vmax .6vmax 0vmax',
            },
        },
    },
});