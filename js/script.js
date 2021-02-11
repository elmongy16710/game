$(function() {
        var newYear = new Date(); 
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
    $('#defaultCountdown').countdown({until: newYear}); 
    
    $('#removeCountdown').click(function() { 
        var destroy = $(this).text() === 'Remove'; 
        $(this).text(destroy ? 'Re-attach' : 'Remove'); 
        $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear}); 
    });

    // Wow Js
    var wow = new WOW({
        mobile : false ,
    });
    wow.init()

    // validate form
    $('#footer-form').validate();
    $('#up-form').validate();

});
