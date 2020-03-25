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

// SLIDER
function Slider(sliderEl) {
  if(!(sliderEl instanceof Element)) {
    throw new Error('Nenhum slide foi passado!')
  }
  // Criar variáveis para trabalhar com o slider
  let prev;
  let current;
  let next;
  // Selecionar elementos necessários para o slider
  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.btn-prev');
  const nextButton = sliderEl.querySelector('.btn-next');

  function startSlider() {
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
      
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // 1º Remover as classes dos slides atuais
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if(direction === 'back') {
      // Faça um novo Array com os novos valores
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }
  // Quando o slider for criado rode a função startSlider()
  startSlider();
  applyClasses();

  // Event Listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}
const refillsSlider = Slider(document.querySelector('.slider'));