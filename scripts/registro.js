function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let contrasena = document.getElementById('contrasena').value.trim();
    let confirmarContrasena = document.getElementById('confirmar_contrasena').value.trim();

    let nombreValido = true;
    let emailValido = true;
    let contrasenaValida = true;
    let confirmacionValida = true;

    if (nombre === '') {
        document.getElementById('nombre-error').textContent = 'Por favor, ingresa tu nombre';
        nombreValido = false;
    } else {
        document.getElementById('nombre-error').textContent = '';
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Por favor, ingresa tu correo electrónico';
        emailValido = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (contrasena === '') {
        document.getElementById('contrasena-error').textContent = 'Por favor, ingresa una contraseña';
        contrasenaValida = false;
    } else {
        document.getElementById('contrasena-error').textContent = '';
    }

    if (confirmarContrasena === '') {
        document.getElementById('confirmar-contrasena-error').textContent = 'Por favor, confirma tu contraseña';
        confirmacionValida = false;
    } else {
        document.getElementById('confirmar-contrasena-error').textContent = '';
    }

    return nombreValido && emailValido && contrasenaValida && confirmacionValida;
}