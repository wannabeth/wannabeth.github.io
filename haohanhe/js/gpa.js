var scores= [];
var hours = [];

window.onload = function () {
	$("add").onclick = addScore;                    
	$("display").onclick = displayScores ;
	$("calculate").onclick = displayResults ;
}
var $ = function (id) { return document.getElementById(id); }

var addScore = function(){
    var score = $("grades").value;
    var hour = $("hours").value;

    scores[scores.length] = parseFloat(score);
    hours[hours.length] = parseFloat(hour);
}

var displayResults = function(){
    var sum = 0;
    var highest_score;
    for(var i=0;i<scores.length;i++){
        sum = sum + scores[i];
        var average = parseFloat(sum) / parseFloat(scores.length);
        if(average > 90 && average<100){
            highest_score = "A";
            
        }
        else if(average > 80 && average < 89){
            highest_score = "B";
            
        }
        else if(average > 69 && average < 79){
            highest_score = "C";
            
        }
        else if(average > 60 && average < 69){
            highest_score = "D";
            
        }
        else{
            highest_score = "F";
            
        }
    }
    
    
    alert("<h2>Results</h2> <p> Average score = "+average+"</p><p>GPA = with a score of "+highest_score+"</p>");
    
}

var displayScores = function(){
    var html = "<h2>Scores</h2><tr><td><b>scores</b></td><td><b>hours</b></td></tr>"
    for(var i=0;i<scores.length;i++){
        html = html + "<tr><td>"+scores[i]+"</td><td>"+hours[i]+"</td></tr>";
        
    }
    $("scores_table").innerHTML = html;
}
