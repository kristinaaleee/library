const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary(book){
    const card = document.createElement("div");
    card.classList.add('card');
    myLibrary.push(book);

    for (let key in book) {
        const row = document.createElement('p');
        row.classList.add('info');
        category = document.createTextNode(`${key}: `);
        const value = document.createTextNode(`${book[key]}`);
        row.appendChild(category);
        row.appendChild(value);
        card.appendChild(row);
    }
    container.appendChild(card);
}

const container = document.getElementById('container')


// for (let i = 0; i < myLibrary.length; i++){
    

//     for (let key in myLibrary[i]) {
//         const row = document.createElement('p');
//         row.classList.add('info');
//         category = document.createTextNode(`${key}: `);
//         const value = document.createTextNode(`${myLibrary[i][key]}`);
//         row.appendChild(category);
//         row.appendChild(value);
//         card.appendChild(row);
//     }
//     container.appendChild(card);
// }

    const btn = document.createElement('button');
    const btnText = document.createTextNode('Delete');
    btn.appendChild(btnText);
    card.appendChild(btn);
// form section
const showButton = document.getElementById('showForm');
const dialog = document.getElementById("dialog");
const cancelButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');
const input = document.querySelectorAll('input')


showButton.addEventListener("click", function(){
    dialog.showModal();
})

cancelButton.addEventListener("click", function(){
    dialog.close();
})

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    dialog.close();
    const newBook = new Book(`${input[0].value}`,`${input[1].value}`, `${input[2].value}`, `${input[3].value}`);
    console.log(newBook);
    addBookToLibrary(newBook);
    console.log(myLibrary);
})


const Lolita = new Book('Lolita','Vladimir Nabokov', '336', 'no')
addBookToLibrary(Lolita);
const Bob = new Book('Lolita','Vladimikov', '336', 'no')
addBookToLibrary(Bob);
