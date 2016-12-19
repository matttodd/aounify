var sugar = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            sugar = !sugar;
            if (sugar) {
                var a = document.getElementsByTagName("img");
                for (var i = 0; i < a.length; i++) a[i].src = "https://president.psu.edu/images/barron-portrait.jpg";
            }
        }
    }
);
