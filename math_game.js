
player_1 = localStorage.getItem("Player 1 name");
player_2 = localStorage.getItem("Player 2 name");
console.log(player_1);
console.log(player_2);

player1score = 0;
player2score = 0;

document.getElementById("player_1_name").innerHTML = player_1 + ":";
document.getElementById("player_2_name").innerHTML = player_2 + ":" ;

document.getElementById("player_1_score").innerHTML = player1score;
document.getElementById("player_2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question turn :" + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn :" + player_2;

function send(){
    number1 = document.getElementById("number1_question").value;
    number2 = document.getElementById("number2_question").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br> Answer = <input type = 'text' id='iput_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";

    row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_question").value = "";
    document.getElementById("number2_question").value = "";
}