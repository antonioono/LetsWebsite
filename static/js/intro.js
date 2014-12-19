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
        bgTurn   = 0;        

    setInterval(function(){        
        span.text(events[newRandom()]);
    }, 125);

    /*
setInterval(function(){
        $(".bg").css("opacity", bgTurn);
        var gradient = makeGradient();
        if (bgTurn == 0) {
            $(".bg .inner").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 1;
        } else {
            $("body").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 0;
        }
    }, 1000);
*/
    
    setInterval(function(){
        $(".bg").css("opacity", bgTurn);
    }, 62.5);
    
    setInterval(function(){
        var gradient = makeGradient();
        if (bgTurn == 0) {
            $(".bg .inner").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 1;
        } else {
            $("body").css("background-image", "-webkit-linear-gradient("+gradient[0]+" 0%,"+gradient[1]+" 100%)");
            bgTurn = 0;
        }
    }, 125)
    
    function makeGradient() {
        var color,
            colorValues     = [0,0,0],
            primaryRgb      = Math.floor(Math.random()*3),
            secondaryRgb    = deDupe(Math.floor(Math.random()*3), primaryRgb);
            
        colorValues[primaryRgb]   = 255;
        colorValues[secondaryRgb] = Math.floor(Math.random()*255);
        color = "rgb("+colorValues[0]+","+colorValues[1]+","+colorValues[2]+")";
        var secondColorValues = colorValues;
//         secondColorValues[secondaryRgb] = Math.max((colorValues[secondaryRgb] - 100), 0);
//         secondColorValues[secondaryRgb] = Math.floor(Math.random()*255);
        secondColorValues[secondaryRgb] = 255;
        secondColorValues[primaryRgb] = Math.floor(Math.random()*(255 - 128) + 128);
        var secondColor = "rgb("+secondColorValues[0]+","+secondColorValues[1]+","+secondColorValues[2]+")";
        return [color, secondColor];
    }
    
    function newRandom() {
        newEvent = deDupe(Math.floor(Math.random() * events.length), oldEvent);
        oldEvent = newEvent;
        return newEvent;
    }
    
    function deDupe(a, b) {
        if (a === b) {
            return (b == 0) ? a + 1 : a - 1;
        } else {
            return a;
        }
    }
}); 