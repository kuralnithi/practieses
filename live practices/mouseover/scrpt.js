function changecolor()
{ this.style.backgroundColor = "green" }

function nocolor() { this.style.backgroundColor = "white" }

document.getElementsByClassName("colour")[0].addEventListener("mouseover", changecolor);
document.getElementsByClassName("colour")[0].addEventListener("mouseout", nocolor);
