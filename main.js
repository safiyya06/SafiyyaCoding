const arrayOfBooks = [
{
    book : "Save Me",
    author : "Lisa Scottline",
},
{
    book : "The Line Tender",
    author : "Kate Allen",
},

{
    book : "Blight",
    author : "Alexandra Duncan",
},
{
    book : "What Remains",
    author : "Carole Radziwill",
},
]

function getRandomNumber() {

    const randomNumber =Math.random()*
    arrayOfBooks.length;
    return Math.floor (randomNumber)
}

function bookName(bookName) {

    document.getElementById("bookName").innerHTML = bookName
}

function setAuthor(author) {

    document.getElementById("author").innerHTML = author
}

function getRandomBook() {
    const randomNumber = getRandomNumber()
    const book = arrayOfBooks[randomNumber]
    bookName(book.book)
    setAuthor(book.author)

}

    