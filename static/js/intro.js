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
        oldEvent = 0,
        newEvent = 0,
        bgTurn   = 1;        

    changeBackground();
    
    setInterval(function(){        
        span.text(events[newRandom()]);
    }, 125);

    setInterval(function(){
        changeBackground();
    }, 5000);
    
    function newRandom() {
        newEvent = deDupe(Math.floor(Math.random() * events.length), oldEvent);
        oldEvent = newEvent;
        return newEvent;
    }

    function changeBackground() {
        $(".bg.back").css("opacity", bgTurn);
        var gradient = makeGradient();
        if (bgTurn == 1) {
            $(".bg.back .inner").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 0;
        } else {
            $(".bg.front .inner").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 1;
        }
    }
    
    function makeGradient() {
        var firstColor, secondColor, secondColorValues, firstColorValues, primaryRgb, secondaryRgb;
        firstColorValues                = [0,0,0];
        primaryRgb                      = Math.floor(Math.random()*3);
        secondaryRgb                    = deDupe(Math.floor(Math.random()*3), primaryRgb);
        firstColorValues[primaryRgb]    = 255;
        firstColorValues[secondaryRgb]  = Math.floor(Math.random()*255);
        firstColor                      = "rgb("+firstColorValues[0]+","+firstColorValues[1]+","+firstColorValues[2]+")";
        secondColorValues               = firstColorValues;
        secondColorValues[secondaryRgb] = 255;
        secondColorValues[primaryRgb]   = Math.floor(Math.random()*(255 - 128) + 128);
        secondColor                     = "rgb("+secondColorValues[0]+","+secondColorValues[1]+","+secondColorValues[2]+")";
        return [firstColor, secondColor];
    }
    
    function deDupe(a, b) {
        if (a === b) {
            return (b == 0) ? a + 1 : a - 1;
        } else {
            return a;
        }
    }
}); 