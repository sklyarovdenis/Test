const fibNum =((number) => {
    const arr4 = [0]

    for (let i = 0;i < number - 1;i++) {
        if(i<2) {
            arr4.push(1)
        } else {
            arr4.push(arr4[i] + arr4[i - 1])
        }
        }
    return arr4
})

console.log(fibNum(7)) 
