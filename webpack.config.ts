import path from 'path';
import { BuildMode, BuildPath, EnvVariables } from './webpack/type/types';
import { buildWebpack } from './webpack/build/buildWebpack';
import { Configuration } from 'webpack';

export default (env: EnvVariables) => {
    const entryFileName: string = `index.${
        env.mode === BuildMode.development ? 'dev' : 'prod'
    }.tsx`;
    const paths: BuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'client', 'src', entryFileName),
        html: path.resolve(__dirname, 'ssr', 'ssr.html'),
    };

    const config: Configuration = buildWebpack({
        port: env.port ?? 5000,
        mode: env.mode ? env.mode : BuildMode.development,
        paths,
    });

    return config;
};
