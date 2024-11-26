// i made two of arr have the name and the quote 

var quoteTexter = ["“Be yourself; everyone else is already taken.”", "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”",
    "“Be the change that you wish to see in the world.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "““A friend is someone who knows all about you and still loves you.”",
    "““Live as if you were to die tomorrow. Learn as if you were to live forever.””",
    "“We accept the love we think we deserve”",
    "“Without music, life would be a mistake.”",
    "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
    "“Insanity is doing the same thing, over and over again, but expecting different result.”",
    "“It is better to be hated for what you are than to be loved for what you are no.”",
    "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe..”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",]
var quoteNamer= [
    "― Oscar Wilde",
    "― Marilyn Monroe",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― William W. Purkey",
    "― Mahatma Gandhi",
    "― Robert Frost",
    "― J.K. Rowling, Harry Potter and the Goblet of Fire",
      "Albert Einstein",
    "Marie Curie",
    "Isaac Newton",
    "Charles Darwin",
    "Galileo Galilei",
    "Nikola Tesla",
    "Ada Lovelace",
    "James Clerk Maxwell",
]
// I selected by ID 
var quoteText =document.getElementById("quoteText")
var quoteName =document.getElementById("quoteName")
//then i make a funct with btn that i can add a random quote
function addQuote() 
{
    var number = Math.floor(Math.random() * quoteTexter.length)
    quoteText.innerHTML=quoteTexter[number]
   var number2= Math.floor(Math.random() * quoteNamer.length);
   quoteName.innerHTML=quoteNamer[number2]
//What I did here: I just need to have a random length of my array, so I have a very long one and I put it in var.
//After that, I i ues the separated by id and i, but the array with index [number] that was var
}