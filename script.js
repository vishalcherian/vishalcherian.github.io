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

//project screen
var projects = document.getElementById("projects-screen");

//logos 
var lightLogo = document.getElementById("light-screen");
var darkLogo = document.getElementById("dark-screen");

//index for desktop and mobile
var index = document.querySelector("#desktopIndex");
var indexMobile = document.querySelector("#mobileIndex");
var change = false; //for determining when to change 

//distance of projects screen to the top
var stickPoint = getDistance();

function getDistance() {
  var topDist = projects.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    
    if ( (distance <= 0) && !change) {
        //if current logo and index are white background version
        //change logo to white version with same characteristics
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'block';
        //change index to inverted version
        index.style.color = 'white';
        indexMobile.style.color = 'white';
        change = true;
    } else if (change && (offset <= stickPoint)){
        //if current logo/index are black background version
        //change logo back to black version
        darkLogo.style.display = 'none';
        lightLogo.style.display = 'block';
        //change index to inverted version
        index.style.color = 'black';
        indexMobile.style.color = 'black';
        change = false;
    }
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
    
    $(".index-mobile").click(function() {    
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
    
    $(".back-mobile").click(function() {    
        $(".nav-header").fadeOut(300);
        $(".nav-ul").fadeOut(300);
        $(".nav-footer").fadeOut(300);
        $(".intro-header").fadeIn("slow");
        $(".intro-footer").fadeIn("slow");
    });
});

