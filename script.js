function openNav() {
    document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
    document.getElementById('myNav').style.height = '0%';
}

closeNav();

/* eslint-disable */

function menuOptions(param) {
    window.location.href = param;
    const links = document.getElementById('myNav');
    closeNav();
}
