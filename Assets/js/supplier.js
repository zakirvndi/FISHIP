// untuk menampilkan preview details
function showPreview(supplierId) {
    const supplierDetails = document.querySelectorAll('.supplier-detail');
    supplierDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    document.getElementById(supplierId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const firstSupplierDetail = document.querySelector('.supplier-detail');
    if (firstSupplierDetail) {
        firstSupplierDetail.classList.add('active');
    }
});

// menampilkan advanced filter

function toggleAdvancedFilter() {
    const advancedFilter = document.getElementById('advanced-filter');
    if (advancedFilter.style.display === 'block') {
        advancedFilter.style.display = 'none';
    } else {
        advancedFilter.style.display = 'block';
    }
}


// tombol whislist
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

// card supplier
document.querySelectorAll('.increase').forEach(function(button) {
    button.addEventListener('click', function() {
        var quantity = this.parentElement.querySelector('.quantity');
        var currentQuantity = parseInt(quantity.innerText);
        quantity.innerText = currentQuantity + 1;
    });
});

document.querySelectorAll('.decrease').forEach(function(button) {
    button.addEventListener('click', function() {
        var quantity = this.parentElement.querySelector('.quantity');
        var currentQuantity = parseInt(quantity.innerText);
        if (currentQuantity > 5) {
            quantity.innerText = currentQuantity - 1;
        }
    });
});


