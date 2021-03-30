// const parallax = document.getElementById('parallax');

// parallax.addEventListener('mousemove', (e) => {
//   var x = (e.offsetX * -1 / 16), y = (e.offsetY * -1 / 16);
//   // Altera a posição X e Y do Background ¯\_(ツ)_/¯
//   parallax.style.setProperty('--x', x + "px");
//   parallax.style.setProperty('--y', y + "px");
// });
const textHeader = document.querySelector('.header').querySelector('h2');
const particles = document.getElementById('particles-js')
const shadow = e => {
  const { offsetWidth: width, offsetHeight: height } = parallax;
  let { offsetX: x, offsetY: y } = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const stretchShadow = 10;
  const stretchShadowX = Math.round((x / width * stretchShadow) - (stretchShadow / 2));
  const stretchShadowY = Math.round((y / width * stretchShadow) - (stretchShadow / 2));

  textHeader.style.textShadow = `${stretchShadowX}px ${stretchShadowY}px 3px rgba(0,0,0,0.3)`;
}

particles.addEventListener('mousemove', shadow);
