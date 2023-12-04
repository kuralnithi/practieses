
let inputbox = document.getElementsByClassName("inp")[0];

inputbox.addEventListener("input", function () {
    let textcount = document.getElementsByClassName("txtcount")[0];
    let inpchr = document.getElementsByClassName("inp")[0].value;
    let count = inpchr.length;
    textcount.textContent = count;

});