// eslint-disable-next-line no-restricted-globals

// setTimeout(() => {
//   console.log(menuFrame.contentDocument.querySelector('transstr').innerHTML);
//   if (
//     menuFrame.contentDocument.querySelector('transstr').innerHTML ===
//     '<title>Ronda Web</title>'
//   ) {
//     getAreas();
//   }
// }, 1000);

const abrirArvoreMenuLateral = () => {
  const menuFrame = document.querySelector('[name=MENU]');
  const areas = menuFrame.contentDocument.querySelectorAll('.area') ?? [];

  areas.forEach((area) => {
    const href = area.getAttribute('href');
    // eslint-disable-next-line no-script-url
    if (href.includes('javascript:clickOnNode')) {
      const label = area.parentNode.nextSibling.querySelector('a');
      label.setAttribute('href', href);
    }
  });

  const hiddenItems =
    menuFrame?.contentDocument.querySelectorAll('table') ?? [];
  hiddenItems.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.display = 'block';
  });
};

const adicionarBotaoPreencherHoras = () => {
  const mestreFrame = document.querySelector('[name=MESTRE]');

  console.log(1113);
  // const timer = setInterval(() => {
  //   const dadosAcertoFrame =
  //     mestreFrame.contentDocument.querySelector('[name=DADOSACERTO]');
  //   console.log(11131, dadosAcertoFrame);
  //   if (dadosAcertoFrame) {
  //     dadosAcertoFrame.contentDocument.onreadystatechange = function () {
  //       console.log(1113, dadosAcertoFrame.contentDocument.readyState);
  //     };
  //     const botoesFrame =
  //       dadosAcertoFrame.contentDocument.querySelector('[name=BOTOES]');

  //     console.log(1114);
  //     const tabelaBotoes =
  //       botoesFrame.contentDocument.querySelector('.TABELABOTOES5');
  //     console.log(1114, tabelaBotoes);
  //   }
  // }, 500);
};

function iniciarScripts() {
  console.log(1111, 'iniciar scripts');

  // const mestreFrame = document.querySelector('[name=MESTRE]');
  // if (!mestreFrame) return;

  // mestreFrame.contentDocument.onreadystatechange = () => {
  //   console.log(1112, mestreFrame.contentDocument.readyState);
  // };
  // dadosAcertoFrame.contentDocument.onreadystatechange = function () {
  //   console.log(1113, dadosAcertoFrame.contentDocument.readyState);
  // };

  abrirArvoreMenuLateral();
  adicionarBotaoPreencherHoras();
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

// let timer = setInterval(() => {
//   console.log(1112, document.readyState);
//   // if (
//   //   menuFrame.contentDocument.querySelector('title').innerHTML === 'Ronda Web'
//   // ) {
//   if (document.readyState === 'complete') {
//     console.log(1113, document.readyState);
//     clearInterval(timer);
//     getAreas();
//   }
// }, 1000);

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    iniciarScripts();
  }
};
