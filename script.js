const burguerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive'); 
});