function secondNum(a, b) {
 let inter = setInterval(function () {
   console.log(a++);
   if (a > b) {
     clearInterval(inter);
   }
 }, 1000)
}
secondNum(5, 15);