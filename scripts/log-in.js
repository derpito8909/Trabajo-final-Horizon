function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    return true;
}