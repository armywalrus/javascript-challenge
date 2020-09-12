// Level 1

// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Create table body
var tbody = d3.select("tbody");
// console.log(data);

// Use d3 to append rows into the table body, and 
// update each cell's text with UFO report values 
function ufoTable(data) {
    data.forEach(function(ufoReport) {
    // console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    });
    });
}
ufoTable(tableData)

// Use d3 to select the filter button
var button = d3.select("#filter-btn");
// Use d3 `.on` to attach a click handler for the filter button
button.on("click", handleClick)

// Function to handle input change
function handleClick() {
    // Identify the input element 
    var inputField = d3.select("#datetime");

    // Assign the filtered data from `tableData` to a descriptive variable 
    var filteredTableData = tableData;

    // Get the value property of the input element
    var inputFieldValue = inputField.property("value");

    // console.log(inputFieldValue);

   // To filter the data based on datetime column and user input
    var filterData = filteredTableData.filter(x => x.datetime === inputFieldValue);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing output
    tbody.html("");

// Use d3 to append rows into the table body, and 
// update each cell's text with filtered UFO report values
    filterData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    })
})
}
