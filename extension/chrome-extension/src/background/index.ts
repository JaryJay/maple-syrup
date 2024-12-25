import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.action.getPopup({ tabId }, (popup) => {
      if (popup) {
        if (tab.url.includes("amazon.com") || tab.url.includes("amazon.ca")) {
          chrome.action.enable(tabId);
        } else {
          chrome.action.disable(tabId);
        }
      }
    });
  }
});
