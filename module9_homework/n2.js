const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
let allEmployees = [];
data.list.forEach(element => {
	let aboutEmployees = {
		name: element.name,
		age: Number(element.age),
		prof: element.prof,
	}
	allEmployees.push(aboutEmployees);
});
console.log({list: allEmployees});