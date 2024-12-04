const number = 123;

// Check divisibility for 2, 3, and 5
const isDivisibleBy2 = number % 2 === 0;
const isDivisibleBy3 = number % 3 === 0;
const isDivisibleBy5 = number % 5 === 0;

// Calculate the result using logical operations
const divisibilityCount =
  Number(isDivisibleBy2) + Number(isDivisibleBy3) + Number(isDivisibleBy5);

// Print the result
console.log(divisibilityCount);
 