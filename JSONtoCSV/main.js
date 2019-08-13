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

/*
First Row, if there is a comma, add TH.
End TH

Loop through TR
    Create TR
    Create TD. If there is data, enter it. If not, blank TD
    End TR.
*/
const jsonInput = document.querySelector('#JSONinput').value;
// const csvKeys = JSON.parse(jsonInput); // turn it into an object
// const tableHeaders = Object.getOwnPropertyNames(csvKeys[0]);
// const tableContents = Object.values(csvKeys);

const csvOutput = document.querySelector('.csvTable');

console.log(jsonInput);
// Create Table Headers
/*eslint-disable */
// console.log(tableHeaders.length);

function getJson() {
  for (var i = 0; i < tableHeaders.length; i++) {
    if (tableHeaders.length - 1 === i) {
      csvOutput.innerHTML += `"` + tableHeaders[i] + `"</br>`;
      return;
    }
    csvOutput.innerHTML += `"` + tableHeaders[i] + `",`;
  }
}

function getData() {
  for (var tableContent of tableContents) {
    var values = Object.values(tableContent);

    for (var i = 0; i < values.length; ++i) {
      if (values.length - 1 === i) {
        csvOutput.innerHTML += `"` + values[i] + `"</br>`;
      } else {
        csvOutput.innerHTML += `"${values[i]}",`;
      }
    }
  }

  // csvOutput.innerHTML += `"${Object.values(content)}",<br>`;
}
getJson();
getData();
/*eslint-evable */
// Table Headers
// console.log(Object.keys(csvKeys));
// console.log(Object.values(csvKeys));
