
let nav_bar = document.getElementById('nav-bar');
let navigation_bar = document.querySelector('.navigation-bar');
let navigation_container = document.querySelector('.navigation-container');



nav_bar.addEventListener('click', (ed) => {
    ed.preventDefault();

    navigation_bar.classList.add('active');
    navigation_container.classList.add('active');
})




navigation_bar.addEventListener('click', () => {

    navigation_bar.classList.remove('active');
    navigation_container.classList.remove('active');
    
})