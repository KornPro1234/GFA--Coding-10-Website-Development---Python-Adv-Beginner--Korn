let statement = "3 * 7"
function processMathStatement(statement) {
  let words = statement.toLowerCase().split(' ');
  let num1, num2, operator;

  for (let i = 0; i < words.length; i++) {
    if (!isNaN(words[i])){
      if (num1 == undefined){
        num1 = parseInt(words[i]);  
      }
      else{
        num2 = parseInt(words[i]);
      } 
    }
    else if (['plus', 'add', '+'].includes(words[i])){
      operator = "+";  
    }
    else if (['minus', 'subtract', '-'].includes(words[i])){
      operator = "-";  
    }
    else if (['mulitiply', 'times', '*'].includes(words[i])){
      operator = "*";  
    }
    else if (['divide', 'divided', '/'].includes(words[i])){
      operator = "/";  
    }
  }
  

  if (num1 !== undefined && num2 !== undefined && operator !== undefined) {
    switch (operator) {
      case "+":
        return num1 + num2
      case "-":
        return num1 - num2
      case "*":
        return num1 * num2
      case "/":
        return num1 / num2
      default:
        return "Invalid operator";
    }
  } else {
    return "Invalid statement";
  }
}
console.log(processMathStatement(statement));