import {Configuration, IgnorePlugin} from 'webpack'

const config: Configuration = {
    target: 'node',
    optimization: {
        minimize: false,
    },
    entry: {
        track: {
            import: './src/handlers/track.ts',
            filename: "track/index.mjs",
        },
        query: {
            import: './src/handlers/query.ts',
            filename: "query/index.mjs",
        },
        beta: {
            import: './src/handlers/beta.ts',
            filename: "beta/index.mjs",
        },
    },
    output: {
        path: `${__dirname}/dist`,
        libraryTarget: 'module', //commonjs2
        chunkFormat: 'module',
    },
    externals: ['aws-sdk'],
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
    ],
    experiments: {
        outputModule: true,
    },
};

export default config;
