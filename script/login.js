var username = "helle@email.com"
var password = "1234"
var customerName = document.querySelector(".customer-name")
var customerEmail = document.querySelector(".customer-email")
var customerPassword = document.querySelector(".customer-password")
var customerAdress = document.querySelector(".customer-adress")


function loginFunc() {

    if (username == document.getElementById("username-input").value && password == document.getElementById("password-input").value) {
        customerName.style.display = "block"
        customerEmail.value = "helle@email.com"
        customerPassword.value = "****"
        customerAdress.value = "Nipponvej 82"
        customerName.value = "Helle Jensen"
    } else {
        alert("Forkert username eller password")
    }
}



var customerNameOpret = document.querySelector(".customer-name-opret")
var customerEmailOpret = document.querySelector(".customer-email-opret")
var customerPasswordOpret = document.querySelector(".customer-password-opret")
var customerAdressOpret = document.querySelector(".customer-adress-opret")




function opretFunc() {

    var customerNameOpretValue = customerNameOpret.value
    var customerEmailOpretValue = customerEmailOpret.value
    var customerPasswordOpretValue = customerPasswordOpret.value
    var customerAdressOpretValue = customerAdressOpret.value

    localStorage.setItem("email-opret", customerEmailOpretValue)
    localStorage.setItem("name-opret", customerNameOpretValue)
    localStorage.setItem("adress-opret", customerAdressOpretValue)
    localStorage.setItem("password-opret", customerPasswordOpretValue)

    window.location.href = "checkoutout.html"

}


if (localStorage.length > 0) {

    customerName.style.display = "block"
    customerEmail.value = localStorage.getItem("email-opret")
    customerName.value = localStorage.getItem("name-opret")
    customerAdress.value = localStorage.getItem("adress-opret")
    customerPassword.value = localStorage.getItem("password-opret")
}

function buyFunc() {
    if (document.querySelector("#ccnum").value.length > 0 & document.querySelector("#cvv").value.length > 0 & document.querySelector("#expire").value.length > 0 & document.querySelector(".customer-adress").value.length > 0 & document.querySelector(".customer-name").value.length > 0) {
        document.location.href = "lastone.html"
    } else {
        alert("Udfyld venligst alle felter")
    }
}