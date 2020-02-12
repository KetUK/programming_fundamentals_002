// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  // Your code here
  return catalogue.length;
}

function checkBook(book) {
  for(i=0; i<=catalogue.length;i++) {
    if(catalogue[i] === book) {
      return true;
    }
  }
}

function countBooksByFirstLetter(letter) {
  var count = 0;
  for(i = 0 ; i < catalogue.length ; i++) {
    if(catalogue[i].startsWith(letter)) {
      count++;
    }
  }
  return count;
}

function countBooksByKeyword(keyword) {
  var count = 0 ;
  for(i = 0 ; i < catalogue.length ; i++) {
    if(catalogue[i].toLowerCase().includes(keyword)) {
      count++;
    }
  }
  return count;
}

function getBooksByAuthor(author) {
  var listOfBooks = [];
  for(i = 0 ; i < catalogue.length ; i++) {
    if(catalogue[i].includes(author)) {
      listOfBooks.push(catalogue[i])
    }
  }

  return listOfBooks;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
