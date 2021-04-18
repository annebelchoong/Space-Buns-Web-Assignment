var fullName = document.getElementById("name")
var email = document.getElementById("email")
var phoneNumber = document.getElementById("phoneNumber")
var subject = document.getElementById("subject")
var message = document.getElementById("message")

function validate(email) {
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
}


function submitButton() {
    if (
        fullName.value == ""
        || email.value == ""
        || phoneNumber.value == ""
        || subject.value == ""
        || message.value == ""
    ) {
        alert("Please fill in all the fields given. ")
    }
    else {

    }


}
