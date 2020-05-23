//FAQS
const faqLines = document.querySelectorAll('.clickable-row');

function handleClick(event) {
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
function findByWord(word) {
  return function(el) {
    return el.textContent.toUpperCase().includes(word)
  }
}
// Palavra em caixa alta
function filterUpperCase(word) {
  return word.toUpperCase()
}
// Remover #
function createMapName(el) {
  let item = el.attributes[1].value.split('');
  item.splice(0, 1);
  return item.join('');
}
// Separar conteúdo de cada coluna da tabela
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
  return resultList.insertAdjacentHTML('afterbegin', answer);;
  // faq: array[0],
  // description: array[1],
  // id: array[2],
}

// Limpar campo de pesquisa
function clearResults() {
  sectionResult.style.opacity = 0;
  sectionResult.style.pointerEvents = auto;
  sectionResult.style.marginTop = 0;
  resultList.querySelectorAll('li').remove();
  sectionResult.classList.add('shake');
  sectionResult.addEventListener('animationend', function() {
  sectionResult.classList.remove('shake');
 }, {once: true});
}
// Encontrar palavra na FAQ
function handleSearch(input) {
  if(input.target[0].value) {
    let result;
    const typed = filterUpperCase(input.target[0].value);
    const line = [...faqLines].filter(findByWord(typed));
    result = line.map(faqColumns)
    ;
  }
}


search.addEventListener('submit', handleSearch);



