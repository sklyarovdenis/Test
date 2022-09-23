const arr2 = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

const newArr = arr2.filter((_, index) => index % 2 == 0);

console.log(newArr)