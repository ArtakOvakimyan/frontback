import {BuildMode, BuildOptions} from "../type/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const {mode} = options;
    const isDev = mode === BuildMode.development;

    const cssModuleLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: '[name]__[local]'
            },
        },
    };
    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                cssModuleLoader,
                "sass-loader",
            ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    })
                }
            }
        ]
    };

    return [scssLoader, tsLoader];
}