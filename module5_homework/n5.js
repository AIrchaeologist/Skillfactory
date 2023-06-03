let arr = [1, 2, 3];
console.log('Количество элементов в массиве: ' + arr.length);
arr.map(function(item, index, array) {
  console.log(item);
});