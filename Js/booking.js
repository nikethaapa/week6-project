var a = document.getElementById("one");
var b = document.getElementById("two");
var c = document.getElementById("three");

var bookButtons = document.querySelectorAll(".book-btn");
var bookingForm = document.getElementById("booking-form");
var selectedTable = document.getElementById("selected-table");
var submit = document.getElementById("submit");

var currentBookedButton = null;

bookButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var tableName = button.getAttribute("data-table");
        selectedTable.value = tableName;
        bookingForm.classList.remove("hidden");
        bookingForm.scrollIntoView({ behavior: "smooth" });
        currentBookedButton = button;
    });
});

submit.addEventListener("click", function (event) {
    event.preventDefault();

    var nameRegex = /^[a-zA-Z ]+$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var phoneRegex = /^\d{10}$/;

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");

    var validate = true;

    if (nameRegex.test(name.value) == false) {
        document.querySelector(".nameerror").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".nameerror").style.display = "none";
    }

    if (emailRegex.test(email.value) == false) {
        document.querySelector(".emailerror").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".emailerror").style.display = "none";
    }

    if (phoneRegex.test(phone.value) == false) {
        document.querySelector(".phoneerror").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".phoneerror").style.display = "none";
    }

    if (validate == true) {
        alert("Your Table Has Been Booked Successfully");

        if (currentBookedButton) {
            currentBookedButton.textContent = "Not Available";
            currentBookedButton.classList.remove("bg-black/80", "hover:bg-black", "cursor-pointer", "book-btn");
            currentBookedButton.classList.add("bg-red-400", "cursor-not-allowed");
            currentBookedButton.disabled = true;
            currentBookedButton.removeAttribute("data-table");
        }

        bookingForm.classList.add("hidden");
        document.querySelector("#booking-form form").reset();
        selectedTable.value = "";
    }
});

a.addEventListener("click", function () {
    b.classList.toggle("translate-x-full");
});

c.addEventListener("click", function () {
    b.classList.toggle("translate-x-full");
});
