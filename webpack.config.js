const path = require( 'path' );

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'image-tool-tune.js',
        library: 'ImageToolTune',
        libraryTarget: 'var',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
};