console.log('สวัสดี');

// make header interactive in mobile version

const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');
const navLinks = document.getElementsByClassName('nav-link');

function toggleMenu() {
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
        menuBtn.innerHTML = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>`
    } else {
        navBar.style.display = 'block';
        menuBtn.innerHTML = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>`
    }
}

function hideMenu() {
    navBar.style.display = 'none';
    menuBtn.innerHTML = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>`
}

menuBtn.addEventListener('click', toggleMenu);

const menuBtnStyle = window.getComputedStyle(menuBtn);
const displayVal = menuBtnStyle.getPropertyValue('display');

if (displayVal === 'block') {    // prevent desktop version from getting this effect
    for (let i = 0; i < navLinks.length; i++) { 
        navLinks[i].addEventListener('click', hideMenu)
    }
}

// set theme

const radios = document.querySelectorAll('input[type=radio]');
const nextLogo = document.getElementById('next-logo');

function setTheme(theme) {
    localStorage.setItem("colorMode", theme);
    document.documentElement.classList = theme;

    if (theme === 'dark') {
        nextLogo.style.fill = '#fff'
    } else {
        nextLogo.style.fill = '#000'
    }
}

radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        setTheme(e.target.value)
    })
});

window.addEventListener('DOMContentLoaded', () => {
    let theme;
    if (!localStorage.getItem("colorMode")) {    // The first time the page is loaded, the color mode is set according to the system preference. (Use light theme if no preference is set)
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark'
            : 'light'      
    } else {
        theme = localStorage.getItem("colorMode");
    }
    setTheme(theme); 
    document.getElementById(theme + '-theme').checked = true;
})