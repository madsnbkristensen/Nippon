var knapEnPerson = document.querySelector('#pers1')

var knapToPersoner = document.querySelector('#pers2')

var prisEngangs = document.getElementById("engangspris")

var prisAbonnement = document.querySelector('#abonnementspris')

function enPersonValgt() {
    knapEnPerson.style.backgroundColor = "#413F45";
    knapEnPerson.style.color = "#ffffff";
    knapToPersoner.style.backgroundColor = "#ffff";
    knapToPersoner.style.color = "#413f45";
    prisEngangs.innerText = "389 kr";
    prisAbonnement.innerText = "315 kr"

}

function toPersonerValgt() {
    knapEnPerson.style.backgroundColor = "#ffff";
    knapEnPerson.style.color = "#413f45";
    knapToPersoner.style.backgroundColor = "#413f45";
    knapToPersoner.style.color = "#ffff";
    prisEngangs.innerText = "489 kr";
    prisAbonnement.innerText = "415 kr"
}
