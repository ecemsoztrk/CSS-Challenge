document.querySelector('.searchIcon').addEventListener('click', function() {
    document.querySelector('.input').classList.toggle('active');
});


document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.frame').classList.toggle('active');
    document.querySelector('.navBar').classList.toggle('active');
});