function getSum(numFirst) {
 return function(numFirst){
   console.log(`Сумма двух чисел: ${numFirst + +prompt("Введите второе число:")}`);
 }
}
const resultFunc = getSum();
resultFunc(+prompt("Введите первое число:"));