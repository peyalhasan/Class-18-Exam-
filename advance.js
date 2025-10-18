// ---------------- Advance Questions ----------------

// ---- Deep Clone --- 
const deepClone = obj => {
    // Base case: if obj is null or a primitive, return it as-is
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // If obj is an array, recursively clone each element
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // If obj is an object, recursively clone each property
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
};

// Test
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

 // modify cloned object

console.log("Original:", original); // { a: 1, b: { c: 2 } } → unchanged
console.log("Cloned:", cloned);     // { a: 1, b: { c: 42 } } → independent




function countStr (str) {
    let result = {
        Count: 0,
    }
    const newString = str.split('')
    for(i = 0; i< newString.length; i++){
        result.Count =result.Count + 1;
    }
    return result
}
const str = 'Shayon';
console.log(countStr(str))