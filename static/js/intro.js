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
        oldI = newI = 0;

    setInterval(function(){        
               
        span.text(events[newRandomI()]);
        $(".bg").css("background-image", "url('" + images[newRandomI()] + "')");
    }, 250);
    
    function newRandomI() {
        newI = randomI(oldI);
        oldI = newI;
        return newI;
    }
    
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