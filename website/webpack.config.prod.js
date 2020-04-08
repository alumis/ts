module.exports = require("./webpack.config.base")({
    path: "dist",
    targets: {
        // ie: "11", // TODO: Circumvent core-js bug
        // edge: "14",
        // firefox: "39",
        // chrome: "42",
        // safari: "10.1",
        // opera: "29",
        // ios: "10.3"
        chrome: "78"
    },
    constants: {
    }
});