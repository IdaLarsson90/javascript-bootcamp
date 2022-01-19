let books = [{
    title: 'Pippi Långstrump',
    author: 'Astrid Lindgren',
    numPages: 95
},
{   title: 'Alfons Åberg',
    author:'Gunilla Bergström',
    numPages: 17
}, 
{   title: 'Boken som inte ville bli läst',
    author: 'David Sundin',
    numPages: 42
}]

function searchTitle (searchWord) {
    for (let book of books) {
        if (book.title === searchWord) {
            return book;
        }
        return null;    
    }
}
console.log(searchTitle('Pippi Långstrump'));

