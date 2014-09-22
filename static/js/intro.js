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
        oldI = newI = 0;

    setInterval(function(){        
        newI = randomI(oldI);
        console.log(newI, oldI);
        oldI = newI;
               
        span.text(events[newI]);
        $(".bg").css("background-image", "url('" + images[newI] + "')");
    }, 125);
    
    function randomI(oldI) {
        var randI = Math.floor(Math.random() * events.length);
        compareI(newI, oldI);
        return newI;
    }
    
    function compareI(a, b) {
        if (a == b) {
            newI = Math.floor(Math.random() * events.length);
            compareI(newI, oldI);
        } else {
            return;
        }
    }
}); 