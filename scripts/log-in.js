// Función para validar los campos del formulario
function validateForm() {
  // Obtener los valores de los campos de usuario y contraseña
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // Verificar si alguno de los campos está vacío
  if (username === "" || password === "") {
    alert("Por favor, completa todos los campos.");
    return false; // Evita el envío del formulario si hay campos vacíos
  }

  // Si la validación es exitosa, redirigir a index.html
  redirectToIndex();
  
  // Evitar el envío del formulario por defecto
  return false;
}

// Función para redirigir a index.html
function redirectToIndex() {
  window.location.href = "../index.html";
}
