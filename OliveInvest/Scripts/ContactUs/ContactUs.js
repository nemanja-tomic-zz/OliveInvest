$(document).ready(function () {
    setTimeout($('.contactForm ').fadeIn(100), 500);
});

$(document).on('click', '#contactSubmit', function () {
    if (validateForm()) {
        var model = {
            Name: $('#name').val(),
            Email: $('#email').val(),
            Phone: $('#phone').val(),
            Message: $('#message').val()
        };
        model = JSON.stringify(model);
        $.post("ContactUs/sendContactForm", { aoModel: model }, function (response) {
            alert(response);
        });
    }
});

function validateForm() {
    var lbReturnValue = true;
    var lsErrorMessage = "";

    var nameReg = /^[A-Za-z]+$/;
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var name = $('#name').val();
    var email = $('#email').val();
    var telephone = $('#phone').val();
    var message = $('#message').val();

    if (!nameReg.test(name)) {
        lsErrorMessage += "Invalid or empty name field.<br />";
        lbReturnValue = false;
    }
    if (!emailReg.test(email) || email == "") {
        lsErrorMessage += "Invalid or empty email field.<br />";
        //lbReturnValue = false;
    }
    if (message == "") {
        lsErrorMessage += "Invalid or empty message field.<br />";
        lbReturnValue = false;
    }

    $("#validationMessage").html(lsErrorMessage);

    return lbReturnValue;
}