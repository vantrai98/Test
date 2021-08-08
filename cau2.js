const space = "\u0020";

function camelCase(sentence) {
    let str = "";
    let afterSpace = false;

    for (let i = 0; i < sentence.length; i++) {
        if (afterSpace && sentence[i] !== space) {
            str = str + sentence[i].toUpperCase();
            afterSpace = false;
        }
        else if (sentence[i] === space) {
            afterSpace = true;
        }
        else {
            str = str + sentence[i];
        }
    }

    return str;
}

function pascalCase(sentence) {
    let camelCaseStr = camelCase(sentence);
    camelCaseStr = camelCaseStr[0].toUpperCase() + camelCaseStr.substring(1, camelCaseStr.length);

    return camelCaseStr;
}

function replaceSpace(sentence, character) {
    let str = sentence.trim()
    str = str.replace(/\s+/g, character);

    return str;
}

const kebabCase = (sentence) => replaceSpace(sentence, "-");

const snakeCase = (sentence) => replaceSpace(sentence, "_");



// Test

const data = ["fruits in basket", "has error", "is visible"]

for (let i = 0; i < data.length; i++) {
    console.log(data[i], "->", camelCase(data[i]), "->", pascalCase(data[i]), "->", kebabCase(data[i]), "->", snakeCase(data[i]))
}

// Test


