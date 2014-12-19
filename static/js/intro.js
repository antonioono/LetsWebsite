$(document).ready(function(){
    var events  =  ["go to the beach",
                    "go ice fishing in Michigan",
                    "eat",
                    "do lunch",
                    "go bouldering",
                    "find a nice hole in the wall",
                    "see what is happening over at victor's",
                    "do something",
                    "cook together",
                    "get out of here",
                    "get artisinal toast",
                    "dance",
                    "check out tropical tuesday at Brillbox",
                    "get belgian waffle"]
        span    = $("body > header h1 span"),
        oldEvent = {text : 0, image : 0},
        newEvent = {text : 0, image : 0};
        
    setInterval(function(){        
        span.text(events[newRandom("text")]);
//         $(".bg").css("background-image", "url('" + images[newRandom("image")] + "')");
    }, 500);
    
    function newRandom(kind) {
        newEvent[kind] = Math.floor(Math.random() * events.length);
        compare(newEvent[kind], oldEvent[kind], kind);
        oldEvent[kind] = newEvent[kind];
        return newEvent[kind];
    }
    
    function compare(a, b, kind) {
        if (a == b) {
            newEvent[kind] = Math.floor(Math.random() * events.length);
            compare(newEvent[kind], oldEvent[kind], kind);
        } else {
            return;
        }
    }
}); 