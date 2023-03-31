const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
    ],
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            ...colors,
        },
    },
};