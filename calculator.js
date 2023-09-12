exports.calculate = function(expression) {
// Initialize an empty stack to store operands and intermediate results
  const stack = [];

  // Split the expression into tokens (operators and operands) and reverse it
  const tokens = expression.split(/\s+/).reverse();

  for (const token of tokens) {
    // If the token is an operand, push it onto the stack
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else if (isOperator(token)) {
      // If the token is an operator, pop the top two operands from the stack
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      // Evaluate the operation and push the result back onto the stack
      const result = performOperation(token, operand2, operand1);
      stack.push(result);
    }
  }

  // The final result should be the only item left on the stack
  return stack.pop();
}

// Helper function to check if a token is an operator
function isOperator(token) {
  return token.match(/^[-+*/]$/);
}

// Helper function to perform an operation (+, -, *, /)
function performOperation(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      if (operand2 !== 0) {
        return operand1 / operand2;
      } else {
        throw new Error("Division by zero");
      }
    default:
      throw new Error("Invalid operator: " + operator);
  }
};
