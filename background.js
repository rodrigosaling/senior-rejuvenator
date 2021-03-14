let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.runtime.onMessage.addListener((message, callback) => {
//     if (message == "runContentScript"){
//         chrome.scripting.executeScript({
//             file: 'contentScript.js'
//         });
//     }
// });

