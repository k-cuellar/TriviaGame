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
        var selectedAnswer = $(this).val();
        //if selected answer === game.correctAnswers[currentQuestion]
        if (selectedAnswer === game.correctAnswers[game.currentQuestion]){
            //clear interval of timer
            clearInterval(game.timer);
            //increment correct
            game.correct++;
            //increment currentQuestion
            game.currentQuestion++;
        }
        //else
        else {
            //clear interval of timer
            clearInterval(timer);
            //increment incorrect
            game.incorrect++;
            //increment currentQuestion
            game.currentQuestion++;
        }
    })
    
    var game = {
        //properties of game
        timer : 15,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentQuestion: 0,
    
        //questions
        questions: {
            q1: "Fill in the blank: “Bye, bye, Li’l Sebastian! __________”",
            q2: "What kind of car does Donna drive?",
            q3: "In what language does Chris train Champion while he’s dog-sitting for April and Andy?",
            q4: "Where was Leslie Knope born?",
            q5: "What is the name of the boardgame that Ben creates?",
            q6: "What's the one thing that Ron hates more than lying?",
            q7: "What is the name of Tom's ex-wife?",
            q8: "Leslie accidentally married two male _______ at the zoo.",
            q9: "How does Jerry check his email?",
            q10: "What is April's favorite band?",
        },
    
        //options for answers
        answers: {
            q1: ["Miss you with the greatest passion", "Miss you in the saddest fashion", "Through the Pearly Gates you're crashin'", "In World War II the food was rationed"],
            q2: ["Mercedes Benz", "BMW", "Tesla", "Jaguar"], 
            q3: ["French", "English", "Italian", "German"],
            q4: ["Eagleton", "Pawnee", "Muncie", "Indianapolis"],
            q5: ["The Tops of Mountains", "The Cones of Dunshire", "Trickerion: Legends of Illusion", "Heroes of Terrinoth"],
            q6: ["Salad: it’s the food his food eats", "Tammy 2: she’s a machine created to destroy human happiness", "Skim milk: it’s water that’s lying about being milk", "FDR: he ruined this country"],
            q7: ["Wendy", "Lucy", "Joanne", "Marlene"],
            q8: ["Otters", "Lions", "Penguins", "Peacocks"],
            q9: ["He calls his wife, who checks it for him and reads the messages aloud", "He uses AOL, which he can only access via a dial-up connection", "He has literally never checked his email", "He goes to AltaVista and types in “please go to Yahoo.com”"],
            q10: ["Mouse Rat", "Neutral Milk Hotel", "Orin", "Spice Girls"],
        },
    
        //correct answers for each question
        correctAnswers: {
            q1: "Miss you in the saddest fashion",
            q2: "Mercedes Benz",
            q3: "German",
            q4: "Eagleton",
            q5: "The Cones of Dunshire",
            q6: "Skim milk: it’s water that’s lying about being milk",
            q7: "Wendy",
            q8: "Penguins",
            q9: "He goes to AltaVista and types in “please go to Yahoo.com”",
            q10: "Neutral Milk Hotel",
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
            var displayScores = "<div>Correct: " + correct + "</div><div>Incorrect: " + incorrect + "</div><div>Unanswered: " + unanswered + "</div";
            $("#results").html(displayScores);
            //stop timer
            stop(timerCount);
        },
    
        //timer function
        timerCount: function(){
            //set interval for 1 second
            let timerCount = setInterval(fifteenSeconds, 1000);
    
            function fifteenSeconds(){
                //if timer reaches 0, generate loss
                if (this.timer === 0){
                    clearInterval(timerCount);
                    unanswered++;
                    nextQuestion();
                }
                //if timer is greater than 0, decrement by 1
                else if (this.timer > 0){
                    this.timer--;
                }
                //update timer in html
                $("#timer").text(this.timer);
            }   
           
        },
       
        //next question function
        nextQuestion: function(){
            //if currentQuestion is less than 10,
            if (currentQuestion < 10){
                //increment current question by 1
                currentQuestion++;
                //reset timer
                timer = 15;
                //change html to show new question
                displayQuestion();
                //call timer function
                timerCount();
            }
            //else - end game screen
            else {
                endGame();
            }
           
        },
    
        //display question and answer options 
        displayQuestion: function(){
            //grab "question" div and change text to game.questions[currentQuestion]
            $("#question").text(this.questions[this.currentQuestion]);
            //grab answers div and change html to have 4 buttons
            //give each buttons and "answer" class
            //change text in each of the buttons to game.answers[currentQuestion[answer]]
            var displayAnswers = "<button class='btn btn-lg btn-block answer'>" + this.answers[this.currentQuestion[0]] + "</button><button class='btn btn-lg btn-block answer'>" + this.answers[this.currentQuestion[1]] + "</button><button class='btn btn-lg btn-block answer'>" + this.answers[this. currentQuestion[2]] + "</button><button class='btn btn-lg btn-block answer'>" + this.answers[this.currentQuestion[1]] + "</button>";
            $("#answers").html(displayAnswers);
        },
    }

})


