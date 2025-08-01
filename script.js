function calculate(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num2 !== 0 ? num1 / num2 : "Error";
}

let number1 = null;
let operator = null;
let number2 = null;

const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if(value === "C"){
      operator = '';
      number1 = "";
      number2 = '';
      display.textContent = '';
    }

    else if(value === "⌫"){
      display.textContent = display.textContent.slice(0, -1);

      if(operator){
        number2 = display.textContent;
      }
      else{
        number1 = display.textContent;
      }
    }

    else if(["+","-","*","/","="].includes(value) && number1 && number2){
      const result = calculate(parseFloat(number1), parseFloat(number2), operator);
      display.textContent = result;
      number1 = display.textContent;
      number2 = '';
      if(["+","-","*","/"].includes(value)){
        operator = value;
      }
      else{
        operator = '';
      }
    }

    else if(["+","-","*","/"].includes(value)){
      number1 = display.textContent;
      operator = value;
      value = '';      
    }

    else if(!isNaN(value) || value === "."){

      if(value === "." && display.textContent.includes(".")){
        return;
      }

      if(number2){
        display.textContent += value;
        number2 = display.textContent;
      }
      else if(number1 || ["+","-","*","/"].includes(operator)){
        display.textContent = value;
        number2 = display.textContent;
      }
      else{
        display.textContent += value;
      }

    }
  
  })

})



