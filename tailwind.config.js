const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            charcoal: '#29425C',
            white: colors.white,
            grey: colors.gray,
            orange: {
                300: '#FECE4A',
                DEFAULT: '#FF9326',
                700: '#F86939',
            },
            yellow: {
                DEFAULT: '#FECE4A',
            },
        },
        extend: {},
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
};
