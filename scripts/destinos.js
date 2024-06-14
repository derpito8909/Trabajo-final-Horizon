// FROMULARIO AGENDAMIENTO
const form = document.getElementById('travel-form');
const peopleInput = document.getElementById('people');
const totalPriceSpan = document.getElementById('total-price');
const pricePerPerson = 100; // Precio por persona

function updateTotalPrice() {
    const peopleCount = parseInt(peopleInput.value);
    const totalPrice = peopleCount * pricePerPerson;
    totalPriceSpan.textContent = `Precio Total: $${totalPrice}`;
}

peopleInput.addEventListener('input', updateTotalPrice);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Viaje agendado con éxito!');
});

// Initialize the total price display
updateTotalPrice();