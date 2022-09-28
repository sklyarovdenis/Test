const getMinMaxAge = (users) => {
    let min
    let max

    users.forEach((item, index) => {
        if(index === 0) {
            min = item.age
            max = item.age
        } else {
            if(item.age < min) min = item.age
            if(item.age > max) max = item.age
        }
    })
    return {min: min, max: max}
};

console.log(getMinMaxAge([
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
]))


// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. 
// Рассчитать минимальный и максимальный возраст всех пользователей. 
// Результат записать в объект вида { min: …, max: … }