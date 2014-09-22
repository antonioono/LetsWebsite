$(document).ready(function(){
    var events  =  ["maecenas faucibus mollis interdum",
                    "vestibulum id ligula porta",
                    "felis euismod semper",
                    "donec id elit non mi",
                    "porta gravida at eget metus",
                    "duis mollis"],
        images  =  ["http://placekitten.com/2048",
                    "http://placekitten.com/2049",
                    "http://placekitten.com/2050",
                    "http://placekitten.com/2051",
                    "http://placekitten.com/2052",
                    "http://placekitten.com/2053"],
        span    = $("body > header h1 span"),
        i       = 0;

    setInterval(function(){
        var title = events[i];
        incrementEvent(title);
        i++;
        
        span.text(title);
        $("body").css("background-image", "url('" + images[i] + "')");

        i++;
        if (i >= events.length) {
            i = 1;
        }
    }, 125);

    function incrementEvent(title) {
        $(span).text(title);
        console.log(span);
    }
}); 