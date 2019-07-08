const data =document.getElementsByClassName("main-data");

const details =document.getElementsByClassName("data-details");

addresses = [
    {
        name: "Luke and Taylor",
        address: "1405 Cardinal Place",
        city: "Raleigh",
        zip: 28908,
        telephone: 202-8492,
        birthday: "8-17-1988"
    },
    {
        name: "Connie",
        address: "1206 W Cornwallis Dr",
        city: "Raleigh",
        zip: 27402,
        telephone: 282-9896,
        birthday: "11-7-1962",
    },
    {
        name: "Matt",
        address: "1512 Liberty Dr",
        city: "Raleigh",
        zip: 28398,
        telephone: 601-4820,
        birthday: "7-3-1989"
    },
    {
        name: "Deb",
        address: "4600 Crystal Lake Dr",
        city: "Asheboro",
        zip: 28392,
        telephone: 393-4829,
        birthday: "5-19-1963"
    },


]

for(address of addresses){
    data[0].innerHTML += `
    <p>${address.name}</p>
    `;
}

for(address of addresses){
    details[0].innerHTML += `
    <p>${address.name}</p>
    <p>${address.address}</p>
    <p>${address.city}</p>
    <p>${address.zip}</p>

    `;
}
