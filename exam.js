// Task 1 -> Grade CAlculator

const calculaterGrade = score => {
    if (score <= 100 && score >= 90) {
        console.log('Grade - A')
    }
    else if (score < 90 && score >= 80) {
        console.log('Grade - B');
    }
    else if (score < 80 && score >= 70) {
        console.log('Grade - C')
    }
    else if (score < 70 && score >= 60) {
        console.log('Grade - D')
    }
    else if (score < 60) {
        console.log('Grade - F')
    }
}

calculaterGrade(85)

// Task 2 -> Even or Odd

const isEvenOrOdd = number => {
    number % 2 === 0 ? console.log('Even') : console.log('Odd')
}
isEvenOrOdd(9)

// Task 3 -> Vowel Counter

const countVowels = str => {
    count = 0;
    const newString = str.split('')
    const letters = newString.map(element => {
        if ('aeiouAEIOU'.includes(element)) {
            count++
        }
    })

}
countVowels('Hello World')

// Task 4 -> Sum of Array Elements 

const sumArray = numbers => {
    const sum = numbers.reduce((acc, currentValue) => {
        acc += currentValue
        return acc
    })
    console.log(sum)
}
sumArray([1, 2, 3, 4])

// Task 5 -> Find the Largest Number 
const findLargest = numbers => console.log(Math.max(...numbers))
findLargest([5, 2, 8, 1, 9])

// Task 6 -> REverse an Array

const reverseArray = arr => {
    const array = arr.reduce((reversed, current) => {
        return [current, ...reversed]
    }, [])
    console.log(array)
}
reverseArray([1, 2, 3, 4])


// Task 7 -> FizzBuzz 

const fizzBuzz = n => {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    for (let ele in arr) {
        if (arr[ele] % 3 === 0 && arr[ele] % 5 === 0) {
            arr[ele] = 'FizzBuzz'
        }
        if (arr[ele] % 3 === 0) {
            arr[ele] = 'Fizz'
        }
        else if (arr[ele] % 5 === 0) {
            arr[ele] = 'Buzz'
        }
    }
    console.log(arr)
}
fizzBuzz(15)
