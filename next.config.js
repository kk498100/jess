const path = require('path');
module.exports = {
    reactStrictMode: true,
    // 配置构建id
    generateBuildId: async () => {
        return 'offical';
    },

    // 自定义输入目录
    distDir: 'build',
    // 压缩
    compress: true,
    // 自定义webpack
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name(resourcePath, resourceQuery) {
                    whenDev(() => {
                        return '[path][name].[ext]';
                    });
                    return '[contenthash].[ext]';
                },
                outputPath: 'images',
            }
        });

        config.module.rules.push({
            test: /\.(bmp|jpe?g|gif|png)$/i,
            loader: 'url-loader',
            options: {
                limit: 2 << 10,
                name: '[name].[hash:8].[ext]',
            }
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['svg-sprite-loader', 'svgo-loader']
        });

        return config;
    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    poweredByHeader: false,
};