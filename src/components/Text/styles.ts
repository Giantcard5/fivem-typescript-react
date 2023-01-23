import { styled } from '@stitches/react';

export const Container = styled('span', {
    variants: {
        type: {
            title: {
                fontSize: '2vmax',
                fontWeight: '800',
                        
                textTransform: 'uppercase',

                color: 'var(--text-default)',

                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-default-shadow))',
            },
            subtitle: {
                fontSize: '1vmax',
                fontWeight: '600',

                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',

                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',
            },
            input: {
                fontSize: '.8vmax',
                fontWeight: '500',
            
                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',
            
                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',
            },
            password: {
                fontSize: '.6vmax',
                fontWeight: '500',
            
                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',
            
                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',
            },
            submit: {
                fontSize: '.8vmax',
                fontWeight: '600',
            
                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',
            
                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',
            },
            register: {
                fontSize: '.6vmax',
                fontWeight: '500',
            
                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',
            
                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',

                'a': {
                    color: 'var(--icon-default)',
                
                    filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--icon-default-shadow))',

                    textDecoration: 'none',
                },
            },
            label: {
                fontSize: '.6vmax',
                fontWeight: '500',
            
                letterSpacing: '.02vmax',
                
                textTransform: 'uppercase',
            
                color: 'var(--text-white)',
                
                filter: 'drop-shadow(0vmax 0vmax 1.4vmax var(--text-white-shadow))',
            },
        },
    },
});