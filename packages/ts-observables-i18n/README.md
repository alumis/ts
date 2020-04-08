# @alumis/ts-observables-i18n
Localization using @alumis/ts-observables.

Example Webpack configuration:

```javascript
const ObservableI18nPlugin = require("@alumis/ts-observables-i18n");

module.exports = {

    // ...

    plugins: [
        new ObservableI18nPlugin({
            defaultSubtag: "no", // New visitors will have Norwegian set as their language
            subtags: ["no", "en"] // Ordered list of available languages (to be shown in e.g. a dropdown)
        })
    ]
};
```

Usage examples:

```javascript
console.log(r("foo").value); /// <i18n key="foo" lang="no">Hei Verden!</i18n>
/// <i18n key="foo" lang="en">Hello World!</i18n>
console.log(r("foo2").value) /// <i18n key="foo2" lang="no" file="file.txt" />
console.log("Default language is ", defaultLanguage);
console.log("Current language is ", currentLanguage.value);
console.log("Available languages are:");
for (let l of languages) console.log(l);
```