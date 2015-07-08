//----------Toggle the columns ----------------------------------------------------------------->
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
//---------------- jQuery call to the audio files ---------------------------------------------------------------
// Original beat (audioOriginal)
$(
  function(){
    $('#originalBeat').click(function(){
        $("#audioOriginal1").trigger('play');
      });
    }
);

// Melody sound 1 (audio1)
$(
  function(){
    $('#melody1').click(function(){
        $("#audio1").trigger('play');
      });
    }
);

// Melody sound 1 (audio1)
$(
  function(){
    $('#audio2').click(function(){
        $("#melody2").trigger('play');
      });
    }
);

// Melody sound 1 (audio1)
$(
  function(){
    $('#melodyOne').click(function(){
        $("#melody3").trigger('play');
      });
    }
);

// Melody sound 1 (audio1)
$(
  function(){
    $('#melodyOne').click(function(){
        $("#melody4").trigger('play');
      });
    }
);

// Melody sound 1 (audio1)
$(
  function(){
    $('#melodyOne').click(function(){
        $("#melody5").trigger('play');
      });
    }
);
// --------------------------------------------------------------------------------------------------------
//Declare the different beats, there will be 3 total
//each element in the array is the correct button which corresponds
//to that beat, i.e. [1,1,1] means the first melody button, the first
//instrument button and the first drums button
var beat1 = [1,1,1];
var beat2 = [2,2,2];
var beat3 = [3,3,3];

//Declare the original beat
var originalBeat;


//  Game alerts whose turn it is  -done
//  Game randomly picks an original beat  -done
//  Game assigns that original beat to the correct button -done
//  Player can click the original beat to hear it -done
//  Player selects which melody he thinks he heard
//  Player can play each melody, instrument, and drum file to hear it
//  Player must guess if the meldoy, instrument and drum files
//  match the original beat.
function playersTurn(){
  // 1 here will mean player 1's turn
  var whoseTurn = 1;
  alert("It is now player " + whoseTurn +"'s turn");
  //randomly choose a beat
  var whichBeat = Math.floor((Math.random() * 3) + 1);
  //now assign that number to the correct original beat
  if (whichBeat === 1){
    originalBeat = beat1;
  }
  else if (whichBeat === 2){
    originalBeat = beat2;
  }
  else {
    originalBeat = beat3;
  }
  console.log(originalBeat);
  //jQuery to play the audio
}
