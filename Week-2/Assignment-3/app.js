function count(input) {
    let result = {};
    for (const letter of input) {
        if (result[letter]) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }
    return result;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));


function groupByKey(input) {
    let result = {};
    for (const obj of input) {
        if (result[obj.key]) {
            result[obj.key] += obj.value;
        } else {
            result[obj.key] = obj.value;
        }
    }
    return result;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2));