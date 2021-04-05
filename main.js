let darkBackground = document.querySelector('body');
let darkModeBtn = document.getElementById('darkModeBtn');
let btnIcon = document.getElementById('btnIcon');
let changeNavbarItem = document.getElementById('navbarDark');
let grayDocs = document.getElementsByClassName('switchTextToWhite');
let cardDark = document.getElementsByClassName('cardDark')
let cardIconWhite = document.getElementsByClassName('card-icon');
let aboutDark = document.getElementById('about')
let footerDark = document.getElementById('footer')

darkModeBtn.addEventListener('click', function() {
    darkBackground.classList.toggle('darkbackground');
    btnIcon.classList.toggle('fa-sun');
    btnIcon.classList.toggle('fa-moon');
    changeNavbarItem.classList.toggle('navbar-dark');
    changeNavbarItem.classList.toggle('navbar-light');
    for (i = 0, len = grayDocs.length; len > i; i++) {
        grayDocs[i].classList.toggle('home-title-dark');
        grayDocs[i].classList.toggle('home-title');
    };
    for (j = 0, jen = cardDark.length; len > j; j++) {
        cardDark[j].classList.toggle('card-body-dark');
    };
    for (i = 0, ken = cardIconWhite.length; ken > i; i++) {
        cardIconWhite[i].classList.toggle('cardIconWhite');
    };
    aboutDark.classList.toggle('aboutBackgroundDark');
    aboutDark.classList.toggle('about');
    footerDark.classList.toggle('aboutBackgroundDark');
    footerDark.classList.toggle('footerDark');
});