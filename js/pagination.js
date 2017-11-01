paginationEl = document.getElementById("paginationButtons");

articleElements = document.getElementById('articles').getElementsByTagName('article');

const totalArticles = articleElements.length // based on blog.html
const articlesPerPage = 5; // adjusted here
const totalPages = Math.ceil(totalArticles / articlesPerPage);

let selectedPage = "page_1";

const pages = {};

function slice(iterableCollection, startingValue, endingValue) {
    let arr = []
    for(let i = startingValue; i < endingValue; i++) {
        arr.push(iterableCollection[i]);
    }
    return arr;
}

for (let i = 0; i < totalPages; i++) {
    let arrayNameTemplate = "page_" + (i + 1);
    // 11/01/2017 the following if/else is a messy fix, try to clean up later
    if(i === (totalPages - 1) && totalArticles % articlesPerPage != 0) {
        pages[arrayNameTemplate] = slice(articleElements, (i*articlesPerPage), (i*articlesPerPage) + totalArticles % articlesPerPage);
    } else {
        pages[arrayNameTemplate] = slice(articleElements, (i*articlesPerPage), (i*articlesPerPage) + articlesPerPage);
    }
}

const lastPage = "page_" + Object.keys(pages).length

function hidePages() {
    for (let page in pages) {
        pages[page].forEach( (article) => {
            article.classList.add('hide');
        });
    }
}

function hideSelectedPage(page) {
    pages[page].forEach( ( article ) => {
        article.classList.add('hide');
    });
}

function showPage(page) {
    pages[page].forEach( (article) => {
        article.classList.remove('hide');
    } );
}

function createPaginationButtons() {
    let html = `<li><a id="prevBtn" href="javascript:;" onclick="getId(this);return false;">&lt;&lt;</a></li>`;
    for (let i = 0; i < totalPages; i++) {
        html += `<li><a id="${"page_" + (i + 1)}" href="javascript:;" onclick="getId(this);return false;">Page ${i + 1}</a></li>`;
    }
    html += `<li><a id="nextBtn" href="javascript:;" onclick="getId(this);return false;">&gt;&gt;</a></li>`;
    document.getElementById('paginationButtons').innerHTML = html;
}

function showPaginationButtons() {
    document.getElementById('paginationSection').classList.remove('hide');
}

function disablePaginationButtons(page) {
    if(page === "page_1") {
        document.getElementById('prevBtn').classList.add('disableAnchor');
        // document.getElementById('page_1').classList.add('disableAnchor');
    } else if (page === lastPage) {
        document.getElementById('nextBtn').classList.add('disableAnchor');
        // document.getElementById(lastPage).classList.add('disableAnchor');
    } 
    document.getElementById(page).classList.add('disableAnchor');
}

function enablePaginationButtons() {
    const anchors = document.getElementById('paginationButtons').getElementsByTagName('a');
    
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].classList.remove('disableAnchor');
    }
}

// init
if(totalArticles > articlesPerPage) {
    hidePages();
    showPage(selectedPage);
    createPaginationButtons();
    showPaginationButtons();
    disablePaginationButtons(selectedPage);
}

function getId(el) {
    hideSelectedPage(selectedPage);   
    const pageClicked = el.getAttribute('id');
    // if nextBtn clicked || prevBtn clicked
    if (pageClicked === "nextBtn") {
        const oldPageNumber = selectedPage.slice(selectedPage.indexOf('_') + 1);
        const newPageNumber = parseInt(oldPageNumber) + 1
        // console.log(`value: ${oldPageNumber}type: ${typeof oldPageNumber}`);
        selectedPage = "page_" + newPageNumber;
    } else if (pageClicked === "prevBtn") {
        const oldPageNumber = selectedPage.slice(selectedPage.indexOf('_') + 1);
        const newPageNumber = parseInt(oldPageNumber) - 1
        selectedPage = "page_" + newPageNumber;
    } else {
        selectedPage = pageClicked;
    }    
    // if !nextBtn clicked || !prevBtn clicked    
    showPage(selectedPage);
    enablePaginationButtons();
    disablePaginationButtons(selectedPage);
}
