document.addEventListener("keypress", function (event) {
    
    let key = event.key;
    if (key === " ")
    {
        alert("thankyou");
        window.close();
    }
    else {
        alert("invalid key pressed")
    }
})