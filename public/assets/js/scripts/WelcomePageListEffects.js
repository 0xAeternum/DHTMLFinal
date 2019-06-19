$(document).ready(function() {


    $('.pvp-list-item').on('click', function(e) {
        if ($(".PvPText").is(":visible")) {
            $(".PvPText").hide();
        } else  {
            $(".PvPText").show();
        }
     
    });

    $('.dungeon-list-item').on('click', function(e) {
        if ($(".DungeonText").is(":visible")) {
            $(".DungeonText").hide();
        } else  {
            $(".DungeonText").show();
        }
     
    });

});
