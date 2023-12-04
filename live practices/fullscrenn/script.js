let videobox = document.getElementsByClassName('vid')[0];
let fbutton = document.getElementsByClassName("fbtn")[0];
let ebutton = document.querySelector(".ebtn");

fbutton.addEventListener('click', function () {
    
    if (videobox.RequestFullscreen) {
        videobox.RequestFullscreen();

    }
    else if(videobox.mozRequestFullscreen)
    {
        videobox.mozRequestFullscreen();
    }
    
    
    else if(videobox.webkitRequestFullscreen)
    
    {
        videobox.webkitRequestFullscreen();
    }
    
    else if(videobox.msRequestFullscreen)
    {
        videobox.msRequestFullscreen();
}
})



ebutton.addEventListener('click', function () {
    
    if (videobox.exitFullscreen) {
        videobox.exitFullscreen();

    }
    else if(videobox.exitFullscreen)
    {
        videobox.exitFullscreen();
    }
    
    
    else if(videobox.exitFullscreen)
    
    {
        videobox.exitFullscreen();
    }
    
    else if(videobox.exitFullscreen)
    {
        videobox.exitFullscreen();
}
})
