// Dark / Light Mode
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});


// Say Hello Button
function showMessage() {
    const message = document.getElementById("message");

    message.textContent = "Thank you for visiting my portfolio! 😊";
}