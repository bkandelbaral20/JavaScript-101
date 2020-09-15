//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false

var onMarsRightNow = false;

assert(onMarsRightNow, false, "Exercise 1");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits =["mango", "banana", "guava", "kiwi", "strawberry"]

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

var someNumbers= numbers.reverse();


assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7");