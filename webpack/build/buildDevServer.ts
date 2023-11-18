import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "../type/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 5000,
        open: true,
        hot: true,
    }
}