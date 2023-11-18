const enum BuildMode {
    production = "production",
    development = "development",
}

interface EnvVariables {
    mode: BuildMode,
    port: number,
}

interface BuildPath {
    output: string,
    entry: string,
    html: string,
}

interface BuildOptions {
    port: number;
    paths: BuildPath;
    mode: BuildMode;
}

export {EnvVariables, BuildMode, BuildPath, BuildOptions};