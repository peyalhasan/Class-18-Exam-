// Task -- 1 -->  Find unique Elements 

const findUnique = (arr1, arr2) =>{
    const first = arr1.filter(item => !arr2.includes(item))
    const second = arr2.filter(item => !arr1.includes(item))
    console.log(first, second)
    return[...first, ...second]
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

findUnique(arr1, arr2)

// Task -- 2 -->  Remove Duplicates 

const removeDuplicates = arr => {
    const remove = [...new Set(arr)]
    console.log(remove)
}
const duplicate = [1, 2, 3, 4, 1, 2, 6, 7, 8, 9];
removeDuplicates(duplicate)

// Task -- 3 --> Symmetric Difference

const symmetricDifference = (arr1, arr2) =>{
    const one = arr1.filter(item => !arr2.includes(item));
    const two = arr2.filter(item => !arr1.includes(item))
    return [...one, ...two]
}

console.log(symmetricDifference(arr1, arr2))

//    -----------------Advanced----------------------
// Task  -- 11 --> Second Largest Number

const secondLargest = arr => {
    const removeDuplicate = [...new Set(arr)]
    const sorts = removeDuplicate.sort((a, b )=> b - a )
    return sorts[1]
}
console.log(secondLargest(duplicate))

// Task  -- 13 --> Count Occurrences 

const countOccurrences = arr => {
    let count = {}
    for(const element of arr){
        count[element] = (count[element] || 0) + 1;
    }
    console.log(count)
}

countOccurrences(["a", "b", "a"])

// Task  -- 14 --> Palindrome Check 

const palindromeCheck = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   const reversed = cleaned.split('').reverse().join('');
      if(cleaned === reversed){
    return true
   }
   else{
    return false
   }
}
const texts = "A man, a plan, a canal: Panama";
console.log(palindromeCheck(texts)); 


const fizzbuzz = n => {
    let store = []
    for(i=1; i<= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            store.push('FizzBuzz')
        }
        else if(i%3===0){
            store.push('Fizz')
        }
        else if(i % 5 === 0){
            store.push('Buzz')
        }
        else{
            store.push(i)
        }
    }
    return store;
}

console.log(fizzbuzz(15))