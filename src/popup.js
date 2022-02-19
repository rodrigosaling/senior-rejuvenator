/* eslint-disable no-undef */

// // Initialize button with user's preferred color
// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });
//
// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener('click', async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });
//
// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get('color', ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

// =======================

function getRandomInt(max) {
  return ;
}

function fillInputsWithDateAndTime() {
  const mestreFrame = document.querySelector('[name=MESTRE]');
  const dadosAcertoFrame =
    mestreFrame.contentDocument.querySelector('[name=DADOSACERTO]');
  const tituloFrame =
    dadosAcertoFrame.contentDocument.querySelector('[name=TITULO]');
  const dateInput =
    tituloFrame.contentDocument.querySelector('[name=lbDesData]');
  const timeInput =
    tituloFrame.contentDocument.querySelector('[name=lbDesHor]');

  const [date] = dateInput.value.split(' ');
  const [, , ...hours] = timeInput.value.split(' ');

  const dadosFrame =
    dadosAcertoFrame.contentDocument.querySelector('[name=DADOS]');

  const dateInputs =
    dadosFrame.contentDocument.querySelectorAll('#CAMDATAMARCACAO');
  const timeInputs =
    dadosFrame.contentDocument.querySelectorAll('#CAMHORAMARCACAO');
  const reasonInputs =
    dadosFrame.contentDocument.querySelectorAll('#CAMJUSMARCACAO');

  const MAX_VALUE = 10
  const randomizedNumber = Math.floor(Math.random() * MAX_VALUE)

  for (let i = 0; i < 4; i += 1) {
    const slicedHour = hours[i].slice(0, -1); // removes last character from string

    dateInputs[i].value = date;
    dateInputs[i].dispatchEvent(new Event('blur'));
    timeInputs[i].value = slicedHour + randomizedNumber.toString();
    timeInputs[i].dispatchEvent(new Event('blur'));
    reasonInputs[i].value = '2';
    reasonInputs[i].dispatchEvent(new Event('blur'));
  }
}

// Este é o botão que fica no popup
const fillInputs = document.getElementById('fill-inputs');

fillInputs.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillInputsWithDateAndTime,
  });
});
