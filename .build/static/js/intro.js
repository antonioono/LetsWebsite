$(document).ready(function(){
    var events  =  ["maecenas faucibus mollis interdum",
                    "vestibulum id ligula porta",
                    "felis euismod semper",
                    "donec id elit non mi",
                    "porta gravida at eget metus",
                    "duis mollis"],
        span    = $("body > header h1 span"),
        i       = 0;

    setInterval(function(){
        var title = events[i];
        incrementEvent(title);
        i++;
        
        if (i >= events.length) {
            i = 1;
        }
    }, 250);

    function incrementEvent(title) {
        $(span).text(title);
        console.log(span);
    }
});