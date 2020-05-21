// SLIDER
function Slider(sliderEl) {
  if(!(sliderEl instanceof Element)) {
    throw new Error('Nenhum slide foi passado!')
  }

  // Selecionar elementos necessários para o slider
  this.slides = sliderEl.querySelector('.slides');
  this.sliderEl = sliderEl;
  const prevButton = sliderEl.querySelector('.btn-prev');
  const nextButton = sliderEl.querySelector('.btn-next');

  // Quando o slider for criado rode a função startSlider()
  this.startSlider();
  this.applyClasses();

  // Event Listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  this.current = this.sliderEl.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
}

Slider.prototype.move = function(direction) {
  // 1º Remover as classes dos slides atuais
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if(direction === 'back') {
    // Faça um novo Array com os novos valores
    [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
  } else {
    [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
  }
  this.applyClasses();
}
const refillsSlider = new Slider(document.querySelector('.slider'));
