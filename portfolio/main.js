let darkBackground = document.querySelector('body');
let darkModeBtn = document.getElementById('darkModeBtn');
let btnIcon = document.getElementById('btnIcon');
let changeNavbarItem = document.getElementById('navbarDark');

darkModeBtn.addEventListener('click', function() {
    darkBackground.classList.toggle('darkbackground');
    btnIcon.classList.toggle('fa-sun');
    btnIcon.classList.toggle('fa-moon');
    changeNavbarItem.classList.toggle('navbar-dark');
    changeNavbarItem.classList.toggle('navbar-light');
})