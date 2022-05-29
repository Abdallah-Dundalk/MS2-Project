addEventListener("DOMContentLoaded", function() {
    let outerRings = document.getElementsByClassName("outer-ring");
    for (let outerRing of outerRings) {
        outerRing.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="top-row-left-dial") {
                incrementClicksTopLeft ();
                rotateRingTopLeft ();
            } else if (this.getAttribute("data-type")==="middle-row-left-dial") {
                incrementClicksMiddleLeft ();
                rotateRingMiddleLeft ();
            } else if (this.getAttribute("data-type")==="bottom-row-left-dial") {
                incrementClicksBottomLeft ();
                rotateRingBottomLeft ();
            } else if (this.getAttribute("data-type")==="top-row-middle-dial") {
                incrementClicksTopMiddle ();
                rotateRingTopMiddle ();
            }  else if (this.getAttribute("data-type")==="middle-row-center-dial") {
                incrementClicksCenter ();
                rotateRingCenter ();
            } else if (this.getAttribute("data-type")==="bottom-row-center-dial") {
                incrementClicksBottomMiddle ();
                rotateRingBottomMiddle ();
            } else if (this.getAttribute("data-type")==="top-row-right-dial") {
                incrementClicksTopRight ();
                rotateRingTopRight ();
            }  else if (this.getAttribute("data-type")==="middle-row-right-dial") {
                incrementClicksMiddleRight ();
                rotateRingMiddleRight ();
            } else if (this.getAttribute("data-type")==="bottom-row-right-dial") {
                incrementClicksBottomRight ();
                rotateRingBottomRight ();
            //break
            } 
    })
    }

})

addEventListener("DOMContentLoaded", function() {
    let middleRings = document.getElementsByClassName("middle-ring");
    for (let middleRing of middleRings) {
        middleRing.addEventListener("click", function() {
if (this.getAttribute("data-type")==="top-row-left-inner-dial") {
                incrementClicksTopLeftInnerDial ();
                rotateRingTopLeftInnerDial ();
            } else if (this.getAttribute("data-type")==="middle-row-left-inner-dial") {
                incrementClicksMiddleLeftInnerDial ();
                rotateRingMiddleLeftInnerDial ();
            } else if (this.getAttribute("data-type")==="bottom-row-left-inner-dial") {
                incrementClicksBottomLeftInnerDial ();
                rotateRingBottomLeftInnerDial ();
            } else if (this.getAttribute("data-type")==="top-row-middle-inner-dial") {
                incrementClicksTopMiddleInnerDial ();
                rotateRingTopMiddleInnerDial ();
            }  else if (this.getAttribute("data-type")==="middle-row-center-inner-dial") {
                incrementClicksCenterInnerDial ();
                rotateRingCenterInnerDial ();
            } else if (this.getAttribute("data-type")==="bottom-row-center-inner-dial") {
                incrementClicksBottomMiddleInnerDial ();
                rotateRingBottomMiddleInnerDial ();
            } else if (this.getAttribute("data-type")==="top-row-right-inner-dial") {
                incrementClicksTopRightInnerDial ();
                rotateRingTopRightInnerDial ();
            }  else if (this.getAttribute("data-type")==="middle-row-right-inner-dial") {
                incrementClicksMiddleRightInnerDial ();
                rotateRingMiddleRightInnerDial ();
            } else if (this.getAttribute("data-type")==="bottom-row-right-inner-dial") {
                incrementClicksBottomRightInnerDial ();
                rotateRingBottomRightInnerDial ();
            }

    })
    }

})



// Left Column
function rotateRingTopLeft () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-left").innerText); 
    let topLeftDial = document.getElementById("top-row-left-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingMiddleLeft () {
    let rotateValue = parseInt(document.getElementById("rotate-value-middle-left").innerText); 
    let topLeftDial = document.getElementById("middle-row-left-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomLeft () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-left").innerText); 
    let topLeftDial = document.getElementById("bottom-row-left-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-left").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-left").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-left").innerText = 0)
    
}

function incrementClicksMiddleLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-middle-left").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-middle-left").innerText = 0)
    
}

function incrementClicksBottomLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-left").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-left").innerText = 0)
    
}

// Middle column

function rotateRingTopMiddle () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-middle").innerText); 
    let topLeftDial = document.getElementById("top-row-middle-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingCenter () {
    let rotateValue = parseInt(document.getElementById("rotate-value-center").innerText); 
    let topLeftDial = document.getElementById("middle-row-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomMiddle () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-center").innerText); 
    let topLeftDial = document.getElementById("bottom-row-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopMiddle () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-middle").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-middle").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-middle").innerText = 0)
    
}

function incrementClicksCenter () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-center").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-center").innerText = 0)
    
}

function incrementClicksBottomMiddle () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-center").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-center").innerText = 0)
}

// Right Column

function rotateRingTopRight () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-right").innerText); 
    let topLeftDial = document.getElementById("top-row-right-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingMiddleRight () {
    let rotateValue = parseInt(document.getElementById("rotate-value-middle-right").innerText); 
    let topLeftDial = document.getElementById("middle-row-right-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomRight () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-right").innerText); 
    let topLeftDial = document.getElementById("bottom-row-right-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-right").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-right").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-right").innerText = 0)
    
}

function incrementClicksMiddleRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-middle-right").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-middle-right").innerText = 0)
    
}

function incrementClicksBottomRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-right").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-right").innerText = 0)
    
}

//inner dials

// Left Column
function rotateRingTopLeftInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText); 
    let topLeftDial = document.getElementById("top-row-left-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingMiddleLeftInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText); 
    let topLeftDial = document.getElementById("middle-row-left-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomLeftInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText); 
    let topLeftDial = document.getElementById("bottom-row-left-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-left-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-left-inner-dial").innerText = 0)
    
}

function incrementClicksMiddleLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-middle-left-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-middle-left-inner-dial").innerText = 0)
    
}

function incrementClicksBottomLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-left-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-left-inner-dial").innerText = 0)
    
}

// Middle column

function rotateRingTopMiddleInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-middle-inner-dial").innerText); 
    let topLeftDial = document.getElementById("top-row-middle-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingCenterInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText); 
    let topLeftDial = document.getElementById("middle-row-center-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomMiddleInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText); 
    let topLeftDial = document.getElementById("bottom-row-center-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopMiddleInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-middle-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-middle-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-middle-inner-dial").innerText = 0)
    
}

function incrementClicksCenterInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-center-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-center-inner-dial").innerText = 0)
    
}

function incrementClicksBottomMiddleInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-center-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-center-inner-dial").innerText = 0)
}

// Right Column

function rotateRingTopRightInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-right-inner-dial").innerText); 
    let topLeftDial = document.getElementById("top-row-right-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingMiddleRightInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText); 
    let topLeftDial = document.getElementById("middle-row-right-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateRingBottomRightInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText); 
    let topLeftDial = document.getElementById("bottom-row-right-inner-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(360deg)";
    } else {
        console.log("fail");
    }
    
}

function incrementClicksTopRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-right-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-top-right-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-top-right-inner-dial").innerText = 0)
    
}

function incrementClicksMiddleRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-middle-right-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-middle-right-inner-dial").innerText = 0)
    
}

function incrementClicksBottomRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText) ;
    if (oldNumOfClicks <= 2) {
        document.getElementById("rotate-value-bottom-right-inner-dial").innerText = ++oldNumOfClicks;
    } else (document.getElementById("rotate-value-bottom-right-inner-dial").innerText = 0)
    
}