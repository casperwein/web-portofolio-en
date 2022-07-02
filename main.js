// burger events
var hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
    var navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

// form registrations
var submit = document.querySelector(".button");
submit.onclick = function formValidation() {
    var name = document.forms["message_form"]["name"].value;
    var email = document.forms["message_form"]["email"].value;
    var phoneNumber = document.forms["message_form"]["phone_number"].value;
    var message = document.forms["message_form"]["message"].value;

    if (name == "") {
        alert("Nama harus diisi")
        return false
    }

    if (email == "") {
        alert("Email harus diisi")
        return false
    }

    if (phoneNumber == "") {
        alert("Nomor Handphone harus diisi")
        return false
    }

    if (message == "") {
        alert("Pesan harus diisi")
        return false
    }

    if (name != "" && email != "" && phoneNumber != "" && message != "") {
        alert("Terimakasih! Pesan Terkirim")
            // openPopup()
    }
}


// text typing animation
var string = "Eggan Nachson";
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("portof_name").innerHTML += array.shift()
    } else {
        clearTimeout(timer)
    }
    loopTimer = setTimeout('frameLooper()', 150)
}

frameLooper()


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("nav").style.padding = "20px";
        document.getElementById("down").style.fontSize = "20px";
    } else {
        document.getElementById("nav").style.padding = "20px 0";
        document.getElementById("down").style.fontSize = "10px";
    }
}