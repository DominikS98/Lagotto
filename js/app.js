const toggle = document.getElementById('span__div');
const menuBox = document.querySelector('.menu__box');
const toggleMenu = document.querySelector('.toggle__menu');
const submenu = document.querySelector('.submenu');
const boxSubmenu = document.querySelector('.box__submenu');

const psyToggleMenu = document.querySelector('.psy__toggle__menu');
const psySubmenu = document.querySelector('.psysubmenu');
const psyBoxSubmenu = document.querySelector('.Psy__box__submenu');

const cookie = document.querySelector(".Cbutton");
const cookiebox = document.querySelector('.cookieBox');


cookie.addEventListener('click', function () {
    cookiebox.classList.add('cookie--off');
});


toggle.addEventListener('click', function () {
    menuBox.classList.toggle('menuOn');
});
toggleMenu.addEventListener('click', function () {
    submenu.classList.toggle('submenuOn');
    boxSubmenu.classList.toggle('Bigbox__submenu');

});
psyToggleMenu.addEventListener('click', function () {
    psySubmenu.classList.toggle('submenuOn');
    psyBoxSubmenu.classList.toggle('Bigbox__submenuS');

});