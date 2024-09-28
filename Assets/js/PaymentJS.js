document.querySelector('.dropdown-selected').addEventListener('click', function() {
    document.querySelector('.dropdown-options').style.display = 'block';
});

document.querySelectorAll('.dropdown-options div').forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelector('.dropdown-selected').innerHTML = option.innerHTML;
        document.querySelector('.dropdown-options').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-container')) {
        document.querySelector('.dropdown-options').style.display = 'none';
    }
});

document.querySelectorAll('.payment-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.popUp-container').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popUp-container').style.display = 'none';
})