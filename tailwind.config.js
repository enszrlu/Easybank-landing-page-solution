/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: ['./*html'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            fontFamily: {
                sans: ['Public Sans', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                darkBlue: 'hsl(233, 26%, 24%)',
                limeGreen: 'hsl(136, 65%, 51%)',
                brightCyan: 'hsl(192, 70%, 51%)',
                grayishBlue: 'hsl(233, 8%, 62%)',
                lightGrayishBlue: 'hsl(220, 16%, 96%)',
                veryLightGray: 'hsl(0, 0%, 98%)'
            },
            spacing: {
                '80%': '80%' // p-80% - should work
            },
            gridTemplateColumns: {
                // Simple 4 column grid
                '4eq': 'repeat(4, 1fr)'
            }
        }
    },
    plugins: []
};
