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

// Task 8 -> Square the Numbers 

const squareNumbers = numbers => {
    const square = numbers.map(ele => ele * ele)
    console.log(square)
}
squareNumbers([1, 2, 3, 4])

// Task 9 -> Filter Out Negative Numbers 

const filterPositive = number => {
    const filterNumber = number.filter(num => num > 0)
    console.log(filterNumber)
}
filterPositive([1, -2, 3, -4, 5])

// Task 10 -> Find a User by Id

const findUserById = (users, id) => {
    const found = users.find(user => {
        if (user.id == id) {
            console.log(user)
        }
    })
}
const pass = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
findUserById(pass, 2)

// Task 11 -> Calculate Total Price

const calculateTotalPrice = products => {
    const totalPrice = products.reduce((acc, current) => {
        const total = current.price * current.quantity;
        acc += total
        return acc
    }, 0)
    console.log(totalPrice)
}

const product = [{ price: 10, quantity: 2 }, { price: 5, quantity: 5 }]
calculateTotalPrice(product)

