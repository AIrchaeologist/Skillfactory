let val = 123;
switch (typeof val) {
  case 'number':
    console.log(val + " - число");
    break;
  case 'string':
    console.log(val + " - строка");
    break;
  case 'boolean':
    console.log(val + " - логический тип");
    break;
}