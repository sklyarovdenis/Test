const functionArithmeticOperations = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
  }
};

console.log(functionArithmeticOperations(12, 5, '-'))

// Написать функцию, принимающую два числа 
// и любую операцию над этими числами (сложение, вычитание или др.). 
// В функции выполнить эту операцию и вернуть результат.














// let funcNum = (num1, num2, operation) => {
//     if (operation == '+') {
//         return num1 + num2
//     } else if (operation == '-') {
//         return num1 - num2
//     } else if (operation == '*') {
//         return num1 * num2
//     } else if (operation == '/') {
//         return num1 / num2
//     }
// };

// console.log(funcNum(12, 5, '+'))