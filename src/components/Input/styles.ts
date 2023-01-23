import { styled } from '@stitches/react';

export const Container = styled('input', {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    '&[type=text]': {
        width: '100%',
        height: '2.4vmax',

        margin: '.2vmax 0vmax .8vmax 0vmax',
    
        background: 'var(--background)',
        borderRadius: '.25vmax',

        padding: '0vmax .6vmax',

        fontSize: '.7vmax',
        fontWeight: '600',
    
        letterSpacing: '.02vmax',
    
        color: 'var(--text-white)',

        '&::placeholder': {
            fontSize: '.6vmax',
            fontWeight: '600',
        
            letterSpacing: '.02vmax',

            textTransform: 'uppercase',
        
            color: 'var(--text-white)',
            opacity: '.6',  

            transition: 'all .2s',
        },

        '&:hover': {
            '&::placeholder': {
                opacity: '1',
            },
        },
    },

    '&[type=password]': {
        width: '100%',
        height: '2.4vmax',

        margin: '.2vmax 0vmax .8vmax 0vmax',
    
        background: 'var(--background)',
        borderRadius: '.25vmax',

        padding: '0vmax .6vmax',

        fontSize: '.7vmax',
        fontWeight: '600',
    
        letterSpacing: '.02vmax',

        color: 'var(--text-white)',

        '&::placeholder': {
            fontSize: '.6vmax',
            fontWeight: '600',
        
            letterSpacing: '.02vmax',

            textTransform: 'uppercase',
        
            color: 'var(--text-white)',
            opacity: '.6',  

            transition: 'all .2s',
        },

        '&:hover': {
            '&::placeholder': {
                opacity: '1',
            },
        },
    },

    '&[type=checkbox]': {
        appearance: 'none',

        width: '1vmax',
        height: '1vmax',

        margin: '0vmax .4vmax 0vmax 0vmax',
        
        background: 'var(--background)',
        borderRadius: '.2vmax',

        '&:checked': {
            background: 'var(--icon-default)',

            filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--icon-default-shadow))',
        },
    },
});