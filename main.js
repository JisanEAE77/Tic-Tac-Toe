var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;
var seven = 7;
var eight = 8;
var nine = 9;
var TicTacToe = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];
var hit = "X";
var player = 0;
var counter = 0;
var gameover = false;
var player1 = prompt("Enter the name of Player 1:");
var player2 = prompt("Enter the name of player 2:");

document.getElementById("player").innerHTML = "Player 1: " + player1 + "<br>" + "Player 2: " + player2;

function play1() {
    if (!gameover) {

        if (TicTacToe[0] === "0") {
            counter++;
            var span = document.getElementById("one").innerHTML = hit;
            one = hit;
            TicTacToe[0] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"
            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }

                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;
            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play2() {
    if (!gameover) {


        if (TicTacToe[1] === "0") {
            counter++;
            var span = document.getElementById("two").innerHTML = hit;
            two = hit;
            TicTacToe[1] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play3() {
    if (!gameover) {


        if (TicTacToe[2] === "0") {
            counter++;
            var span = document.getElementById("three").innerHTML = hit;
            three = hit;
            TicTacToe[2] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play4() {
    if (!gameover) {


        if (TicTacToe[3] === "0") {
            counter++;
            var span = document.getElementById("four").innerHTML = hit;
            four = hit;
            TicTacToe[3] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }
        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play5() {
    if (!gameover) {


        if (TicTacToe[4] === "0") {
            counter++;
            var span = document.getElementById("five").innerHTML = hit;
            five = hit;
            TicTacToe[4] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play6() {
    if (!gameover) {


        if (TicTacToe[5] === "0") {
            counter++;
            var span = document.getElementById("six").innerHTML = hit;
            six = hit;
            TicTacToe[5] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play7() {
    if (!gameover) {


        if (TicTacToe[6] === "0") {
            counter++;
            var span = document.getElementById("seven").innerHTML = hit;
            seven = hit;
            TicTacToe[6] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play8() {
    if (!gameover) {


        if (TicTacToe[7] === "0") {
            counter++;
            var span = document.getElementById("eight").innerHTML = hit;
            eight = hit;
            TicTacToe[7] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }


        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function play9() {
    if (!gameover) {


        if (TicTacToe[8] === "0") {
            counter++;
            var span = document.getElementById("nine").innerHTML = hit;
            nine = hit;
            TicTacToe[8] = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "2nd Player's Turn!"

            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            alert("The box is already played, try again in a empty box");
        }

        var result = [[one, two, three], [four, five, six], [seven, eight, nine], [one, four, seven], [two, five, eight], [three, six, nine], [one, five, nine], [three, five, seven]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }
                document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("result").innerHTML = player + " has won the game";

                return 0;

            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("move").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("result").innerHTML = "Match Drawn, No one has won the game";

        }
    }
}

function restart() { 
    document.querySelectorAll(td).innerHTML = "<span class='hiodden'>0</span>";
}