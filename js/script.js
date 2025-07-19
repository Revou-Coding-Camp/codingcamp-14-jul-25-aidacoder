window.addEventListener('DOMContentLoaded', function() {
    let initialName = this.prompt("Enter your name:");
    const welcomeUserElement = document.getElementById('welcome-user-identifier');
    if (initialName) {
        welcomeUserElement.textContent = initialName;
    } else {
        welcomeUserElement.textContent = 'Guest';
    }

    document.getElementById('name-input').value = initialName; 


})

function validateForm() { 
    const name = document.getElementById('name-input');
    const dob = document.getElementById("dob-input");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const message = document.getElementById("message-input");
    let finalGender = '';
    

    // Validation messages
    if (name.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('display-name').innerHTML = `Nama:${name.value}`;
        name.value = ''; // Clear the input field after submission
    }

 
        document.getElementById('display-dob').innerHTML =  `Tempat tgl,lahir: ${dob.value}`;
        dob.value = ''; // Clear the input field after submission
    




    if (message.value === '') {
        alert('Please enter your message.');
    } else {
        document.getElementById('display-message').innerHTML = `Your message: ${message.value}`;
        message.value = ''; // Clear the input field after submission
    }

    if(male.checked) {
        finalGender = "Males"
    }else if (female.checked) {
        finalGender = "Females"
    } else {
        finalGender = "Not specified"
    }
    document.getElementById('display-gender').innerHTML = `Gender : ${finalGender}`
    
}

