const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const PACKAGE_PATH = "node_modules/@alumis/ts";

module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(p) {
        if (t.isIdentifier(p.node.callee, { name: "getPackageFiles" })) {

          let filesToInclude = {};

          for (let p of getTypeScriptFilePaths(PACKAGE_PATH))
            filesToInclude["/" + p] = fs.readFileSync(p, "utf8");

          //   console.log("-----");

          // let tsFileNames = fs.readdirSync("./node_modules/@alumis/ts").filter(p => p.endsWith(".ts") || p.endsWith(".tsx")).map(p => path.join("./node_modules/@alumis/ts", p));

          // let dtsFiles = compile(tsFileNames, {
          //   allowJs: false,
          //   declaration: true,
          //   emitDeclarationOnly: true,
          // });

          // dtsFiles["node_modules/@alumis/ts/typings/JSX.d.ts"] = fs.readFileSync("./node_modules/@alumis/ts/typings/JSX.d.ts", "utf8");

          p.replaceWith(t.objectExpression(Object.keys(filesToInclude).map(p => t.objectProperty(t.stringLiteral(p), t.stringLiteral(filesToInclude[p])))));
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

function* getTypeScriptFilePaths(directoryPath) {
  for (let p of fs.readdirSync(directoryPath)) {
    if (p === "node_modules")
      continue;
    let fullPath = path.join(directoryPath, p);
    if (fs.statSync(fullPath).isDirectory()) {
      for (let p2 of getTypeScriptFilePaths(fullPath))
        yield p2;
    }
    else if (p.endsWith(".ts") || p.endsWith(".tsx"))
      yield fullPath;
  }
}