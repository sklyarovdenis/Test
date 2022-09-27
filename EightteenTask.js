const nameObject = (flpName) => {
    const result = flpName.split(" ")
    return {
        First_name: result[1],
        last_name: result[0],
        patronymic_name: result[2]
    }
}

console.log(nameObject('Иванов Пётр Андреевич'))

// Написать функцию, принимающую на вход ФИО в виде одной строки. 
// Функция должна возвращать объект вида 
// { first_name: “Имя”, last_name: “Фамилия”, patronymic_name: “Отчество”}