/*
User Stories

    User can see a list of person names arranged vertically in a summary pane on the page.
    User can click on a name in the list to update an adjacent pane on the page with that individuals full name, address, telephone number, and birthday.
    User can click on another name in the list to refresh the detail pane with that individuals information.

Bonus features

    User can see the person name in the summary pane highlighted when the cursor is hovered over it.
    User can see the person name in the summary pane highlighted using a selection effect (color, size, etc.) when it is clicked. This is a different effect from the hover effect
    User can see the selection effect removed from a name in the summary list when a new name is clicked.


*/

var data = document.querySelectorAll('.main-data');

var details =document.querySelector('.data-details');

addresses = [
    {
        name: "Luke",
        address: "1405 Cardinal Place",
        city: "Raleigh",
        zip: 28908,
        telephone: "202-8492",
        birthday: "8-17-1988"
    },
    {
        name: "Connie",
        address: "1206 W Cornwallis Dr",
        city: "Raleigh",
        zip: 27402,
        telephone: "282-9896",
        birthday: "11-7-1962",
    },
    {
        name: "Matt",
        address: "1512 Liberty Dr",
        city: "Raleigh",
        zip: 28398,
        telephone: "601-4820",
        birthday: "7-3-1989"
    },
    {
        name: "Deb",
        address: "4600 Crystal Lake Dr",
        city: "Asheboro",
        zip: 28392,
        telephone: "393-4829",
        birthday: "5-19-1963"
    },


]



// Loop and show all names in the Addresses object
for(var address of addresses){

    // For each pass, target the first item in the loop
    data[0].innerHTML += `
    <p id=${address.name}>${address.name}</p>
    `;

    // Add event listener, run the function on click
    data[0].addEventListener('click', showDetails);
}

// Problem: I the items are being created in the object, but I cannot create an event listener that can target items in that object.


// Solution: create this function that takes in the click event
function showDetails(shortName){

    // I dont like that I have to loop through the object again
    // Refactoring would fix this
    for(var addDetails of addresses){

        // Check if ID equals object name
        if(shortName.target.id == addDetails.name){
            details.innerHTML = `
            <p>Name: ${addDetails.name}<p>
            <p>Address: ${addDetails.address}<p>
            <p>City: ${addDetails.city}<p>
            <p>Zipcode: ${addDetails.zip}<p>
            <p>Telephone: ${addDetails.telephone}<p>
            <p>Birthday: ${addDetails.birthday}<p>
            `
        }
    }
}


