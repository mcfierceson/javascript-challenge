var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Console.log the ufo data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);


// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)

  console.log(filteredData);

  d3.select("#ufo-table tbody").remove()
  d3.select("#ufo-table").append("tbody")
  var f_tbody = d3.select("tbody");

  filteredData.forEach((filteredData) => {
    var row = f_tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}
