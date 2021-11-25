module.exports = {
    plugins: {
        tailwindcss: { config: './tailwind.config.js' },
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
                overrideBrowserslist: ['> 1%', 'last 4 versions', 'not dead', 'not ie <= 8'],
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
    }
}