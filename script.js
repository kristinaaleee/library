const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
};

Book.prototype.readToggle = function(){
    if(this.read == 'yes'){
        this.read = 'no';
    }
    else{
        this.read = 'yes';
    }
};

function addBookToLibrary(book){
    console.log(book);
    const card = document.createElement("div");
    card.classList.add('card');
    myLibrary.push(book);

    for (let key in book) {
        //unsafe? 
        if(book.hasOwnProperty(key)){
            const row = document.createElement('p');
            row.classList.add(`${key}`);
            category = document.createTextNode(`${key}: `);
            const value = document.createTextNode(`${book[key]}`);
            row.appendChild(category);
            row.appendChild(value);
            card.appendChild(row);
        }
    }
    mainContent.appendChild(card);

    const deleteButton = document.createElement('button');
    const delText = document.createTextNode('Delete');
    deleteButton.classList.add('delete');
    deleteButton.appendChild(delText);
    card.appendChild(deleteButton);

    const readButton = document.createElement('button');
    const readText = document.createTextNode('Change Read Status');
    readButton.classList.add('read-toggle');
    readButton.appendChild(readText);
    card.appendChild(readButton);

    deleteButton.addEventListener('click', function(){
        deleteButton.parentElement.remove();
    });

    readButton.addEventListener('click', function(){
        book.readToggle();
        readButton.parentNode.childNodes[3].innerHTML = `Read: ${book.read}`
    });
};

const container = document.getElementById('container');
const mainContent = document.querySelector('.main-content');

const form = document.querySelector('form');
const showButton = document.getElementById('showForm');
const dialog = document.getElementById("dialog");
const cancelButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');
const input = document.querySelectorAll('input');
const readStatus = document.getElementById('read');

showButton.addEventListener("click", function(){
    dialog.showModal();
});
cancelButton.addEventListener("click", function(){
    dialog.close();
    document.querySelector('form').reset();
});
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    dialog.close();
    
    if(readStatus.checked){
        input[3].value = 'yes'
    }

    const newBook = new Book(`${input[0].value}`,`${input[1].value}`, `${input[2].value}`, `${input[3].value}`);
    addBookToLibrary(newBook);

    document.querySelector('form').reset();  
});

const Lolita = new Book('Lolita','Vladimir Nabokov', '336', 'no')
addBookToLibrary(Lolita);
const Caterpillar = new Book('The Very Hungry Caterpillar','Eric Carle', '22', 'yes')
addBookToLibrary(Caterpillar);
