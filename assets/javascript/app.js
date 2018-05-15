
var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
var startGame = false;

var q1 = {
    ask: "",    
};

var q2 = {
    ask: "",    
};

var q3 = {
    ask: "",    
};

var q4 = {
    ask: "",    
};

var q5 = {
    ask: "",    
};

var q6 = {
    ask: "",    
};

var q7 = {
    ask: "",    
};

var q8 = {
    ask: "",    
};

var q9 = {
    ask: "",    
};

var q10 = {
    ask: "",    
};

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9 , q10];

var mySound = soundManager.createSound({
    url: '/path/to/an.mp3'
  });
  
  // ...and play it
  mySound.play();
  
soundManager.setup({
    // where to find flash audio SWFs, as needed
    url: '/path/to/swf-files/',
    onready: function () {
        // SM2 is ready to play audio!
    }
});