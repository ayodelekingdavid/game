// Utility Toolkit Project

// --- String Functions ---
function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// --- Array Functions ---
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// --- Math Functions ---
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// --- Demo Runner ---
function runDemo() {
  console.log("=== String Functions ===");
  console.log("Reverse:", reverseString("KingDavid"));
  console.log("Count Characters:", countCharacters("Hello World"));
  console.log("Capitalize:", capitalizeWords("javascript is fun"));

  console.log("\n=== Array Functions ===");
  let numbers = [10, 5, 20, 8];
  console.log("Max:", findMax(numbers));
  console.log("Min:", findMin(numbers));
  console.log("Sum:", sumArray(numbers));
  console.log("Filter (even):", filterArray(numbers, num => num % 2 === 0));

  console.log("\n=== Math Functions ===");
  console.log("Factorial(5):", factorial(5));
  console.log("Is Prime(17):", isPrime(17));
  console.log("Fibonacci(7):", fibonacci(7));
}

// Run the project
runDemo();
