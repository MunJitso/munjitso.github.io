let darkBackground = document.querySelector('body');
let darkModeBtn = document.getElementById('darkModeBtn');
let btnIcon = document.getElementById('btnIcon');
let changeNavbarItem = document.getElementById('navbarDark');
let codeButton = document.getElementsByClassName('code-btn');

darkModeBtn.addEventListener('click', function() {
    darkBackground.classList.toggle('darkbackground');
    btnIcon.classList.toggle('fa-sun');
    btnIcon.classList.toggle('fa-moon');
    changeNavbarItem.classList.toggle('navbar-dark');
    changeNavbarItem.classList.toggle('navbar-light');
    for (var i = 0, len = codeButton.length; len > i; i++) {
        codeButton[i].classList.toggle('btn-outline-light');
        codeButton[i].classList.toggle('btn-outline-dark');

    };
});