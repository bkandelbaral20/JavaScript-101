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
        return num>0 && num%2==1;
}
// assert(isPositiveOdd(3), true, "Exercise 17");
// assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
// assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
// assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven (num){
        return num>0 && num%2!=1;
}

// assert(isPositiveEven(4), true, "Exercise 18");
// assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
// assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd (num){
        return num<0 && num%2 !=0;
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
        return num<0 && num%2 ==0;
}

// assert(isNegativeEven(-4), true, "Exercise 20");
// assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
// assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
// assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half (x){
        return x * 1/2;
}

// assert(half(4), 2, "Exercise 21");
// assert(half(5), 2.5, "Exercise 21");
// assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
// assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double (x){
        return 2*x;
}

// assert(double(4), 8, "Exercise 22");
// assert(double(5), 10, "Exercise 22");
// assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
// assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");