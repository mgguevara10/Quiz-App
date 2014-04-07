"use strict"
var totalQuestions = 5;

var answers = new Array;
var userAnswers = new Array;

answers[1] = "A";
answers[2] = "B";
answers[3] = "A";
answers[4] = "C";
answers[5] = "A";
var Question = {
   Q1:Who confirmed the expansion of the universe?,
   Q2:How long does it take light to travel from the moon to the surface of earth?,
   Q3:NA is the official abbreviation for which element?,
   Q4:Which of these planets does not have a satellite?,
   Q5=:An Astronomical Unit is the mean distance between which two celestial bodies?,
   
    



    document.getElementbyID().innerHTML =
    }
     var totalQuestions = 5;

        

    
        function SetAnswer(questionNumber, answerSelection) {
            userAnswers[questionNumber] = answerSelection;
    }

        function MarkIncorrectQuestions() {
            for(i = 1; i <= totalQuestions; i++) {
                if(answers[i] != userAnswers[i]) {
                    document.getElementById(i).className += "You lack basic understanding of the universe";
    }
    }
    }

        
    function GetScore() {
        var score = 0;
        for(i = 1; i <= totalQuestions; i++) {
            if(userAnswers[i] == answers[i])
                score++;
        }
        return score;
    }

    
    function ApplyDefaultQuestionStyles() {
        for(i = 1; i <= totalQuestions; i++) {
            if(i % 2 == 0) {
                document.getElementById(i).className = "question";
            }
            else {
                document.getElementById(i).className = "question odd";
            }
        }
    }

  
    function CheckQuiz() {
        ApplyDefaultQuestionStyles();
        var totalQuestions = '5';
        var score = GetScore();
        MarkIncorrectQuestions();
        alert("You scored: " + score + " out of " + totalQuestions + ".");
        
    }

    function result(score,totalQuestions){
        document.write("Score" +score);
    }
    }