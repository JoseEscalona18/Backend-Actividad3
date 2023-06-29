
const nodeExternals = require('webpack-node-externals');
const path = require("path")

module.exports = {

    mode: 'development',

    entry: path.resolve(__dirname, 'app.js'),

    output: {

        path: path.resolve(__dirname, "/dist"),
        publicPath: "/dist",
        filename: "build.js",
    },

    module: {

        rules:[
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },

            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader'
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },

    resolve: {

        fallback: {
            util: require.resolve("util/"),
            buffer: require.resolve("buffer/"),
            http: require.resolve("stream-http"),
            url: false,
            path: false,
            stream: false,
            timers: false,
            crypto: false,
            querystring: false,
            zlib: false,
            os: false 
        },

        alias: {
            vue$: "vue/dist/vue.esm.js"
        },

        extensions: [".js",".vue", ".json"]
    },

    devServer: {

        historyApiFallback: true,
        noInfo: true,
        overlay: true

    },

    performance: {
        hints: false
    },

    devtool: "source-map",

    externals: [nodeExternals()]

}