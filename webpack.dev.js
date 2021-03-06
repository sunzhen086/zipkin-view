/**
 * Copyright 2017 Mayank Sindwani
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Webpack Dev Config
 *
 * @Date : 2017-12-14
 * @Description : Webpack configuration for dev builds.
 **/

const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
});
