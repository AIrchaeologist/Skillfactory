function evenOrOdd() {
  let val = +prompt("Введите значение:");
  if (typeof val == "number" && !isNaN(val)) {
    result  = val % 2 == 0 ? " - чётное" : " - нечётное";
    console.log(val + result);
  } else {
    console.log("Упс, кажется, вы ошиблись");
  }
}
evenOrOdd();