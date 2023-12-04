let decibox = document.getElementsByClassName('decimal')[0];
let binbox = document.getElementsByClassName('bin')[0];


decibox.addEventListener('input', function () {
    
    let dnum = decibox.value;
        dnum = parseInt(dnum).toString(2);
    binbox.innerHTML = dnum;
})

