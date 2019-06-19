$(".classchoicebutton").click(function () {

    switch ($(this).text()) {
        case "Warrior":
            $("#classimg").attr("src" , "/public/assets/img/Warrior.png");
            $("#selected_class").attr("value" , "Warrior");
            break;
        case "Shooter":
            $("#classimg").attr("src" , "/public/assets/img/Shooter.png");
            $("#selected_class").attr("value" , "Shooter");
            break;
        case "Mage":
            $("#classimg").attr("src" , "/public/assets/img/mage.png");
            $("#selected_class").attr("value" , "Mage");
            break;
        case "Warlock":
            $("#classimg").attr("src" , "/public/assets/img/warlock.png");
            $("#selected_class").attr("value" , "Warlock");
            break;

    }

});