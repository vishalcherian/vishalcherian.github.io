/* Opens navigation when someone clicks on the INDEX button */
function openNav() {
    document.getElementById("navigation").style.width = "100%";
}

/* Closes navigation when someone clicks on the BACK button */
function closeNav() {
    document.getElementById("navigation").style.width = "0%";
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// all custom jQuery will go here
$(document).ready(function() {
    $(".index").click(function() {    
        $(".intro-header").fadeOut(200);
        $(".intro-footer").fadeOut(200);
        $(".nav-header").fadeIn("slow");
        $(".nav-footer").fadeIn("slow");
        $(".nav-ul").delay(700).fadeIn(400);
    });

    $(".back").click(function() {    
        $(".nav-header").fadeOut(300);
        $(".nav-ul").fadeOut(300);
        $(".nav-footer").fadeOut(300);
        $(".intro-header").fadeIn("slow");
        $(".intro-footer").fadeIn("slow");
    });
});

