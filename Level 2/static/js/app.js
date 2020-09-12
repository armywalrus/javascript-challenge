// Level 2

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

// City filter
// Use d3 to select the filter button
var button = d3.select("#filter-city-btn");
// Use d3 `.on` to attach a click handler for the filter button
button.on("click", cityHandleClick)

// Function to handle input change
function cityHandleClick() {
    // Identify the input element 
    var cityInputField = d3.select("#city");

    // Assign the filtered data from `tableData` to a descriptive variable 
    var filteredCityData = tableData;

    // Get the value property of the input element
    var inputCityValue = cityInputField.property("value");

   // To filter the data based on datetime column and user input
    var cityData = filteredCityData.filter(x => x.city === inputCityValue);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing output
    tbody.html("");

// Use d3 to append rows into the table body, and 
// update each cell's text with filtered UFO report values
    cityData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    })
})
}

// State filter
// Use d3 to select the filter button
var button = d3.select("#filter-state-btn");
// Use d3 `.on` to attach a click handler for the filter button
button.on("click", stateHandleClick)

// Function to handle input change
function stateHandleClick() {
    // Identify the input element 
    var stateInputField = d3.select("#state");

    // Assign the filtered data from `tableData` to a descriptive variable 
    var filteredStateData = tableData;

    // Get the value property of the input element
    var inputStateValue = stateInputField.property("value");

   // To filter the data based on datetime column and user input
    var stateData = filteredStateData.filter(x => x.state === inputStateValue);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing output
    tbody.html("");

// Use d3 to append rows into the table body, and 
// update each cell's text with filtered UFO report values
    stateData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    })
})
}

// Country filter
// Use d3 to select the filter button
var button = d3.select("#filter-country-btn");
// Use d3 `.on` to attach a click handler for the filter button
button.on("click", countryHandleClick)

// Function to handle input change
function countryHandleClick() {
    // Identify the input element 
    var countryInputField = d3.select("#country");

    // Assign the filtered data from `tableData` to a descriptive variable 
    var filteredCountryData = tableData;

    // Get the value property of the input element
    var inputCountryValue = countryInputField.property("value");

   // To filter the data based on datetime column and user input
    var countryData = filteredCountryData.filter(x => x.country === inputCountryValue);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing output
    tbody.html("");

// Use d3 to append rows into the table body, and 
// update each cell's text with filtered UFO report values
    countryData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    })
})
}

// Shape filter
// Use d3 to select the filter button
var button = d3.select("#filter-shape-btn");
// Use d3 `.on` to attach a click handler for the filter button
button.on("click", shapeHandleClick)

// Function to handle input change
function shapeHandleClick() {
    // Identify the input element 
    var shapeInputField = d3.select("#shape");

    // Assign the filtered data from `tableData` to a descriptive variable 
    var filteredShapeData = tableData;

    // Get the value property of the input element
    var inputShapeValue = shapeInputField.property("value");

   // To filter the data based on datetime column and user input
    var shapeData = filteredShapeData.filter(x => x.shape === inputShapeValue);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing output
    tbody.html("");

// Use d3 to append rows into the table body, and 
// update each cell's text with filtered UFO report values
    shapeData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    })
})
}
