
const calculationHistory = [];

// Add two numbers
function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, num2, "+", result);
  return result;
}

// Subtract two numbers
function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, num2, "-", result);
  return result;
}

// Multiply two numbers
function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, num2, "*", result);
  return result;
}

// Divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  const result = num1 / num2;
  addToHistory(num1, num2, "/", result);
  return result;
}

// Store a calculation in the history
function addToHistory(num1, num2, operator, result) {
  const calculation = {
    operands: [num1, num2],
    operator: operator,
    result: result
  };

  calculationHistory.push(calculation);
}

// Display all stored calculations
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("You have no stored calculations.");
    return;
  }

  console.log("Calculation History:");

  calculationHistory.forEach((calculation, index) => {
    const [num1, num2] = calculation.operands;

    console.log(
      `${index + 1}. ${num1} ${calculation.operator} ${num2} = ${calculation.result}`
    );
  });
}

// Example usage
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

displayHistory();
