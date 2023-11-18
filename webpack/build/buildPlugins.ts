import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildMode, BuildOptions} from "../type/types";
import {Configuration} from "webpack";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const {paths, mode} = options;
    const isDev = mode === BuildMode.development;

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
    ]

    if (isDev) {
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshPlugin());
    }
    else {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'build.[contenthash:8].css'
        }));
    }
    return plugins;
}