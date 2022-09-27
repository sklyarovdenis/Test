let arrayAdultsСalculator = (arrayPeople) => {

  let arrayAge = arrayPeople.filter(human => (human.age >= 18));
    
  let arrayName = arrayAge.map(item => {
      return item.name
  });

  let i = 0
  let m = arrayName.length

  while (i < m) {
      let arrayAdults = arrayName.pop();
      console.log(arrayAdults);
      i++;
   };
}

arrayAdultsСalculator([
    { name: 'Ivan', age: 24 },
    { name: 'Oleg', age: 16 }, 
    { name: 'Igor', age: 24 }
]);

// Имеется массив пользователей вида
// [{ name: “Ivan”, age: 24 }]. Вывести имена тех пользователей,
// возраст которых больше 18 лет.