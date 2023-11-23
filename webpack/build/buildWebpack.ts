import webpack from 'webpack';
import { BuildMode, BuildOptions } from '../type/types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = mode == BuildMode.development;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'bundle.[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        ...(isDev && { devtool: 'inline-source-map' }),
        ...(isDev && { devServer: buildDevServer(options) }),
    };
}
