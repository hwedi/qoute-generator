// DOM elements
const quoteText = document.querySelector('#quote')
const quoteAuthor = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote')

// Rendering fetched data
function renderQuote(){
   let randomNumber = Math.floor(Math.random() * 1500);
   quoteText.textContent =  apiQuotes[randomNumber].text;
   quoteAuthor.textContent =  apiQuotes[randomNumber].author;
}

// API data
const QUOTES_API = 'https://type.fit/api/quotes'
let apiQuotes = []

// API handling
async function getQuotes(url) {
    try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    renderQuote();
    } catch(error) {
        console.log(`Error: Can't retrieve data`)
        console.log(`${error}`)
    }
}

// Rendering new quote 
newQuoteButton.addEventListener('click', () => {
    renderQuote();
})

getQuotes(QUOTES_API);