// defining Functions

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
// this menulinks will disappear the drop down menu when you click somewhere in the menu or in the screen
menuLinks.addEventListener('click', mobileMenu);

// Show Active Menu when Scrolling
// Highlight Menu

