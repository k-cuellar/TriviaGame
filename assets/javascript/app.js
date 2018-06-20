//document ready
$(document).ready(function(){

    //on-click "start button"
    $("#remainingTime").hide();
    $("#startButton").on("click", function(){
        game.beginGame();
    });
    

    //onclick function for answer class
    $("body").on("click", ".answer", function(){
        //create var for selected answer (this)
        var selectedAnswer = $(this).text();
        //if selected answer === game.correctAnswers[currentQuestion]
        if (selectedAnswer === game.correctAnswers[game.currentQuestion]){
            //clear interval of timer
            clearInterval(game.timer);
            //increment correct
            game.correct++;
            //call Next Question function
            game.nextQuestion();
        }
        //else
        else {
            //clear interval of timer
            clearInterval(game.timer);
            //increment incorrect
            game.incorrect++;
            //call nextQuestion function
            game.nextQuestion();
        }
    })
    
    var game = {
        //properties of game
        timer : 15,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentQuestion: 1,
        timerCountdown: null,  
    
        //questions
        questions: {
            "1": "Fill in the blank: “Bye, bye, Li’l Sebastian! __________”",
            "2": "What kind of car does Donna drive?",
            "3": "In what language does Chris train Champion while he’s dog-sitting for April and Andy?",
            "4": "Where was Leslie Knope born?",
            "5": "What is the name of the boardgame that Ben creates?",
            "6": "What's the one thing that Ron hates more than lying?",
            "7": "What is the name of Tom's ex-wife?",
            "8": "Leslie accidentally married two male _______ at the zoo.",
            "9": "How does Jerry check his email?",
            "10": "What is April's favorite band?",
        },
    
        //options for answers
        answers: {
            "1": ["Miss you with the greatest passion", "Miss you in the saddest fashion", "Through the Pearly Gates you're crashin'", "In World War II the food was rationed"],
            "2": ["Mercedes Benz", "BMW", "Tesla", "Jaguar"], 
            "3": ["French", "English", "Italian", "German"],
            "4": ["Eagleton", "Pawnee", "Muncie", "Indianapolis"],
            "5": ["The Tops of Mountains", "The Cones of Dunshire", "Trickerion: Legends of Illusion", "Heroes of Terrinoth"],
            "6": ["Salad: it’s the food his food eats", "Tammy 2: she’s a machine created to destroy human happiness", "Skim milk: it’s water that’s lying about being milk", "FDR: he ruined this country"],
            "7": ["Wendy", "Lucy", "Joanne", "Marlene"],
            "8": ["Otters", "Lions", "Penguins", "Peacocks"],
            "9": ["He calls his wife, who checks it for him and reads the messages aloud", "He uses AOL, which he can only access via a dial-up connection", "He has literally never checked his email", "He goes to AltaVista and types in “please go to Yahoo.com”"],
            "10": ["Mouse Rat", "Neutral Milk Hotel", "Orin", "Spice Girls"],
        },
    
        //correct answers for each question
        correctAnswers: {
            "1": "Miss you in the saddest fashion",
            "2": "Mercedes Benz",
            "3": "German",
            "4": "Eagleton",
            "5": "The Cones of Dunshire",
            "6": "Skim milk: it’s water that’s lying about being milk",
            "7": "Wendy",
            "8": "Penguins",
            "9": "He goes to AltaVista and types in “please go to Yahoo.com”",
            "10": "Neutral Milk Hotel",
        },
    
        //begin game function
        beginGame: function(){
            //reset scores
            this.correct = 0;
            this.incorrect = 0;
            this.unanswered = 0;
            //show game elements, hide start button, show timer
            $("#game").show();
            $("#results").html('');
            $("#startButton").hide();
            $("#timer").text(this.timer);
            $("#remainingTime").show();
            
            this.timerCount();
            this.displayQuestion();

        },
    
        //end game function
        endGame: function(){
            //display scores
            var displayScores = "<div>Correct: " + game.correct + "</div><div>Incorrect: " + game.incorrect + "</div><div>Unanswered: " + game.unanswered + "</div";
            $("#results").html(displayScores);
            //hide game
            $(".game").hide();
            //stop timer
            clearInterval(game.timerCountdown);


        },
    
        //timer function
        timerCount: function(){
            if(this.timerCountdown) clearInterval(this.timerCountdown);
            //set interval for 1 second
            this.timerCountdown = setInterval(fifteenSeconds, 1000);

            fifteenSeconds();

            function fifteenSeconds(){
                //update timer in html
                $("#timer").text(game.timer);
                //if timer reaches 0, generate loss
                if (game.timer === 0){
                    clearInterval(this.timerCountdown);
                    game.unanswered++;
                    game.nextQuestion();
                }
                //if timer is greater than 0, decrement by 1
                else if (game.timer > 0){
                    game.timer--;
                }
                
                
            }   
           
        },
       
        //next question function
        nextQuestion: function(){
            //if currentQuestion is less than 10,
            if (game.currentQuestion < 10){
                //increment current question by 1
                game.currentQuestion++;
                //reset timer
                //change html to show new question
                //call timer function
                game.timerCount();
                game.timer = 15;
                game.displayQuestion();
            }
            //else - end game screen
            else {
                game.endGame();
            }
           
        },
    
        //display question and answer options 
        displayQuestion: function(){
            //grab "question" div and change text to game.questions[currentQuestion]
            $("#question").html("<h3 class='font-italic'>" + game.questions[game.currentQuestion] + "</h3>");    
            //grab answers div and change html to have 4 buttons
            //give each buttons and "answer" class
            //change text in each of the buttons to game.answers[currentQuestion[answer]]
            var displayAnswers = "<button class='btn btn-lg btn-block border border-info answer'>" + this.answers[this.currentQuestion][0] + "</button><button class='btn btn-lg btn-block border border-info answer'>" + this.answers[this.currentQuestion][1] + "</button><button class='btn btn-lg btn-block border border-info answer'>" + this.answers[this. currentQuestion][2] + "</button><button class='btn btn-lg btn-block border border-info answer'>" + this.answers[this.currentQuestion][3] + "</button>";
            $("#answers").html(displayAnswers);
        },
    }

})


