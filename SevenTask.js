const arr7 = (array, number) => {
    let sum = 0;
    do {let i = 0; i < array.length; i++;
        sum += array[i];
    } while (number > sum);

    q = sum
    console.log(q)
}

arr7([5,10, 15, 20, 10, 25, 20, 30, 15], 55)
