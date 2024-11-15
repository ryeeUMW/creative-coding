let stanza = '';

//nick montfort has 17 materials 26 places, 4 light sources, and 22 inhabitants.
//I have the same amount if not more than nick does!

let grammar = tracery.createGrammar({
  //creating things to go into my stanzas
  "material": [//starting with the material the house is made of
    "Books",//I started my material list by looking around my living room
    "Coffee",
    "Tea",
    "Words",
    "Songs",
    "Bats",//This is a bat statue in my house, I do not have bats in my house
    "Toast",
    "Whales",
    "Art",
    "Pictures",
    "Pillows",
    "Coral",
    "Seaweed",
    "Shoes",
    "Numbers",
    "Blankets",
    "Dirt"
    ],

  "place":[//Next, where the house is
    "In the desert",//I started by just naming broad places
    "In the ocean",
    "In the forest",
    "In the woods",
    "In the mountains",
    "In the snow",
    "In a swamp",
    "In a reef",
    "In a river",
    "By the sea",//noticed that Nick Montfort has things "by" a place to I implemented that to not have only "in the"
    "In a small town",
    "In a large city",
    "On a flower",//Started to think more specific in which thiings dont have to live where a house can actually fit. Maybe its a house for the whos who live on flowers
    "On a blade of grass",
    "In a field",
    "In a basket",
    "On the moon",
    "In a cave",
    "In the sky",
    "On a star",
    "In Virginia",
    "In Tokyo",
    "On a dog",
    "In a fenced-in yard",
    "In a pot",
    "On a coaster",
    "On a christmas tree"
    ],
  "light":[//Then, what kind of light the house uses
    "Using natural light",
    "Using bioluminescent bacteria",//I was thinking about the whales and underwater remembering that there is glowing bacteria that I wanted to include
    "Using lamps",
    "Using candles",
    "Using all available light"
    ],
  "inhabitants":[//finally, who lives in the house
    "Sleeping cats",
    "Fish",
    "Playing Children",
    "Sentient Chess pieces",//they dont have to be realistic
    "Flying paper",
    "Walking food utensils",
    "Arts and craft lovers",
    "Knittners",
    "Crocheters",
    "Rugby players",//Started to go the college route
    "Soccer players",
    "Libraians",
    "College students",
    "The robotics club",
    "Disney channel stars",//stared to think of disney(tm)
    "Disney princesses",
    "Geese",
    "Roosters, chickens, and hens",
    "Sentient toys",
    "Pigeons?",
    "Trash",
    "Leafy plants",
    ],
  "origin": "A house of #material# \n \t #place# \n \t \t #light# \n \t \t \t inhabited by #inhabitants#"
});

//stanza = grammar.flatten("#origin#");

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);

  for (let y = 70; y < height - 100; y += 150) { //repeat stanzas until the bottom of the page

    stanza = grammar.flatten("#origin#");
    textFont('Courier New');
    textSize(20);
    text(stanza, 50, y);
    frameRate(.3);//"refresh" after 23 seconds


    // }
    // textFont('Courier New');
    // textSize(20);
    // text(stanza, 10, y);
  }
  // textFont('Courier New');
  // textSize(30);
  // text(stanza,50,70);
}