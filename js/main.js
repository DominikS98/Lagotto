const cokie = document.querySelector(".cookie--arg");

const cookieOff = () => {
    const cokieBox = document.querySelector(".cookie");

    cokieBox.classList.add('cookie--off');
}
cokie.addEventListener('click', cookieOff);