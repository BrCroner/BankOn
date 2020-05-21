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
const input = document.querySelector('#search');
const faqContent = [...faqLines];
const sectionResult = document.querySelector('.search-result');
const resultList = sectionResult.querySelector('ul');

// Filtros
function filterUpperCase(word) {
  return word.toUpperCase()
}
function createMapName(el) {
  let item = el.attributes[1].value.split('');
  item.splice(0, 1);
  return item.join('');
}

// Encontrar palavras
function handleSearch(input) {
  const typed = filterUpperCase(input.target.value);
  let result;
  // Lopping em FaqContent para obter td
  faqContent.forEach(item => {
    const line = item.innerText;
    const faq = item.children[0].innerText;
    const description = item.children[1].innerText;
    const id = item.children[2].innerText;
    // Realiza verificação do input com texto de cada linha da Faq
    if (line.toUpperCase().includes(typed)) {
      sectionResult.parentNode.style.opacity = 1;
      // Criar conteúdo HTML
      result = `
        <li>
          <h4>Faq ID - ${id}</h4>
          <p class="paragraph">${faq}</p>
          <h4>Descrição:</h4>
          <p class="paragraph">${description}. |
            <a class="btn--text" tabindex="0" role="button" href="#${id}">acessar faq →</a>
          </p>
        </li>
      `;
    } else if (!line.toUpperCase().includes(typed) || typed == undefined) {
      result = ''
    } else {
      clearSearch();
    }
  })
  resultList.insertAdjacentHTML('afterbegin', result);
}

search.addEventListener('keyup', handleSearch);

// Limpar campo de pesquisa
function clearSearch() {
  resultList.querySelectorAll('li').remove();
  sectionResult.parentNode.style.opacity = 0;
  sectionResult.classList.add('shake');
  sectionResult.addEventListener('animationend', function() {
    sectionResult.classList.remove('shake');
  }, {once: true});
}
// const fragment = document.createRange().createContextualFragment(result);


