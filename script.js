//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = 'InvalidExprError';
  }
}

function evaluateExpression(expression) {
  const validChars = /^[0-9+\-*/\s]+$/;

  if (!validChars.test(expression)) {
    throw new OutOfRangeError(expression);
  }

  try {
    // Attempt to evaluate the expression
    eval(expression);
  } catch (error) {
    throw new InvalidExprError();
  }
}

// Example usage
try {
  const expression1 = '3 + 5 * (2 - 1)';
  evaluateExpression(expression1);
  console.log('Expression is valid:', expression1);

  const expression2 = '2 + abc';
  evaluateExpression(expression2); // This will throw an OutOfRangeError
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error('An unexpected error occurred:', error.message);
  }
}

