const TABS = {
    about: { banner: 'images/banner_about.png' },
    socials: { banner: 'images/banner_socials.png' },
    noise_education: { banner: 'images/banner_noise_education.png' },
    events: { banner: 'images/banner_events.png' },
    projects: { banner: 'images/banner_projects.png' },
};

const CARD_BG = '#4F0307';
const MENU_BG = '#101010';
const MENU_BANNER = 'images/banner_menu.png';

const menu = document.getElementById('menu');
const banner = document.getElementById('banner');
const cards = Object.fromEntries(
    Object.keys(TABS).map(id => [id, document.getElementById(id)])
);

function hideAll() {
    menu.classList.remove('active');
    Object.values(cards).forEach(card => card.classList.remove('active'));
}

function fadeBanner(src) {
    banner.style.opacity = 0;
    setTimeout(() => {
        banner.src = src;
        banner.style.opacity = 1;
    }, 250);
}

function openMenu() {
    hideAll();
    menu.classList.add('active');
    fadeBanner(MENU_BANNER);
    document.body.style.backgroundColor = MENU_BG;
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function changeTab(tab) {
    const config = TABS[tab];
    if (!config) {
        alert('Es ist etwas schiefgelaufen! Bitte lade die Seite neu.');
        return;
    }

    hideAll();
    cards[tab].classList.add('active');
    fadeBanner(config.banner);
    document.body.style.backgroundColor = CARD_BG;
}
openMenu()
