/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore = question1Score(q1Input) + question2Score(q2Input) + question3Score(q3Input);
        var score1 = question1Score(q1Input);
        
        
        
        
function question1Score(q1Input){
        if (q1Input == "coding" || q1Input == "reading") {
             return 9;
         }else{
        return -2;
        }
}

function question2Score(q2Input){
        if (q2Input == "Google") {
             return 9;
         }else{
        return 8;
        }
}

function question3Score(q3Input){
        if (q3Input == "Not so Creative") {
             return 9;
         }else if(q3Input == "Creative" || q3Input =="Very Creative"){
            return 5;
        }else{
            return 0;
        }
}
        
});
   
   