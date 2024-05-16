const forms = document.querySelector(".forms"),
      signUpForm = document.getElementById("signupForm"); // Assuming your sign-up form has an ID of "signupForm"

// Function to toggle password visibility
function togglePasswordVisibility() {
    let pwFields = document.querySelectorAll(".password");
    pwFields.forEach(password => {
        password.type = password.type === "password" ? "text" : "password";
    });
}

// Event listener for clicking on the eye icon to toggle password visibility
document.querySelectorAll(".eye-icon").forEach(eyeIcon => {
    eyeIcon.addEventListener("click", togglePasswordVisibility);
});

// Event listener for clicking on the sign-up link to toggle the sign-up form
document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); // Prevent default link behavior
       forms.classList.toggle("show-signup");
    });
});

// Event listener for sign-up form submission
signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted");

    const formData = new FormData(signUpForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            // Registration successful, you may redirect to a login page or any other page
            console.log("User registered successfully");
        } else {
            const errorMessage = await response.text();
            alert(errorMessage); // Display error message to the user
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
