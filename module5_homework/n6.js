let arr = [1, 2, 3];
let answ = true
for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i]) {
    answ = false;
    break;
  }
}
console.log(answ);