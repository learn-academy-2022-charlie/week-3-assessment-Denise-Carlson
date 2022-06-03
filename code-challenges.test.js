// ASSESSMENT 3: Coding Practical Questions with Jest

//const { exportAllDeclaration } = require("@babel/types")
//const { isTypedArray } = require("util/types")
//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//pseudocode
// Each number is the sum of the 2 proceeding ones. Our array length is the same length as our number our first argument is greater than 2. Set a condition where the function evaluates if the number is greater than 2. Input would be a given number and output would be an array with the same amount of numbers as our input number. Idea use recursion to return the sum of number minus 1 and number minus 2. 
describe("fibonacci", () => {

   
    it(" takes a number greater than 2 returns an array that is the same length containing the numbers of the fibonacci sequence", () => {
        const fibLength1 = 6
        const fibLength2 = 10
        expect(fibonacci(fibLength1)).toEqual([1,1,2,3,5,8])
        expect(fibonacci(fibLength2)).toEqual([1,1,2,3,5,8,13,21,34,55])
    })
})
//Test Suites: 1 failed, 1 total


 
const fibonacci = (num) => {
  
    if (num < 2) {
       
    return [1,1]
    }
    else {
        
    const array = fibonacci(num-1); + array.push(array[array.length -1] + array[array.length- 2])
    return array
    }
}
const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        
const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] 
(fibonacci(fibLength1))
(fibonacci(fibLength2))
// b) Create the function that makes the test pass. I cannot get this to pass and I'm not sure why.  ReferenceError 10 is not a function


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//pseudocode**
//input an array of numbers and output a new array with only the odd numbers in order from smallest to largest number. I can use an empty array inside the function to return a new array with the condition of being sorted. 
 



//console.log(onlyEven(myArr2))
describe("onlyOdd", () =>{
     it( "Takes an array of numbers and returns an array with only the odd numbers in ascending order", () => {
     const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
     // Expected output: [-9, 7, 9, 199]
     
     const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
     // Expected output: [-823, 7, 23]
expect(onlyOdd(fullArr1)).toEqual([-9,7,9,199]) 
expect(onlyOdd(fullArr1)).toEqual([-823,7,23])  
})
}
//
//I'm not sure what is wrong if I somehow changed the file but I literally cannot get any of the tests to run. I have an red underline under my const on line 103 which I suspect is the issue I tried for over 4 hours and I am so frustrated at this point.
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

// SyntaxError: /Users/learnacademy/Desktop/week-3-assessment-Denise-Carlson/code-challenges.test.js: Unexpected token, expected "," (115:0)

//   113 | //get the sum by doing loop method 
//   114 | //return slice and map to array
// > 115 |
//       | ^
// a) Create a test with expect statements for each of the variables provided.



// b) Create the function that makes the test pass.

    // const onlyOdd = (array) => {
    //     let newArr = []
    //     for (let i = 0; i < array.length; i++)
    //     {
    //         if (array[i] % 2 === 0)
    //         {
    //             newArr.push(array[i])
    //         }
    //     }
    //     return newArr
    // }
// its happening again and I don't understand why this issue is driving me crazy. I literally copied most of the example so I know my syntax is right why is this happening ?
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Pseudocode**
// I have an array of numbers which is the input. My output is going to be a new array with all of the numbers added up in the array to form a new array of the sum of all the numbers
describe("accum",() => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
 const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []
expect(accum(numbersToAdd1)).toEqual([2, 6, 51,60])
expect(accum(numbersToAdd2)).toEqual([0,7,-1,11])
expect(accum(numbersToAdd3)).toEqual([])

    })
})

// a) Create a test with expect statements for each of the variables provided.



// b) Create the function that makes the test pass.
//pseudocode
// create a function that adds sum and takes the array as its parameter. Use map to go through array taking in value and index as parameter in the fuction
//slice the array between zero and next index +1
//get the sum by doing loop method 
//return slice and map to array

const accum = (array) => {
return array.map((value,index) => {
    return array.slice(0,index + 1).reduce(prev.curr) => {
        return prev + curr
    })
})
}
//this assessment was so frustrating I literally couldn't get anything to work correctly. I spent several days trying to figure out what was going wrong.