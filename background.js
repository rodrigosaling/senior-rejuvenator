// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(async () => {
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//
//   // chrome.storage.sync.set({ color });
//   // console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message) => {
  if (message === 'runContentScript') {
    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript({
      file: 'contentScript.js',
    });
  }
});
