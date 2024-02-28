const hamburgerMenu = document.querySelector('.hamburger') as HTMLElement;

hamburgerMenu.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;

    navLinks.classList.toggle('expanded');
});