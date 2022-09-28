let returnSliceOfArray = (array,start = 0,end = array.length) => {
  let removed = array.slice(start,end +1);

  return removed
}

console.log(returnSliceOfArray([13, 14, 32, 23, 34, 21, 44, 47, 86],4,6))

// Написать функцию, которая принимает три параметра: 
// массив array и два числа start и end. 
// Функция должна возвращать массив фрагмент массива array,
// начиная с индекса start и заканчивая end.

