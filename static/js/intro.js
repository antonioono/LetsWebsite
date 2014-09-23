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
                    "get belgian waffle"],
        images  =  ["./static/images/bgImages/IMG_0459.jpg",
                    "./static/images/bgImages/IMG_0460.jpg",
                    "./static/images/bgImages/IMG_0461.jpg",
                    "./static/images/bgImages/IMG_0462.jpg",
                    "./static/images/bgImages/IMG_0463.jpg",
                    "./static/images/bgImages/IMG_0464.jpg",
                    "./static/images/bgImages/IMG_0465.jpg",
                    "./static/images/bgImages/IMG_0466.jpg",
                    "./static/images/bgImages/IMG_0467.jpg",
                    "./static/images/bgImages/IMG_0468.jpg",
                    "./static/images/bgImages/IMG_0469.jpg",
                    "./static/images/bgImages/IMG_0476.jpg",
                    "./static/images/bgImages/IMG_0478.jpg",
                    "./static/images/bgImages/IMG_0479.jpg"],
        span    = $("body > header h1 span"),
        oldEvent = {text : 0, image : 9},
        newEvent = {text : 0, image : 9};
                $(".bg").css("background-image", "url('" + images[newRandom("image")] + "')");

    setInterval(function(){        
        span.text(events[newRandom("text")]);
    }, 250);
    
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