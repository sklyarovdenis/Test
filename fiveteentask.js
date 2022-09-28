const filterAndTransform = (array, filter, transformation) => {
  let result = []

  array.map(item => {
    if(filter(item)) {
      result.push(transformation(item))
    }
  })
  return result
}

console.log(filterAndTransform([1, 2, 3, 4], (el) => el %2 == 0, (el) => el * 2))

// Написать функцию, принимающую на вход массив чисел, 
// функцию фильтрации и функцию преобразования, 
// которая фильтрует массив, преобразует данные, 
// а затем выводит их.