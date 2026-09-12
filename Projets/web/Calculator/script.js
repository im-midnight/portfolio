const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
// Replace the evaluateExpression function with this:

function evaluateExpression(expression) {
    // Tokenize the expression
    const tokens = expression.match(/(\d+\.?\d*)|([+\-*/()])/g) || [];
    
    // Convert to postfix notation (Reverse Polish Notation)
    const output = [];
    const operators = [];
    
    const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
    
    for (const token of tokens) {
      if (!isNaN(token)) {
        output.push(parseFloat(token));
      } else if (token in precedence) {
        while (operators.length && 
               precedence[operators[operators.length - 1]] >= precedence[token]) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          output.push(operators.pop());
        }
        operators.pop(); // Remove the '('
      }
    }
    
    while (operators.length) {
      output.push(operators.pop());
    }
    
    // Evaluate the postfix expression
    const stack = [];
    for (const token of output) {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case '+': stack.push(a + b); break;
          case '-': stack.push(a - b); break;
          case '*': stack.push(a * b); break;
          case '/': stack.push(a / b); break;
        }
      }
    }
    
    if (stack.length !== 1) throw new Error("Invalid expression");
    return stack[0];
}
function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = evaluateExpression(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}