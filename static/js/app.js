// from data.js
var tableData = data;

// Create table body
var tbody = d3.select("tbody");
console.log(data);

// Use d3 to append rows into the table body, and 
// update each cell's text with UFO report values 
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});