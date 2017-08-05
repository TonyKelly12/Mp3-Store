/**
 * Created by toned_000 on 3/5/2017.
 */
module.exports = {
    entry: './js/App.js',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react']
            },

        }


],
}

};
