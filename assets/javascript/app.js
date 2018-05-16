window.onload = function () {

    //DECLARING VARIABLES
    var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
    var startGame = false;
    var userAnswer;
    var correctAnswers;
    var wrongAnswers;
    var timeOut;
    var number = 1;
    var gameFlow = [];  

    var questions = [

        q1 = {
            title: "Question 1",
            ask: "What gift does Johnny present to Lisa in the opening scene?",
            answer1: "Black Heels",
            answer2: "Pearl Necklace",
            answer3: "Red Dress",
            answer4: "Diamond Ring",
            correctAnswer: "Red Dress",
            imageUrl: "./assets/images/lisadress.gif",
        },

        q2 = {
            title: "Question 2",
            ask: "Throughout the movie, characters are always throwing around:",
            answer1: "Footballs",
            answer2: "Their Backs",
            answer3: "Spoons",
            answer4: "Paper Airplanes",
            correctAnswer: "Footballs",
            imageUrl: "./assets/images/football.gif",
        },

        q3 = {
            title: "Question 3",
            ask: "Who is Johnny's best friend?",
            answer1: "Alan",
            answer2: "Greg",
            answer3: "Tommy",
            answer4: "Mark",
            correctAnswer: "Mark",
            imageUrl: "./assets/images/markfriend.gif",
        },

        q4 = {
            title: "Question 4",
            ask: "Seemingly out of nowhere, Lisa's mom annouces that she:",
            answer1: "Found a new husband",
            answer2: "Is moving out of town",
            answer3: "Bought a new car",
            answer4: "Has breast cancer",
            correctAnswer: "Has breast cancer",
            imageUrl: "./assets/images/lisamom.gif",
        },

        q5 = {
            title: "Question 5",
            ask: "The Room is based in the city of:",
            answer1: "Los Angeles",
            answer2: "Boston",
            answer3: "Las Vegas",
            answer4: "San Francisco",
            correctAnswer: "San Francisco",
            imageUrl: "./assets/images/loveisblind.gif",
        },

        q6 = {
            title: "Question 6",
            ask: "What year was The Room released?",
            answer1: "1986",
            answer2: "2016",
            answer3: "2003",
            answer4: "1999",
            correctAnswer: "2003",
            imageUrl: "./assets/images/ohhimark.gif",
        },

        q7 = {
            title: "Question 7",
            ask: "What was the reported budget of The Room?",
            answer1: "$6 million",
            answer2: "$5,000",
            answer3: "$350,000",
            answer4: "$1200",
            correctAnswer: "$6 million",
            imageUrl: "./assets/images/tommyshock.gif",
        },

        q8 = {
            title: "Question 8",
            ask: "As Johnny leaves the florist, he stops to pet",
            answer1: "A Parrot",
            answer2: "A Dog",
            answer3: "A Cat",
            answer4: "The Owner",
            correctAnswer: "A Dog",
            imageUrl: "./assets/images/doggie.gif",
        },

        q9 = {
            title: "Question 9",
            ask: "What does Johnny throw out of the window in the final scene?",
            answer1: "Himself",
            answer2: "Television Set",
            answer3: "His Mattress",
            answer4: "Photo Albums",
            correctAnswer: "Television Set",
            imageUrl: "./assets/images/tvthrow.gif",
        },

        q10 = {
            title: "Question 10",
            ask: "How does Johnny taunt his friend at the birthday party?",
            answer1: "Gives him the middle finger",
            answer2: "Crying",
            answer3: "Flailing his arms like a bird",
            answer4: "Pumping his fist",
            correctAnswer: "Flailing his arms like a bird",
            imageUrl: "./assets/images/cheep.gif",
        },
    ];

    function init() {
        tommyLaugh.play();
        $("#start-button").hide();
        $("#main-content").show();
        $("#number").text(number);
    }

    function newQuestion() {
        $("#what-question").text(questions[i].ask)
        $("#answer-1").text(questions[i].answer1)
        $("#answer-2").text(questions[i].answer2)
        $("#answer-3").text(questions[i].answer3)
        $("#answer-4").text(questions[i].answer4)
        number++;
    };

    // function nextQuestion() {
    //     $("#what-question").text(questions[i+1].ask)
    //     $("#answer-1").text(questions[i+1].answer1)
    //     $("#answer-2").text(questions[i+1].answer2)
    //     $("#answer-3").text(questions[i+1].answer3)
    //     $("#answer-4").text(questions[i+1].answer4)
    //     number++;
    // }

    function correct() {
        $("#what-question").text("Correct!");
        $("#response-box").html('<img src=questions[i].imageUrl>')
    };

    function wrong() {
        $("#what-question").text("Incorrect!");
        $("#response-box").html('<img src="./assets/images/tearingme.gif">')
    };

    function outtaTime() {
        $("#what-question").text("Out of Time!");
        $("#response-box").html('<img src="./assets/images/betray.gif">')
    };


    // INITIALIZATION
    $("#main-content").hide();


    //START GAME
    $("#start-button").on("click", function () {
        init();

        for (i = 0; i < questions.length; i++) {

            gameFlow = questions[Math.floor(Math.random() * questions.length)];
            console.log(gameFlow);

            if (!startGame) {

                newQuestion();
                $(".your-choices").on("click", function(){
                    userAnswer = $(this).text();
                    console.log(userAnswer);
                    console.log(questions[i]);
                    // if (userAnswer === questions[i].correctAnswer) {
                    //     correct();
                    // }
                    // else {
                    //     wrong();
                    // }

                })

                startGame = true;

            }

            else {
                // nextquestion();
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