# TriviaGame

Parks and Recreation Trivia Game!

Here's what I've found that DOESN'T work with my code:

--The timer gets a little wonky. It will reset every question, but will take a full second to reset to "15" before it starts the interval again. I tried a few things but wasn't able to get it to work correctly.

--If you leave a question unanswered, the game will automatically give you the "game end" screen without moving onto the next question and count the remainder of the quiz as "unanswered". (I was a bit confused because I only call the "end game" function once, and thats if the "current question" variable decrements all the way down to 0.) I didn't have enought time to fix this issue, but I think the issue was happening in the timerCount function? 