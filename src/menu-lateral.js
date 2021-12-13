const abrirArvoreMenuLateral = () => {
  const areas = document.querySelectorAll('.area') ?? [];

  areas.forEach((area) => {
    const href = area.getAttribute('href');
    // eslint-disable-next-line no-script-url
    if (href.includes('javascript:clickOnNode')) {
      const label = area.parentNode.nextSibling.querySelector('a');
      label.setAttribute('href', href);
    }
  });

  const hiddenItems = document.querySelectorAll('table') ?? [];
  hiddenItems.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.display = 'block';
  });
};

function iniciarScripts() {
  console.log(1111, 'iniciar scripts menu lateral');

  abrirArvoreMenuLateral();
}

document.onreadystatechange = function () {
  // console.log(1111, document.readyState, document);
  if (document.readyState === 'complete') {
    // console.log(1111, document.readyState, document);
    iniciarScripts();
  }
};
