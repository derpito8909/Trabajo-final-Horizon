/*  Script validar los datos que sean correctos y para simular que la pagina envio el mensaje al sevidor 
y esta procesando la respuesta y envio mensaje de respuesta */

const btnMessage = document.getElementById("btn-Message-On");
const btnMessageOff = document.getElementById("btn-Message-Off");
const form = document.querySelector(".needs-validation");
// evento que al dar clic oculta el boton enviar y muestra un boton con un efecto de cargar
btnMessage.addEventListener("click", (e) => {
  // condicion que valida si los elementos de formulario esta digitados y deja mostrar el mensaje de confirmacion, de lo contrario muestra mensaje de error
  if (!form.checkValidity()) {
    // evita que la pagina se recarge al validar los campos que esten digitados
    e.preventDefault();
  } else {
    btnMessage.classList.add("d-none");
    btnMessageOff.classList.remove("d-none");
    btnMessageOff.classList.add("d-inline");
    // muestra un modal tipo notificacion para simular la respuesta del servidor al enviar el mensaje
    const myModalAlternative = new bootstrap.Modal("#myModal");
    myModalAlternative.show();
    const myModalEl = document.getElementById("myModal");
    myModalEl.addEventListener("hidden.bs.modal", (event) => {
      btnMessageOff.classList.remove("d-inline");
      btnMessageOff.classList.add("d-none");
      btnMessage.classList.remove("d-none");
      btnMessage.classList.add("d-inline");
    });
  }
  form.classList.add("was-validated");
  // evita que la pagina se recarge y no muestre el modal
  e.preventDefault();
});
