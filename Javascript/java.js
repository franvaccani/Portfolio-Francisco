const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

const sr = ScrollReveal({
    distance:'65px',
    duration:2200,
    delay: 400,
    reset: true
});


sr.reveal('#profile', {delay:200, origin:'top'});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
