var sugar = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            sugar = !sugar;
            if (sugar) {
                var a = document.getElementsByTagName("img");
                for (var i = 0; i < a.length; i++) {
                    a[i].src = "https://president.psu.edu/images/barron-portrait.jpg";
                    a[i].attributes.src = "https://president.psu.edu/images/barron-portrait.jpg";
                }
                var frames = document.getElementsByTagName("frame");
                var iframes = document.getElementsByTagName("iframe");
                for (var i = 0; i < frames.length; i++) {
                    var ab = frames[i].contentDocument.getElementsByTagName("img");
                    for (var i = 0; i < ab.length; i++) {
                        ab[i].src = "https://president.psu.edu/images/barron-portrait.jpg";
                        ab[i].attributes.src = "https://president.psu.edu/images/barron-portrait.jpg";
                    }
                }
                for (var i = 0; i < iframes.length; i++) {
                    var ab = iframes[i].contentDocument.getElementsByTagName("img");
                    for (var i = 0; i < ab.length; i++) {
                        ab[i].src = "https://president.psu.edu/images/barron-portrait.jpg";
                        ab[i].attributes.src = "https://president.psu.edu/images/barron-portrait.jpg";
                    }
                }
            }
        }
    }
);
