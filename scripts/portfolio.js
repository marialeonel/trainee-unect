var button = document.getElementById('read_button');

button.addEventListener('click', function() {
    var card = document.querySelector('.expande');
    card.classList.toggle('active');

});