let arr5 = [
    {a: 5, b: 3, c: 4}, 
    {a: 1, b: 3, c: 4}, 
    {a: 4, b: 7, c: 4}, 
    {a: 2, b: 2, c: 3}
];

let arrP = arr5.map((item) => {
    return {p: item.a + item.b + item.c}
})

console.log(arrP)