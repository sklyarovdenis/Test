const arr8 = [
    { name: 'Ivan', age: 24 },
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

let sum = 0;

for(let i = 0; i < arr8.length; i++){
    sum += arr8[i].age;
}

console.log(sum)