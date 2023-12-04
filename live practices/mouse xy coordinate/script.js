let span = document.getElementsByClassName("spn")[0];
let parag = document.getElementsByClassName('para')[0];



function mxy(e) {

    let mx = e.clientX;
    let my = e.clientY;
span.innerHTML=`mx :${mx} my : ${my}`    

}

parag.addEventListener("click", mxy);