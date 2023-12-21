'use strict'
window.onload = init;

function init(){
    const regForm = document.getElementById("registrationForm");
    regForm.addEventListener("submit", registerNewUser);
}

async function registerNewUser(event) {
    event.preventDefault();
    class user{
        constructor(username, fullName, password){
        this.username = document.getElementById("username").value;
        this.fullName = document.getElementById("fullName").value;
        this.password = document.getElementById("password").value;
        }
    }
    try {
        const response = await fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/users', {
            method:'POST',
            body: JSON.stringify(user)
            })
        const data = await response.json();  
        console.log(`User ${user} added succesfully`)
    }
        catch (error) {
            console.error('Error', error)
        }
        // window.location.href = "index.html"
    }