const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const sr = ScrollReveal({
    distance:'65px',
    duration:2000,
    delay: 300,
    reset: true
});
ScrollReveal().reveal('.section__pic-container',{ delay:600});
ScrollReveal().reveal('.section__text',{ delay:750});

ScrollReveal().reveal('.title',{ delay:300});

ScrollReveal().reveal('.section-conteinerGeneral',{ delay:800});
ScrollReveal().reveal('.experience-details-container',{ delay:800});
ScrollReveal().reveal('.contact-info-upper-container',{ delay:800});

