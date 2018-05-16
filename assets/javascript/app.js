window.onload = function () {

    var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
    var startGame = false;
    var userAnswer;
    var correctAnswers;
    var wrongAnswers;
    var timeOut;


    // PLACE QUESTIONS IN ARRAY TO CLEAN UP
    var q1 = {
        title: "Question 1",
        ask: "What gift does Johnny present to Lisa in the opening scene?",
        answer1: "Black Heels",
        answer2: "Pearl Necklace",
        answer3: "Red Dress",
        answer4: "Diamond Ring",
        correctAnswer: "Red Dress",
        imageUrl: "",
    };

    var q2 = {
        title: "Question 2",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q3 = {
        title: "Question 3",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q4 = {
        title: "Question 4",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q5 = {
        title: "Question 5",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q6 = {
        title: "Question 6",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q7 = {
        title: "Question 7",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q8 = {
        title: "Question 8",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q9 = {
        title: "Question 9",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };

    var q10 = {
        title: "Question 10",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        imageUrl: "",
    };


    //CHANGE THIS INTO AN ARRAY OF OBJECTS [ { } ]. SWITCH THE CURLY TO BRACKETS
    var questions = {
        ask: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],

        response: [
            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },
            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },            {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
            },
        ]
    };

    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

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