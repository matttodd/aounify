var sugar = false;
var url = "https://rawgit.com/kylesferrazza/barronify/master/aoun.jpg"

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            sugar = !sugar;
            if (sugar) {
                var a = document.getElementsByTagName("img");
                for (var i = 0; i < a.length; i++) {
                    a[i].src = url;
                    a[i].attributes.src = url;
                }
                var frames = document.getElementsByTagName("frame");
                var iframes = document.getElementsByTagName("iframe");
                for (var i = 0; i < frames.length; i++) {
                    var ab = frames[i].contentDocument.getElementsByTagName("img");
                    for (var i = 0; i < ab.length; i++) {
                        ab[i].src = url;
                        ab[i].attributes.src = url;
                    }
                }
                for (var i = 0; i < iframes.length; i++) {
                    var ab = iframes[i].contentDocument.getElementsByTagName("img");
                    for (var i = 0; i < ab.length; i++) {
                        ab[i].src = url;
                        ab[i].attributes.src = url;
                    }
                }
            }
        }
    }
);
