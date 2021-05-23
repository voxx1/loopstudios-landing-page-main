const overlayinfo = document.querySelector("#info");
const overlaycreations = document.querySelector("#creations");
const overlayfooter = document.querySelector("#footer");
const overlay = document.querySelector("#overlay");

const menuopen = document.querySelector("#hamburger");
const menuclose = document.querySelector("#close");
let view = "menu"

menuopen.addEventListener("click", function() {

if (view === "menu") {
    overlayinfo.classList.add("hidden");
    overlaycreations.classList.add("hidden");
    overlayfooter.classList.add("hidden");
    overlay.classList.remove("hidden");
    view = "full";
}})

menuclose.addEventListener("click", function() {
    if (view === "full") {
        overlayinfo.classList.remove("hidden");
        overlaycreations.classList.remove("hidden");
        overlayfooter.classList.remove("hidden");
        overlay.classList.add("hidden");
        view = "menu";
}})
