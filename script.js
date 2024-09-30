// Array to store book elements

let bookArray = []

// Books constructor

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function that adds books to the book array

function addBookToArray(title,author,pages,read){
    let newBook = new Book(title,author,pages,read)
    bookArray.push(newBook)
}

//addBookToArray("3 Men", "Frank", 69, "YES")

//addBookToArray("3 Army", "Kidoo", 699, "NO")

//addBookToArray("Art of Giving", "Skill M0b", 542, "YES")

//console.log(bookArray);

// function that loops through all the book objects in the array and display them on the page

const bookCards = document.querySelector(".book-cards")      
function displayBooks(){
    for(let i=0; i<bookArray.length;i++){
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")
        bookCard.dataset.index = i
        const bookDetails = document.createElement("div")
        bookDetails.classList.add("book-details")
        const bookName = document.createElement("p")
        bookName.classList.add("book-name")
        bookName.textContent = bookArray[i].title
        const authorText = document.createElement("p")
        authorText.textContent = "Author: "
        const bookAuthor = document.createElement("p")
        bookAuthor.classList.add("book-author")
        bookAuthor.textContent = bookArray[i].author
        const pagesText = document.createElement("p")
        pagesText.textContent = "Pages: "
        const bookPages = document.createElement("p")
        bookPages.classList.add("book-pages")
        bookPages.textContent = bookArray[i].pages
        const readText = document.createElement("p")
        readText.textContent = "Read: "
        const bookRead = document.createElement("p")
        bookRead.classList.add("read-toggle")
        bookRead.textContent = bookArray[i].read
        bookDetails.append(bookName, authorText, bookAuthor, pagesText, bookPages, readText, bookRead)

        const delBtn = document.createElement("button")
        delBtn.classList.add("delete")
        delBtn.textContent = "DELETE"

        delBtn.addEventListener("click", ()=>{
            bookCards.removeChild(bookCard)
        })

        bookCard.append(bookDetails, delBtn)
        bookCards.append(bookCard)

    }
}

displayBooks()

const addBookBtn = document.querySelector(".addBook")
const dialog = document.querySelector("#bk-form")
const dialogSubmit = document.querySelector("#submit")
const form = document.querySelector("form")

addBookBtn.addEventListener("click", ()=>{
    dialog.showModal()
})

dialogSubmit.addEventListener("click", ()=> {
    form.addEventListener("submit", (event)=>{
        //event.preventDefault()
        const formData = new FormData(form)
        const bookObj = Object.fromEntries(formData)
        console.log(bookObj);
        
        bookArray.push(bookObj)
        bookCards.textContent=""
        displayBooks()
        dialog.close()
        form.reset()
    })
})

