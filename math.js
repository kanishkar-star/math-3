function addUser(){
    player_1_name = document.getElementById("player1name_input").value;
    player_2_name = document.getElementById("player2name_input").value;
    
    localStorage.setItem("Player 1 name", player_1_name);
    localStorage.setItem("Player 2 name", player_2_name);

    window.location = "math_game.html";
}