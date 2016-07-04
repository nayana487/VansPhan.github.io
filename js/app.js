// Bonus points for using JS! Code here looks good!
// Just a small thought, but since you only have one "menu" item and you're only trying to perform
// an action on that one element, it's easier to write this as a getElementById.

function dropdown() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}
