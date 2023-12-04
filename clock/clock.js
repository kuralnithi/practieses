let clock = () => {
    
    let d = new Date;
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();


    document.getElementsByClassName("ttt")[0].innerHTML = `Hr ${hour} : min ${min} : sec ${sec}`;
}



setInterval(clock, 1000)
