const fs = require("fs");
const path = require("path");

let iconsPath = path.join(__dirname, "/Octicons");

if (fs.existsSync(iconsPath)) {

    for (let f of fs.readdirSync(iconsPath))
        fs.unlinkSync(path.join(__dirname, "/Octicons", f));
}

else fs.mkdirSync(iconsPath);

let data = require("octicons/build/data.json");

for (let i in data) {

    let { name, width, height } = data[i];
    let p = data[i].path;

    name = toPascalCase(name);

    let j = p.indexOf("d=\"");

    if (j === -1)
        throw new Error("Unable to parse path");

    let d = p.substr(j + "d=\"".length);

    j = d.indexOf("\"");

    if (j === -1)
        throw new Error("Unable to parse path");

    d = d.substr(0, j);

    fs.writeFileSync(path.join(__dirname, "Octicons", name + ".ts"), `export default [${JSON.stringify(d)},${width},${height}]`);

    console.log(name);
}

function toPascalCase(s) {

    let camelCase = s.replace(/([-_][a-z])/ig, g => g.toUpperCase().replace('-', ''));

    return camelCase[0].toUpperCase() + camelCase.substr(1);
}