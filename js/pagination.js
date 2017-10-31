paginationEl = document.getElementById("paginationButtons");

articleElements = document.getElementById('articles').getElementsByTagName('article');

const totalArticles = articleElements.length
const articlesPerPage = 5;
const totalPages = totalArticles / articlesPerPage;

// this is the changing variable which will drive the pages displayed/hidden and the 
// pagination buttons enabled/disabled
const selectedPage = "page_3";

const pages = {};

function slice(iterableCollection, startingValue, endingValue) {
    let arr = []
    for(let i = startingValue; i < endingValue; i++) {
        arr.push(iterableCollection[i]);
    }
    return arr;
}

// let arrayNameTemplate = "page_"

for (let i = 0; i < totalPages; i++) {
    let arrayNameTemplate = "page_" + (i + 1);
    pages[arrayNameTemplate] = slice(articleElements, (i*articlesPerPage), (i*articlesPerPage) + articlesPerPage);
}

const lastPage = "page_" + Object.keys(pages).length

function hidePages() {
    for (let page in pages) {
        pages[page].forEach( (article) => {
            article.classList.add('hide');
        });
    }
}

function showPage(page) {
    "page_1"
    pages[page].forEach( (article) => {
        article.classList.add('show');
    } );
}

function showPaginationButtons() {
    document.getElementById('paginationSection').classList.add('show');
}

function disablePaginationButtons(page) {
    if(page === "page_1") {

    } else if (page === lastPage) {
        
    }
}

if(totalArticles > articlesPerPage) {
    hidePages();
    showPage(selectedPage);
    showPaginationButtons()
    disablePaginationButtons(selectedPage)
}
