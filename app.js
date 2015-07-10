
//variable declarations----------------------------------------------------------------------------

//takes two elements, first element is player name, second element is score
var currentPlayer;
var player1 = {
      name:["player 1"],
      score: 0
};

var player2 = {
      name:["player 2"],
      score: 0
};
currentPlayer = player1;

//creating an empty object
var gameBoard = {};

//Declare the gameBoard variables
// First element is the overall originalBeat number
// Second element is the melody number
// Third element is the instrument number
// Fourth element is the beat number
gameBoard[0]= ["melody2", "instrument10", "beat11"];  //this means: originalBeat1 has the answer of: melody2, instrument5, beat1
gameBoard[1]= ["melody3", "instrument8", "beat15"];
gameBoard[2]= ["melody5", "instrument9", "beat12"];
gameBoard[3]= ["melody4", "instrument7", "beat13"];

var gameBoardArray = [gameBoard[0], gameBoard[1], gameBoard[2], gameBoard[3]];
var actualGameBoard = [];
var answerGuess = [];

//function declarations-----------------------------------------------------------------------------------


  //Toggle the columns
  $(
    function(){
      $("#melodyHeader").click(function(){
          $("#melodyOptions").slideToggle("medium");
      });
    }
  );

  //jQuery selector for the instrument column
  $(
    function(){
      $("#instrumentHeader").click(function(){
          $("#instrumentOptions").slideToggle("medium");
      });
    }
  );

  //jQuery selector for the beat column
  //first tag is what calls it, then what is changed
  $(
    function(){
      $("#beatHeader").click(function(){
          $("#beatOptions").slideToggle("medium");
      });
    }
  );
  //jQuery audio to button for melody
  $(
    function(){
      $('#originalBeat').click(function(){
          $("#audioOriginal1").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#melody1').click(function(){
          $("#audio1").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#melody2').click(function(){
          $("#audio2").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#melody3').click(function(){
          $("#audio3").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#melody4').click(function(){
          $("#audio4").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#melody5').click(function(){
          $("#audio5").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument6').click(function(){
          $("#audio6").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument7').click(function(){
          $("#audio7").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument7').click(function(){
          $("#audio7").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument8').click(function(){
          $("#audio8").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument9').click(function(){
          $("#audio9").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#instrument10').click(function(){
          $("#audio10").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#beat11').click(function(){
          $("#audio11").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#beat12').click(function(){
          $("#audio12").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#beat13').click(function(){
          $("#audio13").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#beat14').click(function(){
          $("#audio14").trigger('play');
        });
      }
  );

  $(
    function(){
      $('#beat15').click(function(){
          $("#audio15").trigger('play');
        });
      }
  );
//double click event for melody
//I made a mistake that this eventListener was inside of a function, don't do that again
//Also,  use the document(ready) jquery format instead, otherwise I have to have the JavaScript
// at the bottom of the file.

  $('button.melody').on('dblclick',function(){
    //"This" is referring to the button on the line above, and .id is how you call its id
    //When the button is double clicked, push it to the array "answerGuess"
    answerGuess.push(this.id);
    if (answerGuess[0] === gameBoard[0][0]){
      alert("You guessed the right melody! Now double click on the instrument that matches the original beat This is part of buttonmelody eventlistener");
    }
    else{
      alert("Sorry, wrong guess..next player start");
      //change player because current player lost
      setTurn();
      //empty the array for the next player, this needs to be before 'return'
      answerGuess = [];
      //empty the array for the next player
      //Is it not ok to call a universal variable inside a function?
    }
  });

  $('button.instrument').dblclick(function(){
    //"This" is referring to the button on the line above, and .id is how you call its id
    //When the button is double clicked, push it to the array "answerGuess"
    answerGuess.push(this.id);
    if (answerGuess[1] === gameBoard[0][1]){
      alert("You guessed the right instrument! Now double click on the instrument that matches the original song");
    }
    else{
      alert("Sorry, wrong guess..next player start");
      answerGuess = [];
      //change player because current player lost
      setTurn();
    }
  });

$('button.beat').dblclick(function(){
    //"This" is referring to the button on the line above, and .id is how you call its id
    //When the button is double clicked, push it to the array "answerGuess"
    answerGuess.push(this.id);
    if (answerGuess[2] === gameBoard[0][2]){
      //alert the user they were right
      alert("Good ear! You got it all right! Point. Now it's the next player's turn");
      //add a point to currentPlayer's score
      currentPlayer.score++;
      answerGuess = [];
      //change the scoreboard
      if (currentPlayer == player1){
        $("#player1Score").html("player 1 has " + currentPlayer.score);
        if (currentPlayer.score == 4){
          alert("Game over, " + currentPlayer.name + "won!");
        }
      }
      else {
        $("#player2Score").html("player 2 has " + currentPlayer.score);
      }
      //change players
      setTurn();
    }
    else {
      //alert the user it was wrong
      alert("Sorry, wrong guess..next player start");
      //re-set the gueser board
      answerGuess = [];
      //change players
      setTurn();
    }
  });

//---------------------------------------------------------------------------------------------------------------
  //set whose turn it is next by changing currentPlayer
  function setTurn(){
    console.log(currentPlayer[0]);
    if ( currentPlayer.name == ("player 1")){
      currentPlayer = player2;
    }
    else {
      currentPlayer = player1;
    }
  }
