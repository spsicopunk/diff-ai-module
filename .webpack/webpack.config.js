const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
			{
				test: /\.css$/,
				use: [
				  "style-loader",
				  "css-loader",
				  "postcss-loader",
				],
			  },
        ],
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'), // Asegúrate de que este sea el lugar correcto
		}),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
