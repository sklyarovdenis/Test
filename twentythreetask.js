let unique = (array) => {
    let result = {};
    for (let i = 0; i < array.length; ++i) {
        let a = array[i];
        if (result[a] != undefined) {
            ++result[a];
        } else result[a] = 1

    }
    for (let key in result)
    console.log (key, ' ', result[key])
};

unique(["aaa", "bbb", "ccc", "aaa", "bbb", "aaa"]);


// Имеется массив строк. Строки в массиве могут повторяться любое количество раз. 
// Вывести уникальные строки и их количество в массиве.