// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "You are awesome!"
}

var one = greeting();
var two = greeting();

console.log(one);
console.log(two);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Nice to meet you, ${name}`;
}

    var customGreeting1 = customGreeting("Natalie");
    var customGreeting2 = customGreeting("Roberto");

console.log(customGreeting1);
console.log(customGreeting2);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    var fullName = `${first} ${middle} ${last}`;
    return `Why hello there, ${fullName}`;
}

    var person1 = greetPerson("Natalie", "Dianne", "Rodriguez");
    var person2 = greetPerson("Roberto", "Jr", "Rodriguez");

console.log(person1);
console.log(person2);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    return num * num;
}


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (quantity >= 4) {
        console.log(`${item} in stock`);
    }   else if (quantity > 0) {
        console.log(`${item} low stock`);
    }   else {
        console.log(`${item} out of stock`);
    }
}

checkStock(1, "Salsa");
checkStock(2, "Cheese");
checkStock(3, "Tortillas");
checkStock(4, "coffee");

