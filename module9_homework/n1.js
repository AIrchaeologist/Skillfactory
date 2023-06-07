const parser = new DOMParser();
const xmlString = `
	<list>
	  <student>
	    <name lang="en">
	      <first>Ivan</first>
	      <second>Ivanov</second>
	    </name>
	    <age>35</age>
	    <prof>teacher</prof>
	  </student>
	  <student>
	    <name lang="ru">
	      <first>Петр</first>
	      <second>Петров</second>
	    </name>
	    <age>58</age>
	    <prof>driver</prof>
	  </student>
	</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let allStudents = [];
xmlDOM.querySelectorAll("student").forEach(element => {
	let aboutStudent = {
		name: `${element.querySelector("first").textContent} ${element.querySelector("second").textContent}`,
		age: `${element.querySelector("age").textContent}`,
		prof: `${element.querySelector("prof").textContent}`,
		lang: `${element.querySelector("name").getAttribute("lang")}`
	}
	allStudents.push(aboutStudent);
});
console.log({list: allStudents});