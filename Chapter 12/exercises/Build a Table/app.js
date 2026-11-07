const mountains = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Denali", height: 6190, place: "United States" }
];

let fields = Object.keys(mountains[0]);

let table = document.createElement("table");

let headerRow = document.createElement("tr");

for (let field of fields) {
  let headerCell = document.createElement("th");
  headerCell.textContent = field;
  headerRow.appendChild(headerCell);
}

table.appendChild(headerRow);

for (let mountain of mountains) {
  let row = document.createElement("tr");

  for (let field of fields) {
    let cell = document.createElement("td");
    let value = mountain[field];

    cell.textContent = value;

    if (typeof value === "number") {
      cell.style.textAlign = "right";
    }

    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.querySelector("#mountains").appendChild(table);