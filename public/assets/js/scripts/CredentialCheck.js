$("#pwdReg").blur(function() {

    if ($(this).val().length <= 6 || !(/[a-z]/.test($(this).val())) || !(/[A-Z]/.test($(this).val()) ) ) {

        //check if error message was displayed before
        //to avoid printing error msg again and again
        if (document.getElementsByClassName("pwdWarning")[0] != null) {
            return;
        }

        //create dom element
        var msg = document.createElement("p");
        msg.className = "bg-danger text-white pwdWarning";
        msg.innerHTML = "<b> <ul>   <li>Password must be longer than 6 characters</li> <li>Password must contain atleast one uppercase letter</li> " + 
            " <li> Password must contain atleast one number</li>  </ul>   </b>";

        //put element below pwd form
        $("#pwdReg").after(msg);

        //disable buttons when pwd conditions arent met
        $("#regBtn").attr("disabled" , true);

        //when email and pwd meet conditions
        //remove warnings and unlock button
    }  else if ($(this).val().length > 6 && (/[a-z]/.test($(this).val())) && (/[A-Z]/.test($(this).val()) ) && $("#emailReg").val().includes("@")){

        removeWarning("pwdWarning");

        $("#regBtn").attr("disabled" , false);

        //when only pwd meets conditions remove
        //pwd warning but keep button locked
    } else if ($(this).val().length > 6 && (/[a-z]/.test($(this).val())) && (/[A-Z]/.test($(this).val()) ) && !$("#emailReg").val().includes("@")) {

        removeWarning("pwdWarning");
    }
});

$("#emailReg").blur(function() {

    if (!$(this).val().includes("@") ) {
        //check if error message was displayed before
        //to avoid printing error msg again and again
        if (document.getElementsByClassName("emailWarning")[0] != null) {
            return;
        }

        //create dom element
        var msg = document.createElement("p");
        msg.className = "bg-danger text-white emailWarning";
        msg.innerHTML = "<b> <ul>   <li>Invalid email format</li>  </ul>   </b>";
            
        //put element below pwd form
        $("#emailReg").after(msg);

        //disable buttons when pwd conditions arent met
        $("#regBtn").attr("disabled" , true);
    
        //when email and password meet the conditions
        //unlock the button
    } else if ($("#pwdReg").val().length > 6 && (/[a-z]/.test($("#pwdReg").val())) && (/[A-Z]/.test($("#pwdReg").val()) ) && $(this).val().includes("@")){

        removeWarning("emailWarning");

        $("#regBtn").attr("disabled" , false);
    
        //when email meets the conditions but the
        //password doesnt, remove only email warning
    } else if ($("#pwdReg").val().length <= 6 || !(/[a-z]/.test($("#pwdReg").val())) || !(/[A-Z]/.test($("#pwdReg").val()) )  && $(this).val().includes("@")) {
       
        removeWarning("emailWarning");

    }
});

function removeWarning(identifier) {
    if (document.getElementsByClassName(identifier)[0] != null) {

        document.getElementsByClassName(identifier)[0].parentNode.removeChild(document.getElementsByClassName(identifier)[0]);

    }
}