/*

-   [ ] User can paste JSON syntax into a text box
-   [ ] User can click a 'Convert' button to validate the JSON text box and convert it to CSV
in your first implementation. use `Object.keys()` and `Object.values`

-   [ ] User can see the converted CSV in another text box
-   [ ] User can see an warning message if the JSON text box is empty or if it doesn't contain valid JSON
-   [ ] User can click a 'Clear' button to clear the contents of both the JSON and CSV text boxes.
*/

/*
If you choose to implement this in JavaScript don't use complicated looping in your first implementation. Instead, use Object.keys() and Object.values to generate CSV for the header and data rows.
*/

const output = document.querySelector('.csvTable');
const jsonInput = JSON.parse(document.querySelector('#JSONinput').value); // an array of objects

// Get just the top row, an array of the keys
const headers = Object.keys(jsonInput[0]);

// map over each of the header items
const csvHeaders = headers.map(header => `"${header}"`);
output.innerHTML = `${csvHeaders}</br>`;

// Object.values returns an array of objects enumerable properties
// Object.entries returns and array of enumerable key values
const values = Object.values(jsonInput); // an array of objects

// Loop through array
for (value of values) {
  // loop through objects in the array. value is an object
  const csvValues = Object.values(value); // get an array of the values
  const csvValue = csvValues.map(x => `"${x}"`);
  output.innerHTML += `${csvValue}</br>`;
}
