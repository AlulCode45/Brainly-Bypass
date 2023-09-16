chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
    }, function () {
        console.log("Content script executed");
    });
});
