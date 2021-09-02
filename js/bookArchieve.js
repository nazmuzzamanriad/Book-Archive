// Serach book arrow function and api set up......................................

const searchBook = () => {

    // extract text from input field 
    const inputField = document.getElementById('input-section');
    const inputValue = inputField.value;
    inputField.value = '';


    // api calling using dynamic url
    url = `https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data))


}

// Display Books arrow function......................................................
const displayBook = (books) => {

    // main div to hold the search result items

    const mainDiv = document.getElementById('mainDiv');
    mainDiv.textContent = '';

    // count result div to hold the counting numbers
    const resultDiv = document.getElementById('count-result-show')
    resultDiv.textContent = '';


    // total search results show
    const countingSearchResult = books.num_found;


    if (countingSearchResult > 0) {

        const heading = document.createElement("h5");
        heading.innerText = `Total search result: ${countingSearchResult}`;
        resultDiv.appendChild(heading);
    }
    else {
        const heading = document.createElement("h5");
        heading.innerText = `No Results Found`
        resultDiv.appendChild(heading);
    }


    // Array is out from the object..................
    const Books = books.docs.slice(0, 21);
    // looping through the array.................

    Books.forEach(Book => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
            <img src="   https://covers.openlibrary.org/b/id/${Book.cover_i}-M.jpg" class="card-img-top" alt="..." style="height:350px;">
            <div class="card-body">
                <h5 class="card-title">${Book.title}</h5>
                <p class="card-text">
                Author name: ${Book.author_name[0]} <br> 
                Publisher: ${Book.publisher[0]} <br>
                First publish year: ${Book.first_publish_year}</p>
            </div>
        </div>`


        mainDiv.appendChild(div);

    });


}
