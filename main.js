var hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
    var navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

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
        alert('Pesan Terkirim');
    }
}