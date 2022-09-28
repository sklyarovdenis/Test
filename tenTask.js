const calculatesTheAverageAmountOfAllTransfers = (props) => {
  let middleCount = 0 
  props.forEach(item => {
    middleCount = middleCount + item.amount
  });

  middleCount = middleCount / props.length

  return props.map(item => {
    item.diff = item.amount - middleCount
    return item
  });
};

console.log(calculatesTheAverageAmountOfAllTransfers([{ from: "Ivan", to: "Oleg", amount: 2500}, { from: "Ivan", to: "Igor", amount: 2000}, { from: "Oleg", to: "Igor", amount: 1500}]))

// Имеется массив с финансовыми переводами [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...]. 
// Вычислить среднюю сумму всех переводов и рассчитать для каждого объекта отклонение
// от среднего и записать в поле diff. 
// Например, при средней сумме перевода в 2000 отклонение для перевода {  ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 1000;.