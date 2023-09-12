# About
It's a calculator that performs basic math operations but using an alternative notation. It accepts a string of characters as input.

For example:
`3 - (4 * 5)` in prefix notation is written as `- 3 * 4 5`.

# The challenge
It is using an alternative syntax for writing arithmetics called [prefix notation](https://en.wikipedia.org/wiki/Polish_notation). It's the notation in which operators are placed before the corresponding operands in the expression.
This notation has advantages in programming as it is evaluated faster than the regular (infix) notation and are easier to parse for a machine (not for a human brain though) and operator precedence is never an issue.

So, the main challenge was to understand the logic behind this type of notation and to implement it in code.

# How did I solve this
First, the input string had to be divided into chunks of information and stored in temporary storage, based on their type: operands and numbers.

If the chunk of information is a number, it goes to the stack parsed as a number (just a JavaScript quirk). If the chunk is an operator, two numbers from the stack are taken and the operator is applied to them using "normal" math.

```
for (const token of tokens) {
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = performOperation(token, operand2, operand1);
      stack.push(result);
    }
  }
```

Order of execution is crucial here. Reversing the input string (after converting it into an array)`const tokens = expression.split(/\s+/).reverse();` allows to ensure the operators are evaluated in the correct order: rightmost operator is processed first.

# What did I learn
1) That prefix notation exists!
2) Practiced algorithmic thinking
3) Practiced regex'es, so I won't forget ;)