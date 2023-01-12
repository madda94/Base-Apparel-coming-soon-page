document.getElementById("button").addEventListener("click", function() {
    if (document.getElementById("email-input").value === "" || !document.getElementById("email-input").value.includes("@")) {
        document.getElementById("error-message").style.display = "block"
        document.getElementById("email-input").style.border = "2px solid red"
        document.getElementById("error-icon").style.display = "block"
    }
})