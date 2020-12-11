// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// Display the dataset
tableData.forEach((UFOData) => {
  var row = tbody.append("tr");
  Object.entries(UFOData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the filter button
var filterBT = d3.select("#filter-btn");


// Use D3 `.on` to attach a click handler for the filter
filterBT.on("click", function() {
  // Get the value property of the input element
  var dateTime = d3.select("#datetime").property("value");

  // Return whole table if no input is made
  if (dateTime !== "") {
    // Remove existing table
    d3.select("tbody").html("");
    
    // Select the current count
    var filteredData = tableData.filter(ufos => ufos.datetime === dateTime);
    // console.log(filteredData);

      // Display the filtered dataset
      filteredData.forEach((UFOData) => {
      var row = tbody.append("tr");
      Object.entries(UFOData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
      });
    }
    else {
      // Remove existing table
      d3.select("tbody").html("");

      // Display the dataset
      tableData.forEach((UFOData) => {
        var row = tbody.append("tr");
        Object.entries(UFOData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
  });
