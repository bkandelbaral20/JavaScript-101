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

function addOne(x) {
    return x + 1;
}

// assert(addOne(2), 3, "Exercise 11");
// assert(addOne(0), 1, "Exercise 11");
// assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
function isPositive(x) {
    return x > 0;
}

// assert(isPositive(positiveOddNumber), true, "Exercise 12");
// assert(isPositive(positiveEvenNumber), true, "Exercise 12");
// assert(isPositive(negativeOddNumber), false, "Exercise 12");
// assert(isPositive(negativeEvenNumber), false, "Exercise 12");

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative(x) {
    return x < 0;
}

// assert(isNegative(positiveOddNumber), false, "Exercise 13");
// assert(isNegative(positiveEvenNumber), false, "Exercise 13");
// assert(isNegative(negativeOddNumber), true, "Exercise 13");
// assert(isNegative(negativeEvenNumber), true, "Exercise 13");

//EXERCISE 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd(x) {
    return x % 2 !== 0;
}

// assert(isOdd(positiveOddNumber), true, "Exercise 14");
// assert(isOdd(positiveEvenNumber), false, "Exercise 14");
// assert(isOdd(negativeOddNumber), true, "Exercise 14");
// assert(isOdd(negativeEvenNumber), false, "Exercise 14");

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(x) {
    return x % 2 == 0;
}

// assert(isEven(2), true, "Exercise 15");
// assert(isEven(positiveOddNumber), false, "Exercise 15");
// assert(isEven(positiveEvenNumber), true, "Exercise 15");
// assert(isEven(negativeOddNumber), false, "Exercise 15");
// assert(isEven(negativeEvenNumber), true, "Exercise 15");

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

function identity(x) {
    return x;
}

// assert(identity(fruits), fruits, "Exercise 16");
// assert(identity(vegetables), vegetables, "Exercise 16");
// assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
// assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(num) {
    return (num > 0 && num % 2 === 1);
}

// assert(isPositiveOdd(3), true, "Exercise 17");
// assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
// assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
// assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven(num) {
    return (num > 0 && num % 2 !== 1);
}

// assert(isPositiveEven(4), true, "Exercise 18");
// assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
// assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd(num) {
    return (num < 0 && num % 2 !== 0);
}

console.log(isNegativeOdd(-3));

// assert(isNegativeOdd(-3), true, "Exercise 19");
// assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
// assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
// assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is
// both less than zero and even.
function isNegativeEven(num) {
    return (num < 0 && num % 2 === 0);
}

// assert(isNegativeEven(-4), true, "Exercise 20");
// assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
// assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
// assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half(x) {
    return (x * 1 / 2);
}

// assert(half(4), 2, "Exercise 21");
// assert(half(5), 2.5, "Exercise 21");
// assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
// assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double(x) {
    return (2 * x);
}

// assert(double(4), 8, "Exercise 22");
// assert(double(5), 10, "Exercise 22");
// assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
// assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple(x) {
    return (3 * x);
}

// assert(triple(4), 12, "Exercise 23");
// assert(triple(5), 15, "Exercise 23");
// assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
// assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the
// sign reversed.
function reverseSign(num) {
    return num * (-1);
}

// assert(reverseSign(4), -4, "Exercise 24");
// assert(reverseSign(-5), 5, "Exercise 24");
// assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
// assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
// assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue(num) {
    return (Math.abs(num));
}

// assert(absoluteValue(4), 4, "Exercise 25");
// assert(absoluteValue(-5), 5, "Exercise 25");
// assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number
// is evenly divisible by 3.
function isMultipleOfThree(num) {
    return (num % 3 === 0);
}

// assert(isMultipleOfThree(3), true, "Exercise 26");
// assert(isMultipleOfThree(15), true, "Exercise 26");
// assert(isMultipleOfThree(9), true, "Exercise 26");

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

function isMultipleOfFive(num) {
    return (num % 5 === 0);
}

// assert(isMultipleOfFive(3), false, "Exercise 27");
// assert(isMultipleOfFive(15), true, "Exercise 27");
// assert(isMultipleOfFive(9), false, "Exercise 27");

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(num) {
    return (num % 5 === 0 && num % 3 === 0);
}

// assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
// assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(num) {
    return (Math.pow(num, 2));
}

// assert(square(3), 9, "Exercise 29");
// assert(square(2), 4, "Exercise 29");

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
function add(x, y) {
    return x + y;
}

// assert(add(3, 2), 5, "Exercise 30");
// assert(add(10, -2), 8, "Exercise 30");
// assert(add(5, 7), 12, "Exercise 30");


//Exercises 31
// Write a function definition named cube that takes in a number and returns the number times itself, times
// itself.

function cube(x) {
    return Math.pow(x, 3);
}

// assert(cube(3), 27, "Exercise 31");
// assert(cube(2), 8, "Exercise 31");

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided
// number

function squareRoot(x) {
    return Math.sqrt(x);
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second
// argument.

function subtract(x, y) {
    return x - y;
}


/// Exercise 34
//  Write a function definition named multiply that takes in two numbers and returns
// the first times the second argument.

function multiply(x, y) {
    return x * y;
}

// Exercise 35
//  Write a function definition named divide that takes in two numbers and returns the first argument
//  divided by the second argument.

function divide(x, y) {
    return x / y;
}

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

function quotient(x, y) {
    return Math.floor(x / y);
}

// assert(quotient(27, 9), 3, "Exercise 36");
// assert(quotient(5, 2), 2, "Exercise 36");

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(x, y) {
    return x % y;
}

// assert(remainder(3, 3), 0, "Exercise 37");
// assert(remainder(5, 2), 1, "Exercise 37");

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(x, y) {
    return Math.pow(x, 2) + Math.pow(y, 2);
}

// assert(sumOfSquares(3, 2), 13, "Exercise 38");
// assert(sumOfSquares(5, 2), 29, "Exercise 38");

// Exercises 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
function timesTwoPlusThree(num) {
    return (2 * num) + 3
}

// assert(timesTwoPlusThree(0), 3, "Exercise 39");
// assert(timesTwoPlusThree(1), 5, "Exercise 39");
// assert(timesTwoPlusThree(2), 7, "Exercise 39");

//Exercises 40
//// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

function areaOfRectangle(x, y) {
    return x * y;
}

// assert(areaOfRectangle(1, 3), 3, "Exercise 40");
// assert(areaOfRectangle(5, 2), 10, "Exercise 40");

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle

function areaOfCircle(x) {
    return Math.PI * Math.pow(x, 2);
}

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

function circumference(num) {
    return 2 * Math.PI * num;
}

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(x) {
    var myVowels = "aeiouAEIOU";
    for (var i = 0; i < x.length; i++) {
        if (myVowels.includes(x.charAt(i).toLowerCase())) {
            return true;
        }
        return false;
    }
}

// assert(isVowel("a"), true, "Exercise 43");
// assert(isVowel("U"), true, "Exercise 43");
// assert(isVowel("banana"), false, "Exercise 43");

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

function hasVowels(value) {
    var vowelstring = "aeiouAEIOU";
    for (var x = 0; x < value.length; x++) {
        if (vowelstring.indexOf(value[x]) !== -1) {
            return true;
        }

    }
    return false;
}

// assert(hasVowels("banana"), true, "Exercise 44");
// assert(hasVowels("ubuntu"), true, "Exercise 44");
// assert(hasVowels("QQQQ"), false, "Exercise 44");

//EXERCISE 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of
// vowels in a sequence.

function countVowels(str) {
    var count = 0;
    var vowelString = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        if (vowelString.includes(str[i].toLowerCase())) {
            return count++;
        }
    }
    return count;
}

// assert(countVowels("banana"), 3, "Exercise 45");
// assert(countVowels("ubuntu"), 3, "Exercise 45");
// assert(countVowels("mango"), 2, "Exercise 45");
// assert(countVowels("QQQQ"), 0, "Exercise 45");

//Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels(str) {
    var vowelstring = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        if (vowelstring.indexOf(str[i]) !== -1) {
            str = str.replace(str[i], "");
        }
    }
    return str;
}

// assert(removeVowels("banana"), "bnn", "Exercise 46");
// assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
// assert(removeVowels("mango"), "mng", "Exercise 46");


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

function startsWithVowel(str) {
    var myVowels = "aeiouAEIOU";
    var isPresent = false;
    for (var i = 0; i < str.length; i++) {
        if (myVowels.includes(str[0].toLowerCase())) {
            isPresent = true;
        }
        return isPresent;
    }
}

// assert(startsWithVowel("ubuntu"), true, "Exercise 47");
// assert(startsWithVowel("banana"), false, "Exercise 47");
// assert(startsWithVowel("mango"), false, "Exercise 47");

// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel

function endsWithVowel(str) {
    var myVowels = "aeiouAEIOU";
    var isPresent = false;
    for (var i = 0; i < str.length; i++) {
        if (myVowels.includes(str[str.length - 1].toLowerCase())) {
            isPresent = true;
        }
        return isPresent;
    }
}

// assert(endsWithVowel("ubuntu"), true, "Exercise 48");
// assert(endsWithVowel("banana"), true, "Exercise 48");
// assert(endsWithVowel("mango"), true, "Exercise 48");

// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

function startsAndEndsWithVowel(str) {
    var myVowels = "aeiouAEIOU";
    var isPresent = false;

    for (var i = 0; i < str.length; i++) {
        if (myVowels.includes(str[str.length - 1].toLowerCase()) &&
            myVowels.includes(str[0].toLowerCase())) {
            isPresent = true;
        }
        return isPresent;
    }
}

// assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
// assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
// assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");

// Exercise 50`;
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

function first(x) {
    return x[0];
}

// assert(first("ubuntu"), "u", "Exercise 50");
// assert(first([1, 2, 3]), 1, "Exercise 50");

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

function second(x) {
    return x[1];
}

// assert(second("ubuntu"), "b", "Exercise 51");
// assert(second([1, 2, 3]), 2, "Exercise 51");
// assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");


// Exercise 52
//  Write a function definition named third that takes in sequence and returns the third value of that sequence.
//
function third(x) {
    return x[2];
}

// assert(third("ubuntu"), "u", "Exercise 52");
// assert(third([1, 2, 3]), 3, "Exercise 52");
// assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

function forth(x) {
    return x[3];
}

// assert(forth("ubuntu"), "n", "Exercise 53");
// assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
// assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
// addToDone("Exercise 53 is correct.");

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

function last(x) {
    return x[x.length - 1];
}

// assert(last("ubuntu"), "u", "Exercise 54");
// assert(last([1, 2, 3, 4]), 4, "Exercise 54");
// assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");


//Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

function secondToLast(x) {
    return x[x.length - 2];
}

// assert(secondToLast("ubuntu"), "t", "Exercise 55");
// assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
// assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

function thirdToLast(x) {
    return x[x.length - 3];
}

// assert(thirdToLast("ubuntu"), "n", "Exercise 56");
// assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
// assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
// assert(
//     thirdToLast(["strawberry", "kiwi", "mango", "guava"]),
//     "kiwi",
//     "Exercise 56"
// );

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array

function firstAndSecond(x) {
    return [first(x), second(x)];
}

// assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
// assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
// assert(
//     firstAndSecond(["strawberry", "kiwi", "mango", "guava"]),
//     ["strawberry", "kiwi"],
//     "Exercise 57"
// );

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

function firstAndLast(x) {
    return [first(x), last(x)];
}

// assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
// assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"], "Exercise 58");
// assert(
//     firstAndLast(["strawberry", "kiwi", "mango", "guava"]),
//     ["strawberry", "guava"],
//     "Exercise 58"
// );

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

function firstToLast(y) {
    var first = y.shift();
    y.push(first);
    return y;
}

// assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
// assert(
//     firstToLast(["JS", "is", "awesome"]),
//     ["is", "awesome", "JS"],
//     "Exercise 59"
// );
// assert(
//     firstToLast(["strawberry", "kiwi", "mango", "guava"]),
//     ["kiwi", "mango", "guava", "strawberry"],
//     "Exercise 59"
// );

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

function sumAll(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
}

// assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
// assert(sumAll([3, 3, 3]), 9, "Exercise 60");
// assert(sumAll([0, 5, 6]), 11, "Exercise 60");

//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
function mean(x) {
    var sum = 0;
    x.forEach(function (nums) {
        sum += nums;
    });
    return sum / x.length;
}

// assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
// assert(mean([3, 3, 3]), 3, "Exercise 61");
// assert(mean([1, 5, 6]), 4, "Exercise 61");

// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value

function median(num) {
    if (num.length % 2 === 0) {
        return (num[num.length / 2] + num[num.length / 2 - 1]) / 2;
    } else {
        return num[parseInt(num.length / 2)];
    }
}

// assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
// assert(median([1, 2, 3]), 2.0, "Exercise 62");
// assert(median([1, 5, 6]), 5.0, "Exercise 62");

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.

function maxMinusMin(numbers) {
    //using sorting method for ascending numbers
    numbers.sort();
    return numbers[numbers.length - 1] - numbers[0];
}

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

function productOfAll(numbers) {
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

// assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
// assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
// assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

function getHighestNumber(numbers) {
    //arranging into ascending orders so that the last element will be the largest number
    numbers.sort()
    return numbers[numbers.length - 1];
}

// assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
// assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
// assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

function getSmallestNumber(numbers) {
    //arranging into ascending orders so that the first element will be the smallest number
    numbers.sort();
    return numbers[0];
}

// assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
// assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
// assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.

function onlyOddNumbers(numbers) {
    var newArrayNumber = [];
    for (var i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) % 2 === 1) {
            newArrayNumber.push(numbers[i]);
        }
    }
    return newArrayNumber;
}

// assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
// assert(
//     onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
//     [-5, -3, -1, 1, 3, 5],
//     "Exercise 67"
// );
// assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
// }

//// Exercise 68
// // Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.

function onlyEvenNumbers(numbers) {
    var newArray = [];
    for (var i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) % 2 === 0) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}

console.log(onlyEvenNumbers(numbers));

// assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
// assert(
//   onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
//   [-4, -2, 2, 4],
//   "Exercise 68"
// );

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

function onlyPositiveNumbers(x) {
    var newArray = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            newArray.push(x[i]);
        }
    }
    return newArray;
}

// assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
// assert(
//     onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
//     [1, 2, 3, 4, 5],
//     "Exercise 69"
// );
// assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.

function onlyNegativeNumbers(x) {
    var newArray = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            newArray.push(x[i]);
        }
    }
    return newArray;
}

// assert(onlyNegativeNumbers([1, 2, 3]), [], "Exercise 70");
// assert(
//     onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
//     [-5, -4, -3, -2, -1],
//     "Exercise 70"
// );
// assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3], "Exercise 70");

// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence

function hasEvens(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            return true;
        }
    }
    return false;
}

// assert(hasEvens([1, 2, 3]), true, "Exercise 71");
// assert(hasEvens([2, 5, 6]), true, "Exercise 71");
// assert(hasEvens([3, 3, 3]), false, "Exercise 71");

// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers

function countEvens(num) {
    var bucket = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            bucket.push(num[i]);
        }
    }
    return bucket.length;
}

// assert(countEvens([1, 2, 3]), 1, "Exercise 72");
// assert(countEvens([2, 5, 6]), 2, "Exercise 72");
// assert(countEvens([3, 3, 3]), 0, "Exercise 72");

// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence

function hasOdds(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1) {
            return true;
        }
    }
    return false;
}

// assert(hasOdds([1, 2, 3]), true, "Exercise 73");
// assert(hasOdds([2, 5, 6]), true, "Exercise 73");
// assert(hasOdds([3, 3, 3]), true, "Exercise 73");

// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence

function countOdds(num) {
    var newArray = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1) {
            newArray.push(num[i]);
        }
    }
    return newArray.length;
}

// assert(countOdds([1, 2, 3]), 2, "Exercise 74");
// assert(countOdds([2, 5, 6]), 1, "Exercise 74");
// assert(countOdds([3, 3, 3]), 3, "Exercise 74");
// assert(countOdds([2, 4, 6]), 0, "Exercise 74");

// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers

function countNegatives(num) {
    var bucket = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            bucket.push(num[i]);
        }
    }
    return bucket.length;
}

// assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
// assert(countNegatives([2, -5, -6]), 2, "Exercise 75");


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive number
function countPositives(num) {
    var bucket = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            bucket.push(num[i]);
        }
    }
    return bucket.length;
}

// assert(countPositives([1, -2, 3]), 2, "Exercise 76");
// assert(countPositives([2, -5, -6]), 1, "Exercise 76");
// assert(countPositives([3, 3, 3]), 3, "Exercise 76");

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

function onlyPositiveEvens(num) {
    var bucket = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0 && num[i] % 2 === 0) {
            return bucket.push(num[i]);
        }
    }
    return bucket;
}

// assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
// assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
// assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

function onlyPositiveOdds(num) {
    var bucket = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0 && num[i] % 2 === 1) {
            return bucket.push(num[i]);
        }
    }
    return bucket;
}

// assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
// assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
// assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence

function onlyNegativeEvens(x) {
    var bucket = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0 && x[i] % 2 === 0) {
            bucket.push(x[i]);
        }
    }
    return bucket;
}

// assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
// assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
// assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence

function onlyNegativeOdds(x) {
    var bucket = [];
    for (var i = 0; i < x.length; i++) {
        if ((x[i] < 0) && x[i] % 2 !== 0) {
            bucket.push(x[i]);
        }
    }
    return bucket;
}

// assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
// assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
// assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.

function shortestString(x) {
    //lets assume it is first element
    var shortest = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i].length < shortest.length) {
            shortest = x[i];
        }
    }
    return shortest;
}

// assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
// assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
// assert(
//     shortestString(["mary", "had", "a", "little", "lamb"]),
//     "a",
//     "Exercise 81"
// );

// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.

function longestString(x) {
    var longest = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i].length > longest.length) {
            longest = x[i];
        }
    }
    return longest;
}

// assert(
//     longestString(["kiwi", "mango", "strawberry"]),
//     "strawberry",
//     "Exercise 82"
// );
// assert(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
// assert(
//     longestString(["mary", "had", "a", "little", "lamb"]),
//     "little",
//     "Exercise 82"
// );

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.

function getUniqueValues(arr) {
    //Distinct array values  using Set and Array from a method
    const result = Array.from(new Set(arr));
}

// assert(
//     getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]),
//     ["ant", "mosquito", "ladybug"],
//     "Exercise 83"
// );
// assert(
//     getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]),
//     ["b", "a", "n", "s"],
//     "Exercise 83"
// );

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.

var arr = [1, 2, 3];

function elementsTimesTwo(arr) {
    var bucket = [];
    for (var i = 0; i < arr.length; i++) {
        var double = arr[i] + arr[i];
        bucket.push(double)
    }
    return bucket;
}

console.log(elementsTimesTwo(arr));

// assert(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84");
// assert(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84");
// assert(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84");

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.

function flatten(arr) {
    // use the Array.flat() method to flatten the nested sub-arrays into the parent.
    return arr.flat();
}

// assert(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6], "Exercise 85");
// assert(
//     flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
//     [1, 2, 3, 1, 2, 3, 1, 2, 3],
//     "Exercise 85"
// );

// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array

function addOneToArray(arr) {
    var bucket = [];
    for (var i = 0; i < arr.length; i++) {
        var addingOne = arr[i] + 1;
        bucket.push(addingOne);
    }
    return bucket;
}

console.log(addOneToArray(arr))

// assert(addOneToArray([1, 2, 3]), [2, 3, 4], "Exercise 86");
// assert(addOneToArray([4, 4, 4]), [5, 5, 5], "Exercise 86");

// Working with JS Objects

// The following objects
const tukeyPaper = {
    title: "The Future of Data Analysis",
    author: "John W. Tukey",
    link: "https://projecteuclid.org/euclid.aoms/1177704711",
    year_published: 1962
};

const thomasPaper = {
    title: "A mathematical model of glutathione metabolism",
    author: "Rachel Thomas",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    year_published: 2008
};

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property

function getPaperTitle(varName) {
    return varName.title;
}

// assert(getPaperTitle(tukeyPaper), "The Future of Data Analysis", "Exercise 87");
// assert(
//     getPaperTitle(thomasPaper),
//     "A mathematical model of glutathione metabolism",
//     "Exercise 87"
//);

// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.

function getYearPublished(varName) {
    return varName.year_published;
}

// assert(getYearPublished(tukeyPaper), 1962, "Exercise 88");
// assert(getYearPublished(thomasPaper), 2008, "Exercise 88");

// this code defines a JS object with information about a book.

const book = {
    title: "Genetic Algorithms and Machine Learning for Programmers",
    price: 36.99,
    author: "Frances Buontempo"
};

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price

function getPrice(book) {
    return book.price;
}

console.log(getPrice(book));


// assert(getPrice(book), 36.99, "Exercise 89");

// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name

function getBookAuthor(book) {
    return book.author;
}

console.log(getBookAuthor(book));

//assert(getBookAuthor(book), "Frances Buontempo", "Exercise 90");

// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        title: "Genetic Algorithms and Machine Learning for Programmers",
        price: 36.99,
        author: "Frances Buontempo"
    },
    {
        title: "The Visual Display of Quantitative Information",
        price: 38.0,
        author: "Edward Tufte"
    },
    {
        title: "Practical Object-Oriented Design",
        author: "Sandi Metz",
        price: 30.47
    },
    {
        title: "Weapons of Math Destruction",
        author: "Cathy O'Neil",
        price: 17.44
    }
];

// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.

function getNumberOfBooks(books) {
    return books.length;
}

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum
// total of all the book prices added together

function totalOfBookPrices(books) {
    var totalPrice = 0;
    for (var i = 0; i < books.length; i++) {
        totalPrice += books[i].price;
    }
    return totalPrice;
}

console.log(totalOfBookPrices(books));

// assert(totalOfBookPrices(books), 122.9, "Exercise 92");

// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
function getAverageBookPrice(books) {
    var totalPrice = 0;
    for (var i = 0; i < books.length; i++) {
        totalPrice += books[i].price;
    }
    return totalPrice / books.length;
}

console.log(getAverageBookPrice(books));

// assert(getAverageBookPrice(books), 30.725, "Exercise 93");

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the
// object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object
// with the price set to zero to compare to each object's price in the array

function highestPriceBook(books) {
    //     arranging array object in ascending order
    books.sort();
    return books[1];
}

console.log(highestPriceBook(books));

// assert(
//     highestPriceBook(books),
//     {
//             title: "The Visual Display of Quantitative Information",
//             price: 38.0,
//             author: "Edward Tufte"
//     },
//     "Exercise 94"
// );

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array

function lowestPriceBook(books) {
    books.sort()
    return books[books.length - 1];
}

// assert(
//     lowestPriceBook(books),
//     {
//             title: "Weapons of Math Destruction",
//             author: "Cathy O'Neil",
//             price: 17.44
//     },
//     "Exercise 95"
// );


const shoppingCart = {
    tax: 0.08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
};

// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.

function getTaxRate(shoppingCart) {
    return shoppingCart.tax;
}
console.log(getTaxRate(shoppingCart));

// assert(getTaxRate(shoppingCart), 0.08, "Exercise 96");

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.

function numberOfItemTypes(shoppingCart) {
        return shoppingCart.items.length;
}

// assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type

function totalNumberOfItems(shoppingCart) {
        var totalQuantities = 0;
        for (var i=0; i<shoppingCart.items.length;i++){
                totalQuantities += shoppingCart.items[i].quantity;
        }
        return totalQuantities;
}
// assert(totalNumberOfItems(shoppingCart), 17, "Exercise 98");

// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.

function getAverageItemPrice(shoppingCart) {
var totalPrice = 0;
for(var i=0; i<shoppingCart.items.length; i++){
        totalPrice += shoppingCart.items[i].price;
}
return totalPrice / numberOfItemTypes(shoppingCart);
}

// assert(getAverageItemPrice(shoppingCart), 2.1420000000000003, "Exercise 99");