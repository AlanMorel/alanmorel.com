module.exports = {
    productionSourceMap: false,
    filenameHashing: false,
    pages: {
        index: {
            entry: "./src/main.ts"
        }
    },
    configureWebpack: {
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js"
        }
    }
};
