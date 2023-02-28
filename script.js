'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('button');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let everythingIsOk = true;
    if(username.value.trim().length==""){
        alert("Username is missing!");
        everythingIsOk = false;
    }
    if(email.value.trim().length==""){
        alert("Email is missing!");
        everythingIsOk = false;
    }
    if(!email.value.trim().includes('@')){
        alert("Please enter a valid email!");
        everythingIsOk = false;
    }
    if(password.value.trim().length==""){
        alert("Password is missing!");
        everythingIsOk = false;
    }
    if(password2.value.trim().length==""){
        alert("Password validation is missing!");
        everythingIsOk = false;
    }
    if(password.value !== password2.value){
        alert("Password validation is not the same as password, please try again");
        everythingIsOk = false;
    }
    if(everythingIsOk){
        console.log("Everything is OK. Submit");
    }

})