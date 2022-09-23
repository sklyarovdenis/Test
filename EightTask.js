const array8 = [
  { name: 'Ivan', age: 24 },
  { name: 'Oleg', age: 16 }, 
  { name: 'Igor', age: 24 }
];
  
const FunctionTotalNumberOfYears = (array) => {
  
  let sum = 0;
  
  for(let i = 0; i < array.length; i++){
    sum += array[i].age;
  }
  return sum
};
  
console.log(FunctionTotalNumberOfYears(array8))
  
// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. 
// Вывести суммарный возраст всех пользователей.