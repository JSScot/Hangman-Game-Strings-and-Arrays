// words 

const introImage = document.getElementById("intro");

const words = ["javascript", "html", "css", "python", "java", "ruby", "coding", "swift", "kotlin" , "strawberry", "mango" , "sleepy"];

// random word from the array
const word = words[Math.floor(Math.random() * words.length)];

//Break up word into letters
let letters = word.split("");

// initialize the userput variable
let userinput = null;


// specify the letters in the user's alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// saving the letters 
let word2_arr = [], word2 = "";
// track number of tries
let tryCount = 0;

for (let index = 0; index < letters.length; index++) {

  word2_arr[index] = "_";

}

word2 = word2_arr.join("");


  while (word2 != word)
    {
      userinput = prompt("Guess a letter (in lowercase) for this word or click Cancel to end the game:\n" + word2_arr);
      if (userinput)
        if (userinput.length == 1) {
          tryCount++;
          console.log(userinput);
          userinput = userinput.toLowerCase();

            if (letters.indexOf(userinput) >= 0) {

              for (let index = 0; index < letters.length; index++) {

                if (letters[index] == userinput) {

                  word2_arr[index] = userinput;
                  word2 = word2_arr.join("");
                  console.log(userinput);

                }

              }

          }
        }






    }

    if(tryCount <= word.length+2)
    {
    alert("Whoa that was great! Did you cheat?\nThe word was: " + word + " \nThat took you " + tryCount + " tries" );
    }
else
    {
      alert("You guessed it! \nThe word was: " + word + " \nThat took you " + tryCount + " tries" );
    }


    
//edited

