function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}

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

document.addEventListener("DOMContentLoaded", function() {
    const bookmarkButtons = document.querySelectorAll(".loved-btn");

    bookmarkButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent triggering the parent click event
            const bookmarkIcon = button.querySelector("i");
            bookmarkIcon.classList.toggle("loved");
        });
    });
});