function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}
/**
 * Player 1
 */
var remaining;
var execOnce = false;
player1turn = true;
//TODO: emit message in socket after each attack and update other client side
$("#player1Button1").click(function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && execOnce) {

            player1turn = false;
            //TODO: substract remaining hp by dmg
            remaining = remaining - players_arr[0].hero_class.spell1Dmg;
            console.log("player 1 ability 1 did " + players_arr[0].hero_class.spell1Dmg);

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });


        }
    }

});

$('#player1Button1').one("click", function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && !execOnce) {

            execOnce = true;
            remaining = players_arr[1].hp;

            player1turn = false;
            //TODO: substract remaining hp by dmg
            console.log("player 1 ability 1 did " + players_arr[0].hero_class.spell1Dmg);
            remaining = remaining - players_arr[0].hero_class.spell1Dmg;

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });

        }
    }

});

$("#player1Button2").click(function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && execOnce) {

            player1turn = false;
            //TODO: substract remaining hp by dmg
            remaining = remaining - players_arr[0].hero_class.spell2Dmg;
            console.log(players_arr[0].hero_class.spell2Dmg);

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });


        }
    }

});

$('#player1Button2').one("click", function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && !execOnce) {
            player1turn = false;
            execOnce = true;
            remaining = players_arr[1].hp;


            //TODO: substract remaining hp by dmg
            console.log(players_arr[0].hero_class.spell2Dmg);
            remaining = remaining - players_arr[0].hero_class.spell2Dmg;

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });

        }
    }

});

$("#player1Button3").click(function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && execOnce) {
            player1turn = false;
            //TODO: substract remaining hp by dmg
            remaining = remaining - players_arr[0].hero_class.spell3Dmg;
            console.log(players_arr[0].hero_class.spell3Dmg);

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });


        }
    }

});

$('#player1Button3').one("click", function () {
    if (socket.io.engine.id != players_arr[1].socketID) {
        if (player1turn && !execOnce) {
            player1turn = false;
            execOnce = true;
            remaining = players_arr[1].hp;

            //TODO: substract remaining hp by dmg
            console.log(players_arr[0].hero_class.spell3Dmg + "lol");
            remaining = remaining - players_arr[0].hero_class.spell3Dmg;

            if (remaining <= 0) {
                $(".player2HpBar").css("width", '0%');
            } else {
                $(".player2HpBar").css("width", percentage(remaining, players_arr[1].hp) + '%');
            }

            //emit turn over event of player 1 with the hp left of player 2 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_1", {
                hp: percentage(remaining, players_arr[1].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[1].socketID, userID: players_arr[0].userID, userID2: players_arr[1].userID
            });

        }

    }

});

/**
 * Player 2
 */
var execOnce2 = false;

$("#player2Button1").click(function () {

    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn && execOnce2) {

            player2turn = false;
            //TODO: substract remaining hp by dmg
            remaining2 = remaining2 - players_arr[1].hero_class.spell1Dmg;
            console.log("player 2 ability 1 did " + players_arr[1].hero_class.spell1Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));

            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });


        }
    }

});

$('#player2Button1').one("click", function () {

    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn && !execOnce2) {
            execOnce2 = true;
            player2turn = false;
            remaining2 = players_arr[0].hp;
            console.log("Remaining" + remaining2);

            //TODO: substract remaining hp by dmg
            remaining2 = remaining2 - players_arr[1].hero_class.spell1Dmg;
            console.log("player 2 ability 1 did " + players_arr[1].hero_class.spell1Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));

            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });

        }
    }

});


$("#player2Button2").click(function () {

    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn && execOnce2) {

            player2turn = false;
            //TODO: substract remaining hp by dmg
            remaining2 = remaining2 - players_arr[1].hero_class.spell2Dmg;
            console.log("player 2 ability 2 did " + players_arr[1].hero_class.spell2Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));
            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });


        }
    }

});

$('#player2Button2').one("click", function () {


    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn && !execOnce2) {
            execOnce2 = true;
            player2turn = false;
            remaining2 = players_arr[0].hp;

            //TODO: substract remaining hp by dmg
            console.log(players_arr[1].hero_class.spell2Dmg);
            remaining2 = remaining2 - players_arr[1].hero_class.spell2Dmg;
            console.log("player 2 ability 2 did " + players_arr[1].hero_class.spell2Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));
            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });

        }
    }

    //disable buttons after turn


});

$("#player2Button3").click(function () {

    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn && execOnce2) {

            player2turn = false;
            //TODO: substract remaining hp by dmg
            remaining2 = remaining2 - players_arr[1].hero_class.spell3Dmg;
            console.log("player 2 ability 3 did " + players_arr[1].hero_class.spell3Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));
            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });


        }
    }

});

$('#player2Button3').one("click", function () {

    if (socket.io.engine.id != players_arr[0].socketID) {
        if (player2turn) {
            console.log("hehe");
            execOnce2 = true;
            player2turn = false;
            remaining2 = players_arr[0].hp;


            //TODO: substract remaining hp by dmg
            console.log("player 2 ability 3 did " + players_arr[1].hero_class.spell3Dmg);
            console.log("Remaining after attack " + remaining2);
            console.log("Percentage " + percentage(remaining2, players_arr[0].hp));
            remaining2 = remaining2 - players_arr[1].hero_class.spell3Dmg;

            if (remaining2 <= 0) {
                $(".player1HpBar").css("width", '0%');
            } else {
                $(".player1HpBar").css("width", percentage(remaining2, players_arr[0].hp) + '%');
            }

            //emit turn over event of player 2 with the hp left of player 1 and the socket ids to compare them in backend to completely end the players turn
            socket.emit("turn_over_2", {
                hp: percentage(remaining2, players_arr[0].hp), socketID: socket.io.engine.id,
                socketID2: players_arr[0].socketID, userID: players_arr[1].userID, userID2: players_arr[0].userID
            });

        }
    }


});