// DOM elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweet = document.getElementById('tweet');
const loader = document.getElementById('loader');

// Toggle loader
function loading() {
    quoteContainer.hidden = true;
    loader.hidden = false;
}

// Hide loader
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Populate the UI with random quote
function populateUI(){
    loading()
   // Store a random quote from apiQuotes
   let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   // Apply small font size if the quote is lengthy
   quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote') 
   quoteText.textContent = quote.text;
   // Replace the nullish author field with 'Unknown'
   quoteAuthor.textContent = !quote.author ? 'Unknown' : quote.author;
   // Set quote, hide loader
   complete()
}

// Tweet quote
function tweetQuote () {
    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${quoteAuthor.textContent}`;
    window.open(tweetURL, '_blank');
}

// API data
const QUOTES_API = 'https://type.fit/api/quotes';
let apiQuotes = [];

// API handling
async function getQuotes(url) {
    loading()
    try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    populateUI();
    } catch(error) {
        console.log(`Error: Can't retrieve data`);
        console.log(`${error}`);
    }
}

// Event listeners

// Populating new quote 
newQuoteButton.addEventListener('click', populateUI);
// Tweet quote
tweet.addEventListener('click', tweetQuote)


// On load
getQuotes(QUOTES_API);