function inputvalue () {
    a = prompt();


    document.getElementsByClassName('spn')[0].innerHTML = a;
}

setTimeout(inputvalue,5000);

function rmtxt() {
    this.innerHTML = "";
}

document.getElementsByClassName("spn")[0].addEventListener("mouseover", rmtxt)


