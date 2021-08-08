function replaceValueInJsonString(jsonString, key, value) {
    const obj = JSON.parse(jsonString);
    obj[key] = value;

    return JSON.stringify(obj);
}

// Test

const jsonString = `{ "id": 1, "type": "container", "domain_type": "akte", "federfuehrende_organisationseinheit": "demo", "titel": "Erste Akte zum Test" }`;

let key = "domain_type"
let value = "einzelakte"

replaceValueInJsonString(jsonString, key, value);

key = "federfuehrende_organisationseinheit"
value = "test replaceValueInJsonString"

replaceValueInJsonString(jsonString, key, value);

// Test 