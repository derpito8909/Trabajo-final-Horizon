// FROMULARIO AGENDAMIENTO
let form = document.getElementById('travel-form');
let peopleInput = document.getElementById('people');
let totalPriceSpan = document.getElementById('total-price');
let pricePerPerson = 107420; // Precio por persona

function updateTotalPrice() {
    let peopleCount = parseInt(peopleInput.value);
    let totalPrice = peopleCount * pricePerPerson;
    totalPriceSpan.textContent = `Precio Total: $${totalPrice}`;
}

peopleInput.addEventListener('input', updateTotalPrice);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Viaje agendado con éxito!');
});

updateTotalPrice();