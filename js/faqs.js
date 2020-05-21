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
  return {
    faq: array[0],
    description: array[1],
    id: array[2],
  }
}

// Encontrar palavra na FAQ
function handleSearch(input) {
  const typed = filterUpperCase(input.target.value);
  let result, line, faq, description, id;
  // Lopping em FaqContent para obter todos os dados
  line = ([...faqLines].filter(findByWord(typed)));
  console.log(line.map(faqColumns))
  // console.log([...line])
  if(typed === line) {
    // Pegue o array e use map
    console.log(line.map(faqColumns))
  } else if( typed !== line) {

  } else {

  }
      // if (faq.includes(typed) || description.includes(typed) || id.includes(typed)) {
        // Criar conteúdo HTML
        // result = `
        //   <li>
        //     <h4>Faq ID - ${id}</h4>
        //     <p class="paragraph">${faq}</p>
        //     <h4>Descrição:</h4>
        //     <p class="paragraph">${description}. |
        //       <a class="btn--text" tabindex="0" role="button" href="#${id}">acessar faq →</a>
        //     </p>
        //   </li>
        // `;
      // }
  // resultList.insertAdjacentHTML('afterbegin', result);
}

search.addEventListener('keyup', handleSearch);

// Limpar campo de pesquisa
// function clearResults() {
//   resultList.querySelectorAll('li').remove();
//   sectionResult.parentNode.style.opacity = 0;
//   sectionResult.classList.add('shake');
//   sectionResult.addEventListener('animationend', function() {
//     sectionResult.classList.remove('shake');
//   }, {once: true});
// }


