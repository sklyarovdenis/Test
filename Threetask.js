let arrayString = ['String1', 'String2', 'String3'];

const FunctionArrayString = (array) => {
  let i = 0
  let f = array.length

  while (i < f) {
    let string = array.pop();
    console.log(string);
    alert(string)
    i++;

  }
    console.log(arrayString)
};

FunctionArrayString(array)

// Написать функцию, принимающую массив строк и выводящих их на экран, 
// используя цикл while. Элементы из массива извлекать с помощью оператора .pop()