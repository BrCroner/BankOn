'use strict';
//FAQS
const faqLines = document.querySelectorAll('.clickable-row');
// Expande ao clicar na linha da FAQ
function handleClick(event) {
  event.preventDefault();
  // Localizar FAQ pelo ID
  const faqID = event.target.parentNode.getAttribute('href');
  const toggleLine = document.querySelector(faqID);
  if(event.type === 'click' || event.key === 'Enter') {
    toggleLine.classList.toggle("toggle");
  }
}
faqLines.forEach( line => line.addEventListener('click', handleClick));
// Acessibilidade para pessoas que não usam mouse (•̀ᴗ•́)و ̑̑
faqLines.forEach( line => line.addEventListener('keyup', handleClick));

// SEARCH
const search = document.querySelector('.search');
const input = document.querySelector('[name="faq"]');
const faqContent = [...faqLines];
const sectionResult = document.querySelector('.search-result');
const resultList = sectionResult.querySelector('ul');

// Filtros
// Localiza palavra
function findByWord(word) {
  return function(el) {
    return el.textContent.toUpperCase().includes(word)
  }
}
// Palavra em caixa alta
const filterUpperCase = (word) => word.toUpperCase();

// Criar conteúdo HTML para cada linha.
function faqColumns(line) {
  const array = line.querySelectorAll('td')
  const answer = `
    <li>
      <h4>Faq ID - ${array[2].textContent}</h4>
      <p class="paragraph">${array[0].textContent}</p>
      <h4>Descrição:</h4>
      <p class="paragraph">${array[1].textContent}. |
        <a class="btn--text" tabindex="0" role="button" href="#${array[2].textContent}">acessar faq →</a>
      </p>
    </li>
  `
  return resultList.insertAdjacentHTML('beforeend', answer);
  // faq: array[0],
  // description: array[1],
  // id: array[2],
}

// Esconder "search-result"
if(!resultList.childElementCount) {
  sectionResult.style.opacity = "0";
  sectionResult.style.marginTop = "-15rem";
  sectionResult.style.pointerEvents = "none";
}
// Encontrar palavra na FAQ
function handleSearch(input) {
  event.preventDefault();
  let li = resultList.querySelectorAll('li');
  li.forEach( el => el.remove());
  if(input.target[0].value) {
    sectionResult.style.marginTop = "0rem";
    setTimeout(() => sectionResult.style.opacity = "1", 150 );
    sectionResult.style.pointerEvents = "auto";
    const typed = filterUpperCase(input.target[0].value);
    const line = [...faqLines].filter(findByWord(typed));
    const result = line.map(faqColumns);
    return result;
  }
}
// EventListenet observando botão "Pesquisar"
search.addEventListener('submit', handleSearch);



