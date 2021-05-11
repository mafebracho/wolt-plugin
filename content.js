console.log("Chrome extension go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    
    if (message.txt === "hello") {
        let paragraphs = document.getElementsByTagName("p");
        for (element of paragraphs) {
            element.style["background-color"] = "#FF00FF";
        }
    }
}