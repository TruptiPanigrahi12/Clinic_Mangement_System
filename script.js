document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email === "admin@example.com" && password === "1234") {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to another page
    } else {
        alert("Invalid email or password!");
    }
});
document.getElementById("logoutBtn").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "index.html"; // Redirect to login page
});
