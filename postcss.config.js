module.exports = {
    plugins: [
        require('postcss-import'),
        // require('tailwindcss/nesting')(require('postcss-nested')),
        require('tailwindcss'),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        process.env.NODE_ENV === 'production' ? require('cssnano') : null,
    ],
};
