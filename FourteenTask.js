let funcOp = (num1, num2, operation) => {
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

console.log(funcOp(12, 5, '-'))
















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