console.log("Content script executed");

const values = {
    "simple-funnel-cursor-set-time": "",
    "flexible-funnel-hardwall-start": "",
    "simple-funnel-denied-day-occurences": "",
    "simple-funnel-name": "",
    "simple-funnel-denied-day-occurences-set-date": "",
    "simple-funnel-cursor": ""
};

chrome.storage.local.set(values, function () {
    console.log("LocalStorage values set");
});
