var correct=0;
var wrong=0;
var unanswered=0;
var answers = [];
var intervalId;
var clockRunning=false;
var time=120;
var addHtml;

function count() {
  //  count down timer for the game
  time--;

  if (time > 0) {
    var timeDisplay = timeConverter(time);
    console.log(timeDisplay);
    $("#timer").html("Time remaining: " + timeDisplay);
  } else {
    finalTotals();
  }
}


function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function loadHeader() {
  console.log("header loading...");
// load the jumbotron - love the jumbotron
  addHtml = $("<h1>");
  addHtml.text("MLS Trivia");
  addHtml.addClass("text-center tc-text-center");
  $("#jumbo").html(addHtml);

  addHtml = $("<h3>");
  addHtml.text("(The league, not the realtors)");
  addHtml.addClass("text-center tc-text-center");
  $("#jumbo").append(addHtml);

  addHtml=$("<div>");
  addHtml.attr("id","timer");
  addHtml.text("Time remaining: " + timeConverter(time));
  $("#jumbo").append(addHtml);
  
  $("#jumbo").append("<hr>");
  
}

function loadDoneButton() {
console.log("loading done button...");
  // load a button for "done"
  addHtml=$("<div>");
  addHtml.attr("id","endbutton");
  $("#jumbo").append(addHtml);

  addHtml=$("<button>");
  addHtml.attr("id","done");
  addHtml.text("DONE");
  $("#endbutton").append(addHtml);
}


function loadStartButton(start) {
console.log("loading start button...");
  // load a button for "start"
  var start;
  addHtml=$("<div>");
  addHtml.attr("id","buttons");
  $("#jumbo").append(addHtml);

  addHtml=$("<button>");
  addHtml.attr("id","start");
  addHtml.text(start);
  $("#buttons").append(addHtml);
}


function loadScreen () {
  // load the basic screen structure for  the game
  console.log("screen loading...");
  addHtml= $("<div>");
  addHtml.addClass("qform");
  $("#jumbo").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q0form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q1form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q2form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q3form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q4form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q5form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q6form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q7form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q8form");
  $(".qform").append(addHtml);

  addHtml= $("<form>");
  addHtml.attr("action"," ");
  addHtml.attr("id","q9form");
  $(".qform").append(addHtml);
}

function loadQuestions() {
  console.log("questions loading...")
// load the questions 1 - 10
// holy shit this is a lot of lines - look into loading this in less lines  
// Question 1 ===================================================
  var addQuestion="<b>1. What year did the MLS begin play?</b><br>";
  $("#q0form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> 1994 ";
  var addInput2= "<input type='radio' name='Q1' value='1'> 1996 ";
  var addInput3= "<input type='radio' name='Q1' value='0'> 2001 ";
  var addInput4= "<input type='radio' name='Q1' value='0'> 2010 ";
  $("#q0form").append(addInput1);
  $("#q0form").append(addInput2);
  $("#q0form").append(addInput3);
  $("#q0form").append(addInput4);
      
//================== end question 1 ==========================

// Question 2 ===================================================
  var addQuestion="<br><b>2. How many teams were in the league the first season?</b><br>";
  $("#q1form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> 8 ";
  var addInput2= "<input type='radio' name='Q1' value='1'> 10 ";
  var addInput3= "<input type='radio' name='Q1' value='0'> 12 ";
  var addInput4= "<input type='radio' name='Q1' value='0'> 14 ";
  $("#q1form").append(addInput1);
  $("#q1form").append(addInput2);
  $("#q1form").append(addInput3);
  $("#q1form").append(addInput4);
      
//================== end question 2 ==========================

// Question 3 ===================================================
  var addQuestion="<br>3. What team won the first MLS cup title?<br>";
  $("#q2form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> Chicago Fire ";
  var addInput2= "<input type='radio' name='Q1' value='1'> DC United ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Miami Fusion ";
  var addInput4= "<input type='radio' name='Q1' value='0'> Phila Union ";
  $("#q2form").append(addInput1);
  $("#q2form").append(addInput2);
  $("#q2form").append(addInput3);
  $("#q2form").append(addInput4);
      
//================== end question 3 ==========================

// Question 4 ===================================================
  var addQuestion="<br>4. Which team no longer exists in the MLS?<br>";
  $("#q3form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> MetroStars ";
  var addInput2= "<input type='radio' name='Q1' value='1'> Mutiny ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Revolution ";
  var addInput4= "<input type='radio' name='Q1' value='0'> Earthquakes ";
  $("#q3form").append(addInput1);
  $("#q3form").append(addInput2);
  $("#q3form").append(addInput3);
  $("#q3form").append(addInput4);
      
//================== end question42 ==========================

// Question 5 ===================================================
  var addQuestion="<br>5. What is the name of the NY RedBulls first supporters club?<br>";
  $("#q4form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> Sons of Ben ";
  var addInput2= "<input type='radio' name='Q1' value='1'> Empire Supporters Club ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Barra Brava ";
  var addInput4= "<input type='radio' name='Q1' value='0'> The Third Rail ";
  $("#q4form").append(addInput1);
  $("#q4form").append(addInput2);
  $("#q4form").append(addInput3);
  $("#q4form").append(addInput4);
      
//================== end question 5 ==========================

// Question 6 ===================================================
  var addQuestion="<br>6. What team has the most MLS Cup championship losses?<br>";
  $("#q5form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> DC United ";
  var addInput2= "<input type='radio' name='Q1' value='0'> SportingKC ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Dallas FC ";
  var addInput4= "<input type='radio' name='Q1' value='1'> Revolution ";
  $("#q5form").append(addInput1);
  $("#q5form").append(addInput2);
  $("#q5form").append(addInput3);
  $("#q5form").append(addInput4);
      
//================== end question 6 ==========================

// Question 7 ===================================================
  var addQuestion="<br>7. Who is the MLS all-time leading goal scorer?<br>";
  $("#q6form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> Clint Mathis ";
  var addInput2= "<input type='radio' name='Q1' value='0'> Tab Ramos ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Thierry Henry ";
  var addInput4= "<input type='radio' name='Q1' value='1'> Landon Donovan ";
  $("#q6form").append(addInput1);
  $("#q6form").append(addInput2);
  $("#q6form").append(addInput3);
  $("#q6form").append(addInput4);
      
//================== end question 7 ==========================

// Question 8 ===================================================
  var addQuestion="<br>8. Who is the commissioner of the MLS?<br>";
  $("#q7form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> Bob Bradley ";
  var addInput2= "<input type='radio' name='Q1' value='0'> Landon Donovan ";
  var addInput3= "<input type='radio' name='Q1' value='1'> Don Garber ";
  var addInput4= "<input type='radio' name='Q1' value='0'> Bruce Arena ";
  $("#q7form").append(addInput1);
  $("#q7form").append(addInput2);
  $("#q7form").append(addInput3);
  $("#q7form").append(addInput4);
      
//================== end question 8 ==========================

// Question 9 ===================================================
  var addQuestion="<br>9. Who set the MLS record for most goals in a game in August 2000?<br>";
  $("#q8form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> Diego Serna ";
  var addInput2= "<input type='radio' name='Q1' value='0'> Raul Diaz Arce ";
  var addInput3= "<input type='radio' name='Q1' value='1'> Clint Mathis ";
  var addInput4= "<input type='radio' name='Q1' value='0'> Mamadou Diallo ";
  $("#q8form").append(addInput1);
  $("#q8form").append(addInput2);
  $("#q8form").append(addInput3);
  $("#q8form").append(addInput4);
      
//================== end question 9 ==========================

// Question 10 ===================================================
  var addQuestion="<br>10. Which MLS team was the 1st to win the U.S. Open Cup and MLS Cup in the same year?<br>";
  $("#q9form").html(addQuestion);

  var addInput1= "<input type='radio' name='Q1' value='0'> LA Galaxy ";
  var addInput2= "<input type='radio' name='Q1' value='1'> DC United ";
  var addInput3= "<input type='radio' name='Q1' value='0'> Chicago Fire ";
  var addInput4= "<input type='radio' name='Q1' value='0'> SportingKC ";
  $("#q9form").append(addInput1);
  $("#q9form").append(addInput2);
  $("#q9form").append(addInput3);
  $("#q9form").append(addInput4);
      
//================== end question 10 ==========================

}

function startGame () {
  if (!clockRunning) {
    intervalId = setInterval(count,1000);
    clockRunning = true;
  }
}

function stopGame() {
  clearInterval(intervalId);
  clockRunning=false;
}

function finalTotals () {
// when timer runs out or user presses done
// load up the final totals and prepare to 
// rerun the game
  for (var i=0; i<answers.length; i++) {
    if (answers[i] === "1") {
      correct++;
    } else if (answers[i] === "0") {
      wrong++;
    } else {
      unanswered++;
    }
  }

  // load the header 
  loadHeader();

  //load the done screen with totals
  addHtml= $("<div>");
  addHtml.addClass("qform");
  $("#jumbo").append(addHtml);
  addHtml= $("<h2>");
  addHtml.text("All Done!");
  $(".qform").html(addHtml);
  addHtml= $("<p>");
  addHtml.text("Correct Answers: " + correct);
  $(".qform").append(addHtml);
  addHtml= $("<p>");
  addHtml.text("Incorrect Answers: " + wrong);
  $(".qform").append(addHtml);
  addHtml= $("<p>");
  addHtml.text("Unanswered: " + unanswered);
  $(".qform").append(addHtml);
  addHtml= $("<hr>");
  $(".qform").append(addHtml);
  loadStartButton("Restart");
  //stop the interval timer
  stopGame();

  // wait to see if the user wants to start again
  $("#start").click(function() {
    time=120;
    correct=0;
    wrong=0;
    unanswered=0;
    runGame();
    console.log("start clicked...");
  });
}

function doQuestions() {
  for (var i= 0; i<10; i++) {
    answers[i]="X";
  }
  $("#q0form").click(function() {
    answers[0]=q0form.Q1.value;
console.log(answers);
  });
  $("#q1form").click(function() {
    answers[1]=q1form.Q1.value;
console.log(answers);
  });
  $("#q2form").click(function() {
    answers[2]=q2form.Q1.value;
console.log(answers);
  });
  $("#q3form").click(function() {
    answers[3]=q3form.Q1.value;
console.log(answers);
  });
  $("#q4form").click(function() {
    answers[4]=q4form.Q1.value;
console.log(answers);
  });
  $("#q5form").click(function() {
    answers[5]=q5form.Q1.value;
console.log(answers);
  });
  $("#q6form").click(function() {
    answers[6]=q6form.Q1.value;
console.log(answers);
  });
  $("#q7form").click(function() {
    answers[7]=q7form.Q1.value;
console.log(answers);
  });
  $("#q8form").click(function() {
    answers[8]=q8form.Q1.value;
console.log(answers);
  });
  $("#q9form").click(function() {
    answers[9]=q9form.Q1.value;
console.log(answers);
  });
console.log(answers);
};

// all the work to run the game-
// setup the header, list the questions
// run the interval timer 
function runGame() {
    loadHeader();
    loadScreen();
    loadQuestions();
    loadDoneButton();
    startGame();
    doQuestions();
    $("#done").click(function() {
      finalTotals();
    })
};

//load the first screen for starting the game 
// this is where things really start
  loadHeader();
  loadStartButton("Start");

//run the game if start is pressed
  window.onload = function() {
    console.log("waiting on click?...");
  $("#start").click(function() {
    runGame();
  });
};
