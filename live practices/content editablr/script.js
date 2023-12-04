let editb = document.querySelector("div>.editbox");
editb.addEventListener("mouseover", function ()
{
    editb.setAttribute("contenteditable","true");
})
editb.innerHTML="<strong>MOUSEOVER TO EDIT</strong>"