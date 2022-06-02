addEventListener("DOMContentLoaded", function() {
    let outerRings = document.getElementsByClassName("outer-ring");
    for (let outerRing of outerRings) {
        outerRing.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="top-row-left-dial") {
                incrementClicksTopLeft ();
                rotateRingTopLeft ();
                matchingValuesTopLeft ()
            } else if (this.getAttribute("data-type")==="middle-row-left-dial") {
                incrementClicksMiddleLeft ();
                rotateRingMiddleLeft ();
                matchingValuesMiddleLeft ()
            } else if (this.getAttribute("data-type")==="bottom-row-left-dial") {
                incrementClicksBottomLeft ();
                rotateRingBottomLeft ();
                matchingValuesBottomLeft ()
            } else if (this.getAttribute("data-type")==="top-row-middle-dial") {
                incrementClicksTopMiddle ();
                rotateRingTopMiddle ();
                matchingValuesTopMiddle ()
            }  else if (this.getAttribute("data-type")==="middle-row-center-dial") {
                incrementClicksCenter ();
                rotateRingCenter ();
                matchingValuesCenter ()
            } else if (this.getAttribute("data-type")==="bottom-row-center-dial") {
                incrementClicksBottomMiddle ();
                rotateRingBottomMiddle ();
                matchingValuesBottomMiddle ()
            } else if (this.getAttribute("data-type")==="top-row-right-dial") {
                incrementClicksTopRight ();
                rotateRingTopRight ();
                matchingValuesTopRight ()
            }  else if (this.getAttribute("data-type")==="middle-row-right-dial") {
                incrementClicksMiddleRight ();
                rotateRingMiddleRight ();
                matchingValuesMiddleRight ()
            } else if (this.getAttribute("data-type")==="bottom-row-right-dial") {
                incrementClicksBottomRight ();
                rotateRingBottomRight ();
                matchingValuesBottomRight ()
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
                matchingValuesTopLeft ()
            } else if (this.getAttribute("data-type")==="middle-row-left-inner-dial") {
                incrementClicksMiddleLeftInnerDial ();
                rotateRingMiddleLeftInnerDial ();
                matchingValuesMiddleLeft ()
            } else if (this.getAttribute("data-type")==="bottom-row-left-inner-dial") {
                incrementClicksBottomLeftInnerDial ();
                rotateRingBottomLeftInnerDial ();
                matchingValuesBottomLeft ()
            } else if (this.getAttribute("data-type")==="top-row-middle-inner-dial") {
                incrementClicksTopMiddleInnerDial ();
                rotateRingTopMiddleInnerDial ();
                matchingValuesTopMiddle ()
            }  else if (this.getAttribute("data-type")==="middle-row-center-inner-dial") {
                incrementClicksCenterInnerDial ();
                rotateRingCenterInnerDial ();
                matchingValuesCenter ()
            } else if (this.getAttribute("data-type")==="bottom-row-center-inner-dial") {
                incrementClicksBottomMiddleInnerDial ();
                rotateRingBottomMiddleInnerDial ();
                matchingValuesBottomMiddle ()
            } else if (this.getAttribute("data-type")==="top-row-right-inner-dial") {
                incrementClicksTopRightInnerDial ();
                rotateRingTopRightInnerDial ();
                matchingValuesTopRight ()
            }  else if (this.getAttribute("data-type")==="middle-row-right-inner-dial") {
                incrementClicksMiddleRightInnerDial ();
                rotateRingMiddleRightInnerDial ();
                matchingValuesMiddleRight ()
            } else if (this.getAttribute("data-type")==="bottom-row-right-inner-dial") {
                incrementClicksBottomRightInnerDial ();
                rotateRingBottomRightInnerDial ();
                matchingValuesBottomRight ()
            }

    })
    }

})

addEventListener("DOMContentLoaded", function() {
        let randomNum1 = Math.floor(Math.random()*3) + 1;
        let randomNum2 = Math.floor(Math.random()*3) + 1;
        let randomNum3 = Math.floor(Math.random()*3) + 1;
        let randomNum4 = Math.floor(Math.random()*3) + 1;
        let randomNum5 = Math.floor(Math.random()*3) + 1;
        let randomNum6 = Math.floor(Math.random()*3) + 1;
        let randomNum7 = Math.floor(Math.random()*3) + 1;
        let randomNum8 = Math.floor(Math.random()*3) + 1;
        let randomNum9 = Math.floor(Math.random()*3) + 1;
        document.getElementById("random-num-top-left").innerText = randomNum1;
        document.getElementById("random-num-middle-left").textContent = randomNum2;
        document.getElementById("random-num-bottom-left").textContent = randomNum3;
        document.getElementById("random-num-top-middle").textContent = randomNum4;
        document.getElementById("random-num-center").textContent = randomNum5;
        document.getElementById("random-num-bottom-middle").textContent = randomNum6;
        document.getElementById("random-num-top-right").textContent = randomNum7;
        document.getElementById("random-num-middle-right").textContent = randomNum8;
        document.getElementById("random-num-bottom-right").textContent = randomNum9;
        randomColorTopLeft ();
        randomColorTopMiddle ();
        randomColorTopRight ();
        randomColorMiddleLeft ();
        randomColorCenter ();
        randomColorMiddleRight ();
        randomColorBottomLeft ();
        randomColorBottomMiddle ();
        randomColorBottomRight ();
})

addEventListener("DOMContentLoaded", function() {
    rotateCenterDialTopLeft ();
    rotateCenterDialTopMiddle ();
    rotateCenterDialTopRight ();
    rotateCenterDialMiddleLeft ();
    rotateCenterDialMiddle ();
    rotateCenterDialMiddleRight ();
    rotateCenterDialBottomLeft ();
    rotateCenterDialBottomMiddle ();
    rotateCenterDialBottomRight ();
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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
        topLeftDial.style.transform = "rotate(0deg)";
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


function rotateCenterDialTopLeft () {
    let rotateValue = parseInt(document.getElementById("random-num-top-left").innerText); 
    let topLeftDial = document.getElementById("top-left-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialTopMiddle () {
    let rotateValue = parseInt(document.getElementById("random-num-top-middle").innerText); 
    let topLeftDial = document.getElementById("top-middle-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialTopRight () {
    let rotateValue = parseInt(document.getElementById("random-num-top-right").innerText); 
    let topLeftDial = document.getElementById("top-right-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialMiddleLeft () {
    let rotateValue = parseInt(document.getElementById("random-num-middle-left").innerText); 
    let topLeftDial = document.getElementById("middle-left-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialMiddle () {
    let rotateValue = parseInt(document.getElementById("random-num-center").innerText); 
    let topLeftDial = document.getElementById("center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialMiddleRight () {
    let rotateValue = parseInt(document.getElementById("random-num-middle-right").innerText); 
    let topLeftDial = document.getElementById("middle-right-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialBottomLeft () {
    let rotateValue = parseInt(document.getElementById("random-num-bottom-left").innerText); 
    let topLeftDial = document.getElementById("bottom-left-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialBottomMiddle () {
    let rotateValue = parseInt(document.getElementById("random-num-bottom-middle").innerText); 
    let topLeftDial = document.getElementById("bottom-middle-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

function rotateCenterDialBottomRight () {
    let rotateValue = parseInt(document.getElementById("random-num-bottom-right").innerText); 
    let topLeftDial = document.getElementById("bottom-right-center-dial");
    if (rotateValue === 1) {
        topLeftDial.style.transform = "rotate(90deg)";
    } else if (rotateValue === 2) {
        topLeftDial.style.transform = "rotate(180deg)";
    } else if (rotateValue === 3) {
        topLeftDial.style.transform = "rotate(270deg)";
    } else if (rotateValue === 0) {
        topLeftDial.style.transform = "rotate(0deg)";
    } else {
        console.log("fail");
    }
    
}

// this function has colors removed as a test
function matchingValuesTopLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-top-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText);
    let centerDial = document.getElementById("top-left-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
} else {
    randomColorTopLeft ()
}
}

function matchingValuesTopMiddle () {
    let num1 = parseInt(document.getElementById("rotate-value-top-middle").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-middle").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-middle-inner-dial").innerText);
    let centerDial = document.getElementById("top-middle-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
    randomColorTopMiddle ()
}
}

function matchingValuesTopRight () {
    let num1 = parseInt(document.getElementById("rotate-value-top-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-right-inner-dial").innerText);
    let centerDial = document.getElementById("top-right-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorTopRight ();
}
}

function matchingValuesMiddleLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-middle-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-middle-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText);
    let centerDial = document.getElementById("middle-left-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorMiddleLeft ()
}
}

function matchingValuesCenter () {
    let num1 = parseInt(document.getElementById("rotate-value-center").innerText);
    let num2 = parseInt(document.getElementById("random-num-center").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText);
    let centerDial = document.getElementById("center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorCenter ();
    }
}

function matchingValuesMiddleRight () {
    let num1 = parseInt(document.getElementById("rotate-value-middle-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-middle-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText);
    let centerDial = document.getElementById("middle-right-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorMiddleRight ();
}
}

function matchingValuesBottomLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText);
    let centerDial = document.getElementById("bottom-left-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomLeft ();
}
}

function matchingValuesBottomMiddle () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-center").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-middle").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText);
    let centerDial = document.getElementById("bottom-middle-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomMiddle ();
}
}

function matchingValuesBottomRight () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText);
    let centerDial = document.getElementById("bottom-right-center-dial")

    if (num1 == num2 && num3 == num2) {
        centerDial.style.background = "green"
    } else if (num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (num3 == num2 && num1 !== num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomRight ();
}
}

function randomColorTopLeft () {
    let num1 = parseInt(document.getElementById("random-num-top-left").innerText);
    let innerDial = document.getElementById("top-left-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
}  

function randomColorTopMiddle () {
    let num1 = parseInt(document.getElementById("random-num-top-middle").innerText);
    let innerDial = document.getElementById("top-middle-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
}  

function randomColorTopRight () {
    let num1 = parseInt(document.getElementById("random-num-top-right").innerText);
    let innerDial = document.getElementById("top-right-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
}  

function randomColorMiddleLeft () {
    let num1 = parseInt(document.getElementById("random-num-middle-left").innerText);
    let innerDial = document.getElementById("middle-left-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
}  

function randomColorCenter () {
    let num1 = parseInt(document.getElementById("random-num-center").innerText);
    let innerDial = document.getElementById("center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 

function randomColorMiddleRight () {
    let num1 = parseInt(document.getElementById("random-num-middle-right").innerText);
    let innerDial = document.getElementById("middle-right-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 

function randomColorBottomLeft () {
    let num1 = parseInt(document.getElementById("random-num-bottom-left").innerText);
    let innerDial = document.getElementById("bottom-left-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 

function randomColorBottomMiddle () {
    let num1 = parseInt(document.getElementById("random-num-bottom-middle").innerText);
    let innerDial = document.getElementById("bottom-middle-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 

function randomColorBottomRight () {
    let num1 = parseInt(document.getElementById("random-num-bottom-right").innerText);
    let innerDial = document.getElementById("bottom-right-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 