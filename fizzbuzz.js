let num = parseInt(inp); // Don't change this line

// Print the welcome message
console.log("Welcome to FizzBuzz!");

// Define the fizzbuzz function with the twist
function fizzbuzz(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 7 === 0) {
        return "Buzz";
    } else if (n.toString().includes('3')) {
        return "Almost Fizz";
    } else {
        return n.toString();
    }
}

// Loop from 1 to num and print each FizzBuzz result
for (let i = 1; i <= num; i++) {
    console.log(fizzbuzz(i));
}