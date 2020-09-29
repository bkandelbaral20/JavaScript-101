//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false

var onMarsRightNow = false;
assert(onMarsRightNow, false, "Exercise 1");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]
assert(
    fruits,
    ["mango", "banana", "guava", "kiwi", "strawberry"],
    "Exercise 2"
);

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini

var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"]
assert(
    vegetables,
    ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"],
    "Exercise 3"
);

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push("tomato");
assert(
    fruits,
    ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"],
    "Exercise 5"
);

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push("tomato");
assert(
    vegetables,
    ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"],
    "Exercise 6"
);

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.

var someNumbers = numbers.reverse();
assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7");

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort();
assert(
    vegetables,
    ["broccoli", "carrot", "cauliflower", "eggplant", "tomato", "zucchini"],
    "Exercise 8"
);
vegetables.sort();

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort();
fruits.reverse();
assert(
    fruits,
    ["tomato", "strawberry", "mango", "kiwi", "guava", "banana"],
    "Exercise 9"
);

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = fruits.concat(vegetables);
assert(
    fruitsAndVeggies,
    [
        "tomato",
        "strawberry",
        "mango",
        "kiwi",
        "guava",
        "banana",
        "broccoli",
        "carrot",
        "cauliflower",
        "eggplant",
        "tomato",
        "zucchini"
    ],
    "Exercise 10"
);

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne (x) {
    return x + 1;
}
// assert(addOne(2), 3, "Exercise 11");
// assert(addOne(0), 1, "Exercise 11");
// assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
function isPositive(x){
        return x>0;
}
// assert(isPositive(positiveOddNumber), true, "Exercise 12");
// assert(isPositive(positiveEvenNumber), true, "Exercise 12");
// assert(isPositive(negativeOddNumber), false, "Exercise 12");
// assert(isPositive(negativeEvenNumber), false, "Exercise 12");

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative(x){
        return x<0;
}

// assert(isNegative(positiveOddNumber), false, "Exercise 13");
// assert(isNegative(positiveEvenNumber), false, "Exercise 13");
// assert(isNegative(negativeOddNumber), true, "Exercise 13");
// assert(isNegative(negativeEvenNumber), true, "Exercise 13");

//EXERCISE 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd(x){
        return x%2 !== 0;
}
// assert(isOdd(positiveOddNumber), true, "Exercise 14");
// assert(isOdd(positiveEvenNumber), false, "Exercise 14");
// assert(isOdd(negativeOddNumber), true, "Exercise 14");
// assert(isOdd(negativeEvenNumber), false, "Exercise 14");

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(x){
        return x%2 == 0;
}
// assert(isEven(2), true, "Exercise 15");
// assert(isEven(positiveOddNumber), false, "Exercise 15");
// assert(isEven(positiveEvenNumber), true, "Exercise 15");
// assert(isEven(negativeOddNumber), false, "Exercise 15");
// assert(isEven(negativeEvenNumber), true, "Exercise 15");

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

function identity (x){
        return x;
}
// assert(identity(fruits), fruits, "Exercise 16");
// assert(identity(vegetables), vegetables, "Exercise 16");
// assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
// assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd (num){
        return (num>0 && num%2 === 1);
}
// assert(isPositiveOdd(3), true, "Exercise 17");
// assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
// assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
// assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven (num){
        return (num>0 && num%2 !== 1);
}

// assert(isPositiveEven(4), true, "Exercise 18");
// assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
// assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd (num){
        return (num<0 && num%2 !==0);
}
console.log(isNegativeOdd(-3));

// assert(isNegativeOdd(-3), true, "Exercise 19");
// assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
// assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
// assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is
// both less than zero and even.
function isNegativeEven (num){
        return (num<0 && num%2 === 0);
}

// assert(isNegativeEven(-4), true, "Exercise 20");
// assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
// assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
// assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half (x){
        return (x * 1/2);
}

// assert(half(4), 2, "Exercise 21");
// assert(half(5), 2.5, "Exercise 21");
// assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
// assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double (x){
        return (2*x);
}

// assert(double(4), 8, "Exercise 22");
// assert(double(5), 10, "Exercise 22");
// assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
// assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple (x){
        return (3*x);
}

// assert(triple(4), 12, "Exercise 23");
// assert(triple(5), 15, "Exercise 23");
// assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
// assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the
// sign reversed.
function reverseSign(num){
        return num * (-1);
}
// assert(reverseSign(4), -4, "Exercise 24");
// assert(reverseSign(-5), 5, "Exercise 24");
// assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
// assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
// assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue(num){
        return (Math.abs(num));
}

// assert(absoluteValue(4), 4, "Exercise 25");
// assert(absoluteValue(-5), 5, "Exercise 25");
// assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number
// is evenly divisible by 3.
function isMultipleOfThree(num){
        return (num % 3 === 0);
}
// assert(isMultipleOfThree(3), true, "Exercise 26");
// assert(isMultipleOfThree(15), true, "Exercise 26");
// assert(isMultipleOfThree(9), true, "Exercise 26");

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

function isMultipleOfFive(num){
        return (num%5 === 0);
}
// assert(isMultipleOfFive(3), false, "Exercise 27");
// assert(isMultipleOfFive(15), true, "Exercise 27");
// assert(isMultipleOfFive(9), false, "Exercise 27");

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(num){
        return (num%5 === 0 && num%3 === 0);
}
// assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(num){
        return (Math.pow(num,2));
}
// assert(square(3), 9, "Exercise 29");
// assert(square(2), 4, "Exercise 29");

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
function add (x,y){
        return x+y;
}

// assert(add(3, 2), 5, "Exercise 30");
// assert(add(10, -2), 8, "Exercise 30");
// assert(add(5, 7), 12, "Exercise 30");


//Exercises 31
// Write a function definition named cube that takes in a number and returns the number times itself, times
// itself.

function cube(x){
        return Math.pow(x,3);
}

// assert(cube(3), 27, "Exercise 31");
// assert(cube(2), 8, "Exercise 31");

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided
// number

function squareRoot(x){
        return Math.sqrt(x);
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second
// argument.

function subtract(x,y){
        return x-y;
}


/// Exercise 34
//  Write a function definition named multiply that takes in two numbers and returns
// the first times the second argument.

function multiply(x,y){
        return x*y;
}

// Exercise 35
//  Write a function definition named divide that takes in two numbers and returns the first argument
//  divided by the second argument.

function divide(x,y){
  return x/y;
}

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

function quotient(x,y){
        return Math.floor(x/y);
}

// assert(quotient(27, 9), 3, "Exercise 36");
// assert(quotient(5, 2), 2, "Exercise 36");

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(x,y){
        return x%y;
}

// assert(remainder(3, 3), 0, "Exercise 37");
// assert(remainder(5, 2), 1, "Exercise 37");

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(x,y){
        return Math.pow(x,2) + Math.pow(y,2);
}
// assert(sumOfSquares(3, 2), 13, "Exercise 38");
// assert(sumOfSquares(5, 2), 29, "Exercise 38");

