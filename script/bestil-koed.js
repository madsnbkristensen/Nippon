var knapEnPerson1 = document.getElementById("pers1");

var knapToPersoner2 = document.getElementById("pers2");

var prisEngangs = document.getElementById("engangspris");

var prisAbonnement = document.getElementById("abonnementspris");

function enPersonValgt1() {
    console.log("test1");
    knapEnPerson1.style.backgroundColor = "#413f45";
    knapEnPerson1.style.color = "#ffffff";
    knapToPersoner2.style.backgroundColor = "#ffff";
    knapToPersoner2.style.color = "#413f45";
    prisEngangs.innerText = "409 kr";
    prisAbonnement.innerText = "347 kr";

}

function toPersonerValgt1() {
    console.log("test2");
    knapEnPerson1.style.backgroundColor = "#ffff";
    knapEnPerson1.style.color = "#413f45";
    knapToPersoner2.style.backgroundColor = "#413f45";
    knapToPersoner2.style.color = "#ffff";
    prisEngangs.innerText = "509 kr";
    prisAbonnement.innerText = "432 kr";
}