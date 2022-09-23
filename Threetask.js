let arr3 = ['String1', 'String2', 'String3'];

const arrStr = (array) => {

    let i = 0
    let f = array.length

    while (i < f) {
        let string = array.pop();
        console.log(string);
        alert(string)
        i++;

    }
    console.log(array)
}
arrStr(arr3)