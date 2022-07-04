// DOM elements
const quoteText = document.querySelector('#quote')
const quoteAuthor = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote')

// Populate the UI with random quote
function populateUI(){
   let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   quoteText.textContent =  quote.text;
   quoteAuthor.textContent =  quote.author;
}

// API data
const QUOTES_API = 'https://type.fit/api/quotes'
let apiQuotes = []

// API handling
async function getQuotes(url) {
    try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    populateUI();
    } catch(error) {
        console.log(`Error: Can't retrieve data`)
        console.log(`${error}`)
    }
}

// Populating new quote 
newQuoteButton.addEventListener('click', () => {
    populateUI();
})

// On load
getQuotes(QUOTES_API);
populateUI();