// ---------------- Advance Questions ----------------

// ---- Deep Clone --- 

// const deepClone = obj =>{
//     if(obj === null || typeof obj !== 'object'){
//         console.log(obj);
//     }
//     if(Array.isArray(obj)){
//         return obj.map(item => deepClone(item))
//     }
//     const clonedObj = {};
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//            clonedObj[key] = deepClone(obj[key])
//         }
//     }
//     return clonedObj
// }


// console.log(deepClone({
//     a: 1, b: {c:2}
// }));