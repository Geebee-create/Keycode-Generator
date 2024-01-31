document.addEventListener("keypress", (event) => {
    let key = event.key;
    // which has a line through as it is no longer recommended to use it.
    // I'm not sure what to use instead though?
    let which = event.which;
    let code = event.code;

    document.getElementById("key").innerHTML = `Key Pressed: ${key}`;
    document.getElementById("which").innerHTML = `Code: ${which}`;
    document.getElementById("code").innerHTML = `Event Code: ${code}`;

    // to hide the welcome message after the first key press
    document.getElementById("welcome-message").style.display = "none";

    // To display a message for the enter key
    if (event.key === "Enter") {
        alert("You pressed the Enter key!");
    }
});

// Function to reset information
function resetKeyInfo() {
    document.getElementById("key").innerHTML = "Press any key";
    document.getElementById("which").innerHTML = "-";
    document.getElementById("code").innerHTML = "-";
    document.getElementById("welcome-message").style.display = "block"; 
}