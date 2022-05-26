let btnGet = document.querySelector("button");
let myTable = document.querySelector("#table");

let employees = [
  { name: "James", age: 21, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];

let headers = ["Name", "Age", "Country"];

btnGet.addEventListener("click", () => {
  let table = document.createElement("table");
  let headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  employees.forEach((emp) => {
    let row = document.createElement("tr");

    Object.values(emp).forEach((text) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  myTable.appendChild(table);
});
