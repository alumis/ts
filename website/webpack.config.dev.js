module.exports = require("./webpack.config.base")({
    path: "dist",
    targets: { chrome: 78 },
    isDevelopment: true,
    constants: {
        

    }
});