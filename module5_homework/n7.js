let arr = [0, 1, '2', 3, 4, 5, '6', 7, 8, '9'];
let zero, even, odd;
zero = even = odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    arr[i] == 0 ? zero++ : arr[i] % 2 == 0 ? even++ : odd++;;
  }
}
console.log("Количество нулей в массиве: " + zero);
console.log("Количество чётных чисел в массиве: " + even);
console.log("Количество нечётных чисел в массиве: " + odd);