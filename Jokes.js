// Array containing some light-hearted jokes with authors
const jokesArray = [ // 10 , each joke can have its own set of properties
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    // 5 more jokes
    {
        "joke": "Why did the tomato turn red? Because it saw the salad dressing!",
       
        "author": "Salad Lover"
    },
    {
        "joke": "What did one ocean say to the other ocean? Nothing, they just waved.",
        
        "author": "Sea Enthusiast"
    },
    {
        "joke": "Why don't skeletons fight each other? They don't have the guts!",
     
        "author": "Anatomy Geek"
    },
    {
        "joke": "How does a penguin build its house? Igloos it together!",
        
        "author": "Polar Puns"
    },
    {
        "joke": "What did the janitor say when he jumped out of the closet? Supplies!",
       
        "author": "Closet Comedian"
    }
];

// to get the random joke 
function getRandomJoke() {
    const jokeDisplay = document.getElementById("jokesText"); // Get references to HTML elements with the IDs "jokesText" and "author"
    const authorDisplay = document.getElementById("author");

    const randomIndex = Math.floor(Math.random() * jokesArray.length); // rounds down a floating-point number that is between 0 to 1 * 5 (the length) 
    const randomJoke = jokesArray[randomIndex]; // Select a random joke from the jokesArray

    jokeDisplay.innerText = randomJoke.joke; // put the data in div 
    authorDisplay.innerText = `— ${randomJoke.author}`; 
}

// call the function once when the page is loaded
document.addEventListener('DOMContentLoaded', function() { // .addEventListener is function for call back
    getRandomJoke();
});

//DOM methods allow to access the tree


