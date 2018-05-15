window.onload = function () {

    var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
    var startGame = false;
    var userAnswer;
    var correctAnswer;

    var q1 = {
        title: "Question 1",
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
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

    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    $("#main-content").hide();

    $("#start-button").on("click", function () {
        tommyLaugh.play();
        console.log(this);
        if (!startGame) {
            $("start-button").hide();
            $("main-content").show();
            startGame = true;
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