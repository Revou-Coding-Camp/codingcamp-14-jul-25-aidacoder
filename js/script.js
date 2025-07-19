window.addEventListener('DOMContentLoaded', function() {
    let initialName = this.prompt("Enter your name:");
    const welcomeUserElement = document.getElementById('welcome-user-identifier');
    if (initialName) {
        welcomeUserElement.textContent = initialName;
    } else {
        welcomeUserElement.textContent = 'Guest';
    }


})

function validateForm() { 
    const name = document.getElementById('name-input');
    const dob = document.getElementById("dob-input");
    const message = document.getElementById("message-input");
    

    // Validation messages
    if (name.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('display-name').innerHTML = `Nama:${name.value}`;
        name.value = ''; // Clear the input field after submission
    }

    if (dob.value === '') {
        alert('Please enter your  date.');
    } else {
        document.getElementById('display-dob').innerHTML =  `Tempat tgl,lahir: ${name.value}`;
        dob.value = ''; // Clear the input field after submission
    }


    if (message.value === '') {
        alert('Please enter your message.');
    } else {
        document.getElementById('display-message').innerHTML = `Your message: ${message.value}`;
        message.value = ''; // Clear the input field after submission
    }

    
}

