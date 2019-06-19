document.addEventListener('DOMContentLoaded', function () {

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    var playerhealth = player.hp;

    $("#playerButton1").click(function () {

        if (document.getElementById("enemycb0").checked) {
            enemies[0].hp = enemies[0].hp - hero.spell1Dmg;
            $(".enemy1HpBar").css("width", percentage(enemies[0].hp, totalhealth[0]) + '%');

        } else if (document.getElementById("enemycb1").checked) {
            enemies[1].hp = enemies[1].hp - hero.spell1Dmg;
            $(".enemy2HpBar").css("width", percentage(enemies[1].hp, totalhealth[1]) + '%');

        } else if (document.getElementById("enemycb2").checked) {
            enemies[2].hp = enemies[2].hp - hero.spell1Dmg;
            $(".enemy3HpBar").css("width", percentage(enemies[2].hp, totalhealth[2]) + '%');

        }

        if (enemies.length == 1) {
            playerhealth = playerhealth - enemies[0].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 2) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 3) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            playerhealth = playerhealth - enemies[2].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0 && enemies[2].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    console.log("Yes");
                    socket.emit("PvEWon", player.userID);
                });

            }
        }

    });

    $("#playerButton2").click(function () {

        if (document.getElementById("enemycb0").checked) {
            enemies[0].hp = enemies[0].hp - hero.spell2Dmg;
            $(".enemy1HpBar").css("width", percentage(enemies[0].hp, totalhealth[0]) + '%');

        } else if (document.getElementById("enemycb1").checked) {
            enemies[1].hp = enemies[1].hp - hero.spell2Dmg;
            $(".enemy2HpBar").css("width", percentage(enemies[1].hp, totalhealth[1]) + '%');
        } else if (document.getElementById("enemycb2").checked) {
            enemies[2].hp = enemies[2].hp - hero.spell2Dmg;
            $(".enemy3HpBar").css("width", percentage(enemies[2].hp, totalhealth[2]) + '%');

        }

        if (enemies.length == 1) {
            playerhealth = playerhealth - enemies[0].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 2) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 3) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            playerhealth = playerhealth - enemies[2].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0 && enemies[2].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        }

    });

    $("#playerButton3").click(function () {
        console.log("ye");
        if (document.getElementById("enemycb0").checked) {
            enemies[0].hp = enemies[0].hp - hero.spell3Dmg;
            $(".enemy1HpBar").css("width", percentage(enemies[0].hp, totalhealth[0]) + '%');

        } else if (document.getElementById("enemycb1").checked) {
            enemies[1].hp = enemies[1].hp - hero.spell3Dmg;
            $(".enemy2HpBar").css("width", percentage(enemies[1].hp, totalhealth[1]) + '%');

        } else if (document.getElementById("enemycb2").checked) {
            enemies[2].hp = enemies[2].hp - hero.spell3Dmg;
            $(".enemy3HpBar").css("width", percentage(enemies[2].hp, totalhealth[2]) + '%');

        }

        if (enemies.length == 1) {
            playerhealth = playerhealth - enemies[0].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 2) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        } else if (enemies.length == 3) {
            playerhealth = playerhealth - enemies[0].dmg;
            playerhealth = playerhealth - enemies[1].dmg;
            playerhealth = playerhealth - enemies[2].dmg;
            if (playerhealth <= 0) {
                alert("Lost");
                $("#playerButton1").prop("disabled", true);
                $("#playerButton2").prop("disabled", true);
                $("#playerButton3").prop("disabled", true);
            }
            $(".player1HpBar").css("width", percentage(playerhealth, player.hp));
            if (enemies[0].hp < 0 && enemies[1].hp < 0 && enemies[2].hp < 0) {
                alert("won");

                var d = new Date();
                d.setFullYear(d.getFullYear() + 1);
                var value = parseInt(getCookie("levels"));
                value++;
                setCookie("levels", value, d);

                var socket = io();

                socket.on("connect", function () {
                    socket.emit("PvEWon", player.userID);
                });

            }
        }

    });
}, false);


