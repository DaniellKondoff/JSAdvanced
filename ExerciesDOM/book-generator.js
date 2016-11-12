/**
 * Created by Kondoff on 12-Nov-16.
 */
let id=1;
function createBook(selector,title,author,isbn) {
    let container=$(selector);
    let fragment=document.createDocumentFragment();

    //paragraphs and Div
    let bookContainer=$('<div>');
    let titleParagraph=$('<p>');
    let authorParagraph=$('<p>');
    let isbnParagraph=$('<p>');

    //Fill created Paragraphs
    titleParagraph.text(title);
    authorParagraph.text(author);
    isbnParagraph.text(isbn);

    //Buttons
    let selectBtn=$('<button>Select</button>');
    let deselectBtn=$('<button>Deselect</button>');

    bookContainer.attr('id','book',+id);
    id++;
    //Classes
    titleParagraph.addClass('title');
    authorParagraph.addClass('author');
    isbnParagraph.addClass('isbn');

    selectBtn.on('click',function () {
        bookContainer.css('border', '2px solid blue')
    });
    deselectBtn.on('click',function () {
        bookContainer.css('border', 'none')
    });

    bookContainer
        .append(titleParagraph)
        .append(authorParagraph)
        .append(isbnParagraph)
        .append(selectBtn)
        .append(deselectBtn);
    bookContainer.appendTo(fragment);
    container.append(fragment);
}