var navlinks = document.getElementById("navlinks");
function show() {
    navlinks.style.right = "0px";
}
function hide() {
    navlinks.style.right = "-200px"
}

var i = 0;
function readmore() {
    if (!i) {
        document.getElementById("more").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("knowmore").innerHTML = "Know Less";
        i = 1;


    }
    else {
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("knowmore").innerHTML = "know More";
        i = 0;
    }
}


function hover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
    element.setAttribute('src',);
}

// ---------LOGIN AND REGISTRATION----------
// 1st login form
var loginform = document.getElementById("loginform");
var registrationform = document.getElementById("registrationform");
var indicator = document.getElementById("indicator");

function register() {

    registrationform.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(-100px)";
    indicator.style.transform = "translateX(140px)";

}
function login() {
    registrationform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(280px)"
    indicator.style.transform = "translateX(20px)";
}
//





//second login form
var loginform2 = document.getElementById("loginform2");
var registrationform2 = document.getElementById("registrationform2");
var indicator2 = document.getElementById("indicator2");

function registerr() {

    registrationform2.style.transform = "translateX(0px)";
    loginform2.style.transform = "translateX(-100px)";
    indicator2.style.transform = "translateX(140px)";

}
function loginn() {
    registrationform2.style.transform = "translateX(300px)";
    loginform2.style.transform = "translateX(280px)"
    indicator2.style.transform = "translateX(20px)";
}



//dark mode
var logo = getElementById("logo");
var icon = getElementById("iconn")
function daark() {
    if (logo = document.body.classList.toggle(":root")) {
        logo = document.body.classList.toggle("dark")
        alert(`changed the landing page theme to dark theme`)
        icon.src = "images/jblogo1.png"

    }
    else if (logo = document.body.classList.toggle("dark")) {
        (logo = document.body.classList.toggle(":root"))
        alert(`changed the landing page theme to normal theme`)
        icon.src = "images/jb logo.png"

    }
    else {
        alert(`changed the landing page theme to normal theme`)
    }


}



