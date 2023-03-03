'use strict';
// below is the implementation for the contact form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const button = document.getElementById('button');
const message = document.getElementById('message');

form.addEventListener('submit', (event)=>{    
    event.preventDefault();
    
    let everythingIsOk = true;
    if(username.value.trim().length==""){
        alert("Please enter your name!");
        everythingIsOk = false;
    }
    if(email.value.trim().length==""){
        alert("Please enter your email!");
        everythingIsOk = false;
    }
    if(!email.value.trim().includes('@')){
        alert("Please enter a valid email!");
        everythingIsOk = false;
    }
    
    if(phone.value.trim().length==""){
        alert("Please enter your phone number!");
        everythingIsOk = false;
    }
    
    if(message.value.trim().length==""){
        alert("Please enter your message!");
        everythingIsOk = false;
    }
    if(everythingIsOk){
        console.log("Everything is OK. Submit");
    }

})



// hamburgerClicked is called whenever the mobile menu (hamburger menu) is clicked
function hamburgerClicked(){
    
    let navbar = document.getElementById("navbar-mobile");     
    console.log("allaksa");

    let display = navbar.style.display;    
    if (display=="none") {
            navbar.style.display="block";
            navbar.style.right="0px";
            console.log("edw");
          } else {
            navbar.style.display="none";
            navbar.style.right="-220px";
        }   
}



