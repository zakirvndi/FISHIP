// untuk tombol clear filter
document.getElementById('clear').addEventListener('click', function() {
    var inputs = document.querySelectorAll('input[type=number]');
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var radios = document.querySelectorAll('input[type=radio]');
    var selects = document.querySelectorAll('select');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});

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