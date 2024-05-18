function generateRandomQuote() {
      var quotes = [
            {
                  quote: `"A room without books is like a body without a soul."`,
                  author: "― Marcus Tullius Cicero",
            },
            {
                  quote:
                        `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
                  author: "― Bernard M. Baruch",
            },
            {
                  quote:
                        `"Always forgive your enemies; nothing annoys them so much"`,
                  author: "― Oscar Wilde",
            },
            {
                  quote:
                        `"A day without sunshine is like, you know, night."`,
                  author: "― Maya Angelou",
            },
            {
                  quote:
                        `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
                  author: "― Mahatma Gandhi",
            },
      ];

      var randomQuote = Math.floor(Math.random() * quotes.length);
      return quotes[randomQuote];
}
function updateQuote() {
      var quoteGenerator = document.getElementById("quote");
      var authorGenerator = document.getElementById("author");
      var randomQuote = generateRandomQuote();
      quoteGenerator.textContent =randomQuote.quote;
      authorGenerator.textContent = randomQuote.author;
}
var newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", updateQuote);
updateQuote();
