let array = [
    {a: 5, b: 3, c: 4}, 
    {a: 1, b: 3, c: 4}, 
    {a: 4, b: 7, c: 4}, 
    {a: 2, b: 2, c: 3}
];
  
let PerimeterTriangle = (array) => {
  let arrayPerimeter = array.map((item) => {
    return {p: item.a + item.b + item.c}
  });
  return arrayPerimeter 
};
  
console.log(PerimeterTriangle(array))
  
  
  
  
  
  
  
  
  
  
  // Имеется массив объектов, представляющий собой массив треугольников, 
  // где поля объекта a, b и c - стороны треугольника. 
  // Создать новый массив, заполнив его объектами 
  // с единственным полем p - периметром соответствующего треугольника.