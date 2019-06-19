var enemies = [];
var totalhealth = [];
window.onload = function() {
    var levels = getCookie("levels");
    if (levels == "") {
        var d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        setCookie("levels" , 1 , d);
        
        
    } else {
        init(parseInt(levels));
    }

    

}

function init(levels) {
    enemies = LevelFactory.createLevel(levels);
    totalhealth = [];
    for (i = 0; i < enemies.length; i++) {
        document.getElementsByClassName("enemyPvEImg")[i].src = "/public/assets/img/" + enemies[i].name + ".png";
        document.getElementById("enemycb" + i).setAttribute("value" , enemies[i].name);
        var label = document.createElement("label");
        label.innerText = enemies[i].name;
        label.style.color = "white"
        document.getElementsByClassName("enemyPvEBox")[i].appendChild(label);
        totalhealth.push(enemies[i].hp);

         //attach health to healthbars
         var hpText = document.createElement("p");
         hpText.textContent = enemies[i].hp;
         hpText.classList.add("hpTextEnemy");
         hpText.style.marginTop = "15px";
         document.getElementsByClassName("enemy" + (i+1) + "HpBar")[0].appendChild(hpText);
    }

}

function setCookie(cname, cvalue, d) {
    document.cookie = cname + "=" + cvalue + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}