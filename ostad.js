// 1) Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5));

// 2) Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 7 Odd?:", isOdd(7));
console.log("Is 8 Odd?:", isOdd(8));

// 3) Function to find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log("Minimum Value:", findMin([3, 1, 4, 1, 5, 9]));

// 4) Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 5) Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log("Sorted Descending:", sortArrayDescending([5, 2, 8, 1, 3]));

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str[0].toLowerCase() + str.slice(1);
}
console.log("Lowercase First Letter:", lowercaseFirstLetter("Hello World"));

// 7) Function to calculate the average of an array of numbers
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log("Average:", findAverage([1, 2, 3, 4, 5]));

// 8) Function to check if a year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}
console.log("Is 2024 a Leap Year?:", isLeapYear(2024));
console.log("Is 2023 a Leap Year?:", isLeapYear(2023));
