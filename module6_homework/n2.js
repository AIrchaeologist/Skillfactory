function primeNumber(x) {
  if (x == 0 || x == 1) {
    console.log(`${x} - не является ни простым, ни составным`);
  } else if (x > 1000) {
    console.log("данные неверны");
  } else {
    let answ = true
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        answ = false;
        break;
      }
    }
    answ ? console.log(`Число ${x} - простое`) : console.log(`Число ${x} - составное`);
  }
}
primeNumber(0);