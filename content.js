var sugar = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            console.log("sugar: " + sugar);
            sugar = !sugar;
            if (sugar) {
                console.log("sugar time!");
                document.getElementsByTagName("body")[0].style.background = "url(http://www.brycethuilot.com/sugar/IMG_0005.jpg)";
            }
        }
    }
);
