module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#1158e8',
                dustyGray: '#999',
                gallery: '#eee',
                black: '#333',
            },
            fill: theme => ({
                'white': '#fff',
                primary: theme('colors.primary'),
                dustyGray: theme('colors.dustyGray'),
                gallery: theme('colors.gallery'),
            })
        },
        container: {
            center: true
        }
    },
    variants: {
        extend: {
            fill: ['hover']
        },
    },
    plugins: [],
}