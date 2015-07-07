//jQuery selector for the melody column
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
$(
  function(){
    $("#beatHeader").click(function(){
        $("#beatOptions").slideToggle("medium");
    });
  }
);

$(function() {
    $( "#melodyOne").draggable();
  });
