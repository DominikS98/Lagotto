const toggle = document.getElementById('span__div');
const menuBox = document.querySelector('.menu__box');
const toggleMenu = document.querySelector('.toggle__menu');
const submenu = document.querySelector('.submenu');
const boxSubmenu = document.querySelector('.box__submenu');

const psyToggleMenu = document.querySelector('.psy__toggle__menu');
const psySubmenu = document.querySelector('.psysubmenu');
const psyBoxSubmenu = document.querySelector('.Psy__box__submenu');



toggle.addEventListener('click', () => {
    menuBox.classList.toggle('menuOn');
})
toggleMenu.addEventListener('click', () => {
    submenu.classList.toggle('submenuOn');
    boxSubmenu.classList.toggle('Bigbox__submenu');

})
psyToggleMenu.addEventListener('click', () => {
    psySubmenu.classList.toggle('submenuOn');
    psyBoxSubmenu.classList.toggle('Bigbox__submenuS');

})
