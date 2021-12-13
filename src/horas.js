const adicionarBotaoPreencherHoras = () => {
  // const mestreFrame = document.querySelector('[name=MESTRE]');

  console.log(1112, document);
  // const timer = setInterval(() => {
  //   const dadosAcertoFrame =
  //     mestreFrame.contentDocument.querySelector('[name=DADOSACERTO]');
  //   console.log(11131, dadosAcertoFrame);
  //   if (dadosAcertoFrame) {
  //     dadosAcertoFrame.contentDocument.onreadystatechange = function () {
  //       console.log(1113, dadosAcertoFrame.contentDocument.readyState);
  //     };
  const botoesFrame = document.querySelector('[name=BOTOES]');

  console.log(1114);
  const linhaBotoes = botoesFrame.contentDocument.querySelector(
    '.TABELABOTOES5 tbody tr'
  );

  const botoes = linhaBotoes.querySelectorAll('td');

  const td = document.createElement('td');
  const newContent = document.createTextNode('Preencher horas');
  td.appendChild(newContent);

  linhaBotoes.insertBefore(td, botoes[0]);
  // }, 500);
};

function iniciarScripts() {
  console.log(1111, 'iniciar scripts horas');

  // const mestreFrame = document.querySelector('[name=MESTRE]');
  // if (!mestreFrame) return;

  // mestreFrame.contentDocument.onreadystatechange = () => {
  //   console.log(1112, mestreFrame.contentDocument.readyState);
  // };
  // dadosAcertoFrame.contentDocument.onreadystatechange = function () {
  //   console.log(1113, dadosAcertoFrame.contentDocument.readyState);
  // };

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
