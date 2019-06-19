$(document).ready(function() {

    $("#enemycb0").change(function() {
        if(this.checked) {
            document.getElementById("enemycb1").checked = false;
            document.getElementById("enemycb2").checked = false;
        }
        if ($(this).val() == "empty") {
            this.checked = false;
        }
    });

    $("#enemycb1").change(function() {
        if(this.checked) {
            document.getElementById("enemycb0").checked = false;
            document.getElementById("enemycb2").checked = false;
        }
        if ($(this).val() == "empty") {
            this.checked = false;
        }
    });

    $("#enemycb2").change(function() {
        if(this.checked) {
            document.getElementById("enemycb0").checked = false;
            document.getElementById("enemycb1").checked = false;
        }
        if ($(this).val() == "empty") {
            this.checked = false;
        }
    });
    
});