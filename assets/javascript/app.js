window.onload = function () {

    var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
    var startGame = false;
    var userAnswer;
    var correctAnswers;
    var wrongAnswers;
    var timeOut;


    // PLACE QUESTIONS IN ARRAY TO CLEAN UP

    //CHANGE THIS INTO AN ARRAY OF OBJECTS [ { } ]. SWITCH THE CURLY TO BRACKETS
    var questions = [

        q1 = {
            title: "Question 1",
            ask: "What gift does Johnny present to Lisa in the opening scene?",
            answer1: "Black Heels",
            answer2: "Pearl Necklace",
            answer3: "Red Dress",
            answer4: "Diamond Ring",
            correctAnswer: "Red Dress",
            imageUrl: "",
        },

        q2 = {
            title: "Question 2",
            ask: "What are the characters always throwing around?",
            answer1: "Footballs",
            answer2: "Their Backs",
            answer3: "Spoons",
            answer4: "Paper Airplanes",
            correctAnswer: "Footballs",
            imageUrl: "",
        },

        q3 = {
            title: "Question 3",
            ask: "Who is Johnny's best friend?",
            answer1: "Alan",
            answer2: "Greg",
            answer3: "Tommy",
            answer4: "Barney",
            correctAnswer: "Greg",
            imageUrl: "",
        },

        q4 = {
            title: "Question 4",
            ask: "What does Lisa's mom suddenly announce?",
            answer1: "",
            answer2: "Moving to a new town",
            answer3: "Bought a new car",
            answer4: "She has breast cancer",
            correctAnswer: "She has breast cancer",
            imageUrl: "",
        },

        q5 = {
            title: "Question 5",
            ask: "What city is The Room based in?",
            answer1: "Los Angeles",
            answer2: "Boston",
            answer3: "Las Vegas",
            answer4: "San Francisco",
            correctAnswer: "San Francisco",
            imageUrl: "",
        },

        q6 = {
            title: "Question 6",
            ask: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: "",
            imageUrl: "",
        },

        q7 = {
            title: "Question 7",
            ask: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: "",
            imageUrl: "",
        },

        q8 = {
            title: "Question 8",
            ask: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: "",
            imageUrl: "",
        },

        q9 = {
            title: "Question 9",
            ask: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: "",
            imageUrl: "",
        },

        q10 = {
            title: "Question 10",
            ask: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: "",
            imageUrl: "",
        },
    ];

    function init() {
        $("#main-content").show();
    }

    function newQuestion() {

    };

    function correct() {
        $("#what-question").text("Correct!");
    };

    function wrong() {
        $("#what-question").text("You're tearing me apart!");
    };

    function outtaTime() {
        $("#what-question").text("Out of Time!");
    };


    // $("#start-button").hide();
    $("#main-content").hide();

    $("#start-button").on("click", function () {
        tommyLaugh.play();

        $("#start-button").hide();
        $("#main-content").show();

        for (i = 0; i < questions.length; i++) {

            if (!startGame) {
                console.log(startGame);

                startGame = true;
                console.log(startGame);
            }

            else {

            }
        }

    })

}


    // var mySound = soundManager.createSound({
    //     url: '/path/to/an.mp3'
    //   });

    //   // ...and play it
    //   mySound.play();

    // soundManager.setup({
    //     // where to find flash audio SWFs, as needed
    //     url: '/path/to/swf-files/',
    //     onready: function () {
    //         // SM2 is ready to play audio!
    //     }
    // });