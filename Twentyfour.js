let sortingAnArrayDependingOnTheString = (array,string) => {
  switch (string) {
    case 'ASC':
      let sortAraay = (a, b) => {
        if (a > b) {
          return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
      };
        
      let inAscendingOrder = array.sort(sortAraay);

      console.log(inAscendingOrder);
      break;
    case 'DESC':
      let sortAraay2 = (a, b) => {
        if (a > b) {
          return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
      };

      let inDescendingOrder = array.sort(sortAraay2);

      console.log(inDescendingOrder);
      break;
    default:
      console.log(array,'NOT SORT');
  }

}

sortingAnArrayDependingOnTheString([4, 5, 2, 4, 1, 5, 3],'DESC')

// Написать функцию, которая принимает массив целых чисел и строку, 
// которая может иметь одно из трёх значений: ‘ASC’, ’DESC’, ‘NOT SORT’. 
// Функция должна сортировать массив числе и возвращать его. 
// Если строковый параметр равен ‘ASC’, то сортировать в порядке возрастания, 
// если - ’DESC’, то в порядке убывания. В остальных случаях возвращать отсортированный массив.