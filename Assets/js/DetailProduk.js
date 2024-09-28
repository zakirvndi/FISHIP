let quantity = 1;
const quantityDisplay = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');

function updateQuantity() {
    quantityDisplay.textContent = quantity;
}

decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity -= 1;
        updateQuantity();
    }
});

increaseBtn.addEventListener('click', () => {
    quantity += 1;
    updateQuantity();
});

updateQuantity();
