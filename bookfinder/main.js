const apiKey = 'AIzaSyBpHiG4LyzeJ_maRAOfVh7zhzCShl-jRBc';
let newText;
var booksGrid = document.querySelector('.resultsGrid');
let button = document.querySelector('button');

button.addEventListener('click', mainQuery);


function stringReplace(text) {
    newText = text.replace(" ", "+");
    return newText;
}

stringReplace(queryText);

function mainQuery() {
    event.preventDefault();
    booksGrid.innerHTML = ' ';
    let queryText = document.querySelector('#query').value;

    bookFetch = fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryText}&key=${apiKey}`)
        .then(bookFetch => bookFetch.json())
        .then(bookFetch => {
            for (var book of bookFetch.items) {
                booksGrid.innerHTML += `
            <div class="gridItem">
            <h3>Title: ${book.volumeInfo.title}</h3>
    <h4>Author: ${book.volumeInfo.authors[0]}</h4>
    <h5>Published: ${book.volumeInfo.publishedDate}</h5>
    <p>Pages: ${book.volumeInfo.pageCount}</p>
    <p>Category:${book.volumeInfo.categories}</p>
    <img src="${book.volumeInfo.imageLinks.thumbnail}"/>

    <p>Description:${book.volumeInfo.description}</p>
           </div> `
            }

        });
}



