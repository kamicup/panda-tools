import {Configuration, IgnorePlugin} from 'webpack'

const config: Configuration = {
    target: 'node',
    optimization: {
        minimize: false,
    },
    entry: {
        track: {
            import: './src/handlers/track.ts',
            filename: "track/index.js",
        },
        query: {
            import: './src/handlers/query.ts',
            filename: "query/index.js",
        },
        beta: {
            import: './src/handlers/beta.ts',
            filename: "beta/index.js",
        },
    },
    output: {
        path: `${__dirname}/dist`,
        libraryTarget: 'commonjs2',
    },
    externals: ['aws-sdk', 'node-commonjs', 'node-fetch'],
    module: {
        rules: [
            { test: /\.ts$/, use: [ { loader: 'ts-loader' } ]}
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new IgnorePlugin({
            resourceRegExp: /^cardinal$/,
            contextRegExp: /./,
        }),
    ]
};

export default config;
