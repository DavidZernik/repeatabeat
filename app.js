
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

//create turn counter
var turnCounter = 0;

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
  //jQuery audio to button for melody------------------------------------------------------------
  //play original beat 1
  $(
    function(){
      $('#originalBeat').mouseenter(function(){
          $("#audioOriginal1").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#originalBeat').mouseleave(function(){
          $("#audioOriginal1").trigger('pause');
        });
      }
  );
  //play original beat 2
  $(
    function(){
      $('#originalBeat2').mouseenter(function(){
          $("#audioOriginal2").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#originalBeat2').mouseleave(function(){
          $("#audioOriginal2").trigger('pause');
        });
      }
  );

  //play original beat 3
  $(
    function(){
      $('#originalBeat3').mouseenter(function(){
          $("#audioOriginal3").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#originalBeat3').mouseleave(function(){
          $("#audioOriginal3").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#originalBeat4').mouseenter(function(){
          $("#audioOriginal4").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#originalBeat4').mouseleave(function(){
          $("#audioOriginal4").trigger('pause');
        });
      }
  );
//--------------------------------------------------------------------------
  $(
    function(){
      $('#melody1').mouseenter(function(){
          $("#audio1").trigger('play');
        });
      }
  );
  ///testing...........
  $(
    function(){
      $('#melody1').mouseleave(function(){
          $("#audio1").trigger('pause');
        });
      }
  );


  $(
    function(){
      $('#melody2').mouseenter(function(){
          $("#audio2").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#melody2').mouseleave(function(){
          $("#audio2").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#melody3').mouseenter(function(){
          $("#audio3").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#melody3').mouseleave(function(){
          $("#audio3").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#melody4').mouseenter(function(){
          $("#audio4").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#melody4').mouseleave(function(){
          $("#audio4").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#melody5').mouseenter(function(){
          $("#audio5").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#melody5').mouseleave(function(){
          $("#audio5").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument6').mouseenter(function(){
          $("#audio6").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument6').mouseleave(function(){
          $("#audio6").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument7').mouseenter(function(){
          $("#audio7").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument7').mouseleave(function(){
          $("#audio7").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument7').mouseenter(function(){
          $("#audio7").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument7').mouseleave(function(){
          $("#audio7").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument8').mouseenter(function(){
          $("#audio8").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument8').mouseleave(function(){
          $("#audio8").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument9').mouseenter(function(){
          $("#audio9").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument9').mouseleave(function(){
          $("#audio9").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#instrument10').mouseenter(function(){
          $("#audio10").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#instrument10').mouseleave(function(){
          $("#audio10").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#beat11').mouseenter(function(){
          $("#audio11").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#beat11').mouseleave(function(){
          $("#audio11").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#beat12').mouseenter(function(){
          $("#audio12").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#beat12').mouseleave(function(){
          $("#audio12").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#beat13').mouseenter(function(){
          $("#audio13").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#beat13').mouseleave(function(){
          $("#audio13").trigger('pause');
        });
      }
  );
  $(
    function(){
      $('#beat14').mouseenter(function(){
          $("#audio14").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#beat14').mouseleave(function(){
          $("#audio14").trigger('pause');
        });
      }
  );

  $(
    function(){
      $('#beat15').mouseenter(function(){
          $("#audio15").trigger('play');
        });
      }
  );
  $(
    function(){
      $('#beat15').mouseleave(function(){
          $("#audio15").trigger('pause');
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
    if (answerGuess[0] === gameBoard[turnCounter][0]){
      alert("You guessed the right melody! Now double click on the instrument that matches the original beat");
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
    if (answerGuess[1] === gameBoard[turnCounter][1]){
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
    if (answerGuess[2] === gameBoard[turnCounter][2]){
      //alert the user they were right
      alert("Good ear! You got it all right! Point. Now it's the next player's turn");
      //add a point to currentPlayer's score
      currentPlayer.score++;
      answerGuess = [];
      setBeat();
      //change the scoreboard
      if (currentPlayer == player1){
        $("#player1Score").html("player 1 has " + currentPlayer.score);
        if (currentPlayer.score == 3){
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

  function setBeat(){
    turnCounter ++;
  }
