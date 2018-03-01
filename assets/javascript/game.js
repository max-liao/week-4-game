// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
alert("Press any key to get started!");

var game = {

    //variables
    random: 0,
    userscore: 0,
    computerscore: 0,
    name: "hangman",
    creator: "Max",
    
    //functions
    hellow : function(){
      console.log("Hello World");
    },
    
    start: function(){
      var initialnum = Math.floor(Math.random()*100);
      console.log("Creating random number");
      return initialnum;
    },

    heart: function(){
      var initialnum = Math.floor(Math.random()*100);
      console.log("Creating random number");
      return initialnum;
    }
    ,

    : function(){
      var initialnum = Math.floor(Math.random()*100);
      console.log("Creating random number");
      return initialnum;
    },

    start: function(){
      var initialnum = Math.floor(Math.random()*100);
      console.log("Creating random number");
      return initialnum;
    }
}


// Initialize game
game.random = game.start();
console.log(game.random);

// Event Listener
document.getElementById("heartbtn").addEventListener("click", game.hellow);
document.getElementById("heartbtn").addEventListener("click", game.hellow);
document.getElementById("heartbtn").addEventListener("click", game.hellow);
document.getElementById("heartbtn").addEventListener("click", game.hellow);