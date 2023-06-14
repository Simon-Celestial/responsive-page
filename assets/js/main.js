const menuBtn = document.querySelector('.menu');
const hiddenMenu = document.querySelector('.hidden-menu');
menuBtn.addEventListener('click', () => {
    if (hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'flex';
    } else {
        hiddenMenu.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        hiddenMenu.style.display = 'none';
    }
});