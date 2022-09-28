const transformsStyles = (string) => {
  let result = string.split('_')
  .map(item => {
  const firstSymbol = item[0]
    return item.replace(firstSymbol,
    firstSymbol.toUpperCase())
  })
  .join('')

  return result
};

console.log(transformsStyles('find_and_replace_element_of_array'))

// Написать функцию, принимающую на вход строку, 
// написанную в стиле snake_case и возвращающую эту же строку, 
// но уже в стиле camelCase.