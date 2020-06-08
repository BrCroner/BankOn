// MENU
const nav = document.querySelector('#menu');
const topOfNav = nav.offsetTop;
function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);

const hamburgerButton = document.querySelector('.indicator');
hamburgerButton.addEventListener('click', function() {
  const menuItens = hamburgerButton.querySelectorAll('li');
  const navIcon = document.getElementById('nav-icon');
  menuItens.forEach(el => el.classList.toggle('indicator__open'));
  navIcon.classList.toggle('open');
})
