var knapEnPerson = document.querySelector('#pers1')

var knapToPersoner = document.querySelector('#pers2')

var prisEngangs = document.getElementById("engangspris")

var prisAbonnement = document.querySelector('#abonnementspris')

function enPersonValgt1() {
    knapEnPerson.style.backgroundColor = "#413F45";
    knapEnPerson.style.color = "#ffffff";
    knapToPersoner.style.backgroundColor = "#ffff";
    knapToPersoner.style.color = "#413f45";
    prisEngangs.innerText = "409 kr";
    prisAbonnement.innerText = "347 kr"

}

function toPersonerValgt1() {
    knapEnPerson.style.backgroundColor = "#ffff";
    knapEnPerson.style.color = "#413f45";
    knapToPersoner.style.backgroundColor = "#413f45";
    knapToPersoner.style.color = "#ffff";
    prisEngangs.innerText = "509 kr";
    prisAbonnement.innerText = "432 kr"
}