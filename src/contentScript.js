// eslint-disable-next-line no-restricted-globals
const menuFrame = parent.document.querySelector('[name=MENU]');

// setTimeout(() => {
//   console.log(menuFrame.contentDocument.querySelector('transstr').innerHTML);
//   if (
//     menuFrame.contentDocument.querySelector('transstr').innerHTML ===
//     '<title>Ronda Web</title>'
//   ) {
//     getAreas();
//   }
// }, 1000);

function getAreas() {
  const areas = menuFrame.contentDocument.querySelectorAll('.area');

  areas.forEach((area) => {
    const href = area.getAttribute('href');
    // eslint-disable-next-line no-script-url
    if (href.includes('javascript:clickOnNode')) {
      const label = area.parentNode.nextSibling.querySelector('a');
      label.setAttribute('href', href);
    }
  });

  const hiddenItems = menuFrame.contentDocument.querySelectorAll('table');
  hiddenItems.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.display = 'block';
  });
}

// function fillInputsWithDateAndTime() {
//   const mestreFrame = document.querySelector('[name=MESTRE]');
//   const dadosAcertoFrame =
//     mestreFrame.document.querySelector('[name=DADOSACERTO]');
//   const tituloFrame = dadosAcertoFrame.document.querySelector('[name=TITULO]');
//   const dateInput =
//     tituloFrame.contentDocument.querySelector('[name=lbDesData]');
//   alert(33333, dateInput.value);
// }

setTimeout(() => {
  if (
    menuFrame.contentDocument.querySelector('title').innerHTML === 'Ronda Web'
  ) {
    getAreas();
  }
}, 1000);
