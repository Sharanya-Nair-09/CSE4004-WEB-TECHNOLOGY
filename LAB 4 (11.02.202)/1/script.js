const usernameInput = document.getElementById('username');
const feedback = document.getElementById('feedback');
const loader = document.getElementById('loader');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('registrationForm');

let isUsernameAvailable = false;

// Simulated "Server Database" (since browsers block local JSON files)
const mockDatabase = ["admin", "john_doe", "user123", "alice"];

usernameInput.addEventListener('input', function() {
    const username = this.value.trim().toLowerCase();
    
    if (username === "") {
        feedback.innerText = "";
        loader.classList.add('hidden');
        submitBtn.disabled = true;
        return;
    }

    // 1. Show loading indicator while request is in progress
    loader.classList.remove('hidden');
    feedback.innerText = "Checking availability...";
    feedback.className = ""; 
    submitBtn.disabled = true;

    // 2. Simulate AJAX Delay (Pretending to call a server)
    setTimeout(() => {
        loader.classList.add('hidden'); // Hide loading indicator
        
        // 3. Process the response (Simulating checking users.json)
        if (mockDatabase.includes(username)) {
            // If username exists -> show "Username already taken"
            feedback.innerText = "Username already taken";
            feedback.className = "taken";
            isUsernameAvailable = false;
        } else {
            // If available -> show "Username available"
            feedback.innerText = "Username available";
            feedback.className = "available";
            isUsernameAvailable = true;
            submitBtn.disabled = false;
        }
    }, 800); // 0.8 second delay to show the loader working
});

// 4. Prevent form submission if username is unavailable
form.addEventListener('submit', function(event) {
    if (!isUsernameAvailable) {
        event.preventDefault(); 
        alert("Cannot register: Username is taken.");
    } else {
        event.preventDefault();
        alert("Registration Successful!");
    }
});