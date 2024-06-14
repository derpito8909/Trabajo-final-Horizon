// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener valores de los campos
    let name = event.target.elements['name'].value;
    let email = event.target.elements['email'].value;
    let departure = event.target.elements['departure'].value;
    let returnDate = event.target.elements['return'].value;
    let peopleCount = parseInt(event.target.elements['people'].value);
    
    // Calcular precio total (ejemplo: precio fijo por persona)
    let pricePerPerson = 100; // Precio por persona (ejemplo)
    let totalPrice = peopleCount * pricePerPerson;

    // Mostrar precio total debajo del formulario
    document.getElementById('total-price').textContent = 'Precio Total: $${totalPrice}';
}