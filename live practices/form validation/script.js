document.getElementsByClassName('myform')[0].addEventListener('submit', function(event) {
    event.preventDefault();
   
    let emailid = document.getElementById('ebox').value;
    let epassword = document.getElementById('passbox').value;


    if (emailid === ""||epassword==="")
    {
document.getElementsByClassName("errormsg")[0].innerText="please enter the email and password"
    }
    else {
        document.getElementsByClassName("errormsg")[0].innerHTML = ""
        alert("Form submitted")
        
    }

})