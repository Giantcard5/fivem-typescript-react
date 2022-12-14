import { 
    globalCss 
} from '@stitches/react';

export const GlobalStyles = globalCss({
    '*': {
        margin: '0',
        padding: '0',
    
        boxSizing: 'border-box',
        userSelect: 'none',
    },

    'body, html': {
        height: '100%',
    },

    'body, input, textarea, select, button': {
        fontSize: '1vmax',
        fontWeight: '400',
        fontFamily: 'Montserrat, sans-serif',

        color: '#EBEBEB'
    },

    'button': {
        border: 'none',
        background: 'none',

        cursor: 'pointer',
    },

    'input': {
        border: 'none',
        background: 'none',

        cursor: 'auto',

        '&:focus': {
            outline: 'none',
        }
    },

    'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        appearance: 'none',
        
        margin: '0',
    },
});