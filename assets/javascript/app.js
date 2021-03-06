$(document).ready(function () {

    // DECLARING VARIABLES
    var princess = new Audio("./assets/audio/princess.mp3");
    var tommyLaugh = new Audio("./assets/audio/tommy-laugh.mp3");
    var forgiveMe = new Audio("./assets/audio/godforgiveme.mp3");
    var startGame = false;
    var yesImg;
    var userChoice;
    var rightChoice;
    var correctLog = 0;
    var incorrectLog = 0;
    var gameTimer = 10;
    var timeout;
    var number = 1;
    var i = 0;

    // ARRAY OF QUESTIONS THAT WILL POPULATE THE MAIN CONTENT DIV
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
        correctLog = 0;
        incorrectLog = 0;
        gameTimer = 10;
        number = 1;
        shuffle(questions);
        rightChoice = (questions[i].correctAnswer);
        yesImg = (questions[i].imageUrl)
        newQuestion();
    }

    function nextItem() {
        i = i + 1;
        rightChoice = (questions[i].correctAnswer);
        yesImg = (questions[i].imageUrl);
        return questions[i];
    }

    function newQuestion() {
        hideAll()
        $("#main-content").show();
        $(".title").text(`Question ${number}`);
        $(".what-question").html(questions[i].ask);
        $("#answer-1").html(questions[i].answer1);
        $("#answer-2").html(questions[i].answer2);
        $("#answer-3").html(questions[i].answer3);
        $("#answer-4").html(questions[i].answer4);
        $("#timer").html("Time Remaining: 10");
        gameTimer = 10
        timeout = setInterval(countdown, 1000);
        number++;
    };

    function countdown() {
        gameTimer--;
        $("#timer").text("Time Remaining: " + gameTimer);
        if (gameTimer === 0) {
            outtaTime();
        }
    }

    function stopTimer() {
        clearInterval(timeout);
    }

    function correct() {
        stopTimer()
        $("#main-content").hide();
        $("#correct-answer").show();
        $(".title").text("Correct!");
        $(".what-question").text("Ha ha ha. Good Thinking");
        $(".response-box").html(`<img class="rounded img-fluid" src="${yesImg}">`);
        correctLog++;
    };

    function wrong() {
        stopTimer()
        $("#main-content").hide();
        $("#wrong-answer").show();
        $(".title").text("Incorrect!");
        $(".what-question").text("Why Lisa why? The answer was " + '"' + rightChoice + '"');
        $(".response-box").html(`<img class="rounded img-fluid" src="${yesImg}">`)
        incorrectLog++;
    };

    function outtaTime() {
        stopTimer()
        $("#main-content").hide();
        $("#outta-time").show();
        $(".title").text("Out of Time!");
        $(".what-question").text("The answer is " + rightChoice)
        $(".response-box").html('<img class="rounded img-fluid" src="./assets/images/betray.gif">')
        incorrectLog++;
        nextItem();
        isFinished()
    };

    function gameOver() {
        forgiveMe.play();
        stopTimer();
        $("#game-over").show()
        $("#success").text(correctLog);
        $("#failure").text(incorrectLog);
        setTimeout(init, 10000);
    };

    function hideAll() {
        $("#main-content").hide();
        $("#correct-answer").hide();
        $("#wrong-answer").hide();
        $("#outta-time").hide();
        $("#game-over").hide();
    };

    function isFinished() {
        if (i < questions.length) {
            setTimeout(newQuestion, 5000);
            console.log(i);
        }

        else {
            $("#main-content").hide();
            $("#correct-answer").hide();
            $("#wrong-answer").hide();
            $("#outta-time").hide();
            gameOver();
        }
    }

    // SHUFFLE THE ORDER OF QUESTIONS GIVEN PER ROUND
    function shuffle(questions) {
        var gameFlow = questions.length, tempVal, shuffleVal;

        while (0 !== gameFlow) {

            shuffleVal = Math.floor(Math.random() * gameFlow);
            gameFlow -= 1;

            tempVal = questions[gameFlow];
            questions[gameFlow] = questions[shuffleVal];
            questions[shuffleVal] = tempVal;
        }

        return questions;
        console.log(questions);
    }

    // INITIALIZATION
    hideAll();

    // START GAME
    $("#start-button").on("click", function () {

            princess.play();
            $("#start-button").hide();

            init();
            console.log(questions);

            $(".your-choices").on("click", function () {

                userChoice = $(this).text();
                console.log('User:', userChoice);
                console.log('Correct:', rightChoice);

                if (userChoice == rightChoice) {
                    correct();
                    isFinished();
                }

                else {
                    wrong();
                    isFinished();
                }

                nextItem();
            })

    })

});