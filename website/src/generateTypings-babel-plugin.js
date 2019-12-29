const fs = require("fs");
const path = require("path");
const ts = require("typescript");

module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(p) {
        if (t.isIdentifier(p.node.callee, { name: "generateTypings" })) {

          let tsFileNames = fs.readdirSync("./node_modules/@alumis/elastic-ts").filter(p => p.endsWith(".ts") || p.endsWith(".tsx")).map(p => path.join("./node_modules/@alumis/elastic-ts", p));

          let dtsFiles = compile(tsFileNames, {
            allowJs: false,
            declaration: true,
            emitDeclarationOnly: true,
          });

          dtsFiles["node_modules/@alumis/elastic-ts/typings/JSX.d.ts"] = fs.readFileSync("./node_modules/@alumis/elastic-ts/typings/JSX.d.ts", "utf8");

          p.replaceWith(t.objectExpression(Object.keys(dtsFiles).map(p => t.objectProperty(t.stringLiteral(p), t.stringLiteral(dtsFiles[p])))));
        }
      }
    }
  };
};

function compile(fileNames, options) {
  const createdFiles = {}
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => createdFiles[fileName] = contents
  const program = ts.createProgram(fileNames, options, host);
  program.emit();
  for (let p in createdFiles) {
    let i = p.indexOf("node_modules/");
    if (i) {
      createdFiles[p.substr(i)] = createdFiles[p];
      delete createdFiles[p];
    }
  }
  return createdFiles;
}