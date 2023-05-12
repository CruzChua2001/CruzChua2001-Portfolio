const path = require("path");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3030
    },
    module: {
        rules: [
            {
                test: /.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    }
};