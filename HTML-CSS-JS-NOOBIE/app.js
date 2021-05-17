// making of the x button on hamburger menu
// defining Functions

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

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

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // add 'highlight' class to my menu items 
    // innerwidth is like if its below 960 pix, it wont work, thats the equation of this line
    if (window.innerWidth > 960 && scrollPos < 490) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
    // classlist.add is like if the home nav is highlighted, the next will one will be and so on, so we solve it like this ⬇ 
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1000) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1900) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem ) {
        elem.classList.remove('highlight');
    }
};
// in-order to trigger this, we need to call this function highlightMenu   

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
