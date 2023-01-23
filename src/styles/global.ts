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
        fontFamily: 'Inter, sans-serif',

        color: 'var(--text-white)'
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

    ':root': {
        '--icon-default': '#00EE97',
        '--icon-default-shadow': '#00EE9750',

        '--text-default': '#00EE97',
        '--text-default-shadow': '#00EE9780',

        '--text-white': '#EBEBEB',
        '--text-white-shadow': '#EBEBEB',

        
        '--background': '#222222B3',
    },
});