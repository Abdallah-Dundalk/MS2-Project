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
            } 
    })
    }
    document.getElementById("new-game").addEventListener("click", resetGame);
    document.getElementById("start-game").addEventListener("click", parentCountdown);
    

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
        let randomColor1 = Math.floor(Math.random()*3) + 1;
        let randomColor2 = Math.floor(Math.random()*3) + 1;
        let randomColor3 = Math.floor(Math.random()*3) + 1;
        let randomColor4 = Math.floor(Math.random()*3) + 1;
        let randomColor5 = Math.floor(Math.random()*3) + 1;
        let randomColor6 = Math.floor(Math.random()*3) + 1;
        let randomColor7 = Math.floor(Math.random()*3) + 1;
        let randomColor8 = Math.floor(Math.random()*3) + 1;
        let randomColor9 = Math.floor(Math.random()*3) + 1;
        document.getElementById("random-num-top-left").innerText = randomColor1;
        document.getElementById("random-num-middle-left").textContent = randomColor2;
        document.getElementById("random-num-bottom-left").textContent = randomColor3;
        document.getElementById("random-num-top-middle").textContent = randomColor4;
        document.getElementById("random-num-center").textContent = randomColor5;
        document.getElementById("random-num-bottom-middle").textContent = randomColor6;
        document.getElementById("random-num-top-right").textContent = randomColor7;
        document.getElementById("random-num-middle-right").textContent = randomColor8;
        document.getElementById("random-num-bottom-right").textContent = randomColor9;

        document.getElementById("random-color-top-left").innerText = randomNum1;
        document.getElementById("random-color-middle-left").textContent = randomNum2;
        document.getElementById("random-color-bottom-left").textContent = randomNum3;
        document.getElementById("random-color-top-middle").textContent = randomNum4;
        document.getElementById("random-color-center").textContent = randomNum5;
        document.getElementById("random-color-bottom-middle").textContent = randomNum6;
        document.getElementById("random-color-top-right").textContent = randomNum7;
        document.getElementById("random-color-middle-right").textContent = randomNum8;
        document.getElementById("random-color-bottom-right").textContent = randomNum9;

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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-left").innerText = 0;
    } 
    
}

function incrementClicksMiddleLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-left").innerText = 0;
    }
        
    
}

function incrementClicksBottomLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-left").innerText = 0;
    }
    
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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-middle").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-middle").innerText = 0;
    }
    
}

function incrementClicksCenter () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-center").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-center").innerText = 0;
    }
    
}

function incrementClicksBottomMiddle () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-center").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-center").innerText = 0;
    }
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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-right").innerText = 0;
    }
    
}

function incrementClicksMiddleRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-right").innerText = 0;
    }
    
}

function incrementClicksBottomRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-right").innerText = 0;
    }
    
}

//inner dials

// Left Column
function rotateRingTopLeftInnerDial () {
    let rotateValue = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText); 
    let topLeftDial = document.getElementById("top-row-left-inner-dial");
    let toggleButtonText = document.getElementById("toggle-button");

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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") { 
        document.getElementById("rotate-value-top-left-inner-dial").innerText = 0;
}
}

function incrementClicksMiddleLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-left-inner-dial").innerText = 0;
    }
    
}

function incrementClicksBottomLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-left-inner-dial").innerText = 0;
    }
    
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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-middle-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-middle-inner-dial").innerText = 0;
    }
    
}

function incrementClicksCenterInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-center-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red"){
        document.getElementById("rotate-value-center-inner-dial").innerText = 0;
    } 
    
}

function incrementClicksBottomMiddleInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-center-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-center-inner-dial").innerText = 0;
    } 
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
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-right-inner-dial").innerText = 0;
    } 
    
}

function incrementClicksMiddleRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-right-inner-dial").innerText = 0;
    }
    
}

function incrementClicksBottomRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-right-inner-dial").innerText = 0;
    }
    
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


function matchingValuesTopLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-top-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-top-left").innerText);
    let centerDial = document.getElementById("top-left-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green";
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green";
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green";
    } else {
        randomColorTopLeft ();
}
}

function matchingValuesTopMiddle () {
    let num1 = parseInt(document.getElementById("rotate-value-top-middle").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-middle").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-middle-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-top-middle").innerText);
    let centerDial = document.getElementById("top-middle-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorTopMiddle ();
}
}

function matchingValuesTopRight () {
    let num1 = parseInt(document.getElementById("rotate-value-top-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-top-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-top-right-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-top-right").innerText);
    let centerDial = document.getElementById("top-right-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorTopRight ();
}
}

function matchingValuesMiddleLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-middle-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-middle-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-middle-left").innerText);
    let centerDial = document.getElementById("middle-left-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorMiddleLeft ();
}
}

function matchingValuesCenter () {
    let num1 = parseInt(document.getElementById("rotate-value-center").innerText);
    let num2 = parseInt(document.getElementById("random-num-center").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-center").innerText);
    let centerDial = document.getElementById("center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorCenter ();
    }
}

function matchingValuesMiddleRight () {
    let num1 = parseInt(document.getElementById("rotate-value-middle-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-middle-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-middle-right").innerText);
    let centerDial = document.getElementById("middle-right-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorMiddleRight ();
}
}

function matchingValuesBottomLeft () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-left").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-left").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-bottom-left").innerText);
    let centerDial = document.getElementById("bottom-left-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomLeft ();
}
}

function matchingValuesBottomMiddle () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-center").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-middle").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-bottom-middle").innerText);
    let centerDial = document.getElementById("bottom-middle-center-dial")

    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomMiddle ();
}
}

// you are working on this one!!!!!!!!
function matchingValuesBottomRight () {
    let num1 = parseInt(document.getElementById("rotate-value-bottom-right").innerText);
    let num2 = parseInt(document.getElementById("random-num-bottom-right").innerText);
    let num3 = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText);
    let randomColorNum = parseInt(document.getElementById("random-color-bottom-right").innerText);
    let centerDial = document.getElementById("bottom-right-center-dial");
    
    if (randomColorNum === 1 && num1 == num2 && num3 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 2 && num3 == num2 && num1 !== num2) {
        centerDial.style.background = "green"
    } else if (randomColorNum === 3 && num3 == num2 && num1 == num2) {
    centerDial.style.background = "green"
    } else {
        randomColorBottomRight ();
}
}

function randomColorTopLeft () {
    let num1 = parseInt(document.getElementById("random-color-top-left").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-top-middle").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-top-right").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-middle-left").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-center").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-middle-right").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-bottom-left").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-bottom-middle").innerText);
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
    let num1 = parseInt(document.getElementById("random-color-bottom-right").innerText);
    let innerDial = document.getElementById("bottom-right-center-dial");

if (num1 === 1) {
    innerDial.style.backgroundColor = "red";
} else if (num1 === 2) {
    innerDial.style.backgroundColor = "blue";
} else if (num1 === 3) {
    innerDial.style.backgroundColor = "purple";
}
} 

function toggleButton () {
    let tButton = document.getElementById("toggle-button");

    if (tButton.innerText == "Activate Red") {
        tButton.innerText = "Activate Blue"
    } else {
        tButton.innerText = "Activate Red"
    }
}

function toggleButtonColor () {
    let tButton = document.getElementById("toggle-button");

    if (tButton.innerText == "Activate Red") {
        tButton.style.backgroundColor = "Blue"
    } else {
        tButton.style.backgroundColor= "Red"
    }
}

// function countdown () {
//     let timeRemaining = 60;
//     let timerElement = document.getElementById("timer");

//     let countdown = setInterval( function() {
//         if (timeRemaining <= 0) {
//             clearInterval(timeRemaining);
//             document.getElementById("timer").value = 60 - timeRemaining;
//             timeRemaining -= 1;
//         }
//     }
//     )

// }

function parentCountdown () {
    let timeRemaining = 60;
    let timerElement = document.getElementById("timer");
        
        let timerInterval = setInterval( countdown, 1000); 
    
        function countdown() {
            if (timeRemaining <= -1) {
                clearInterval(timerInterval);
                document.getElementById("timer").value = 60 - timeRemaining;
                timeRemaining -= 1;
                gameOver ()
            } else {
                timerElement.innerText = timeRemaining;
                timeRemaining --;
        }
    }
}


function gameOver () {
    let gameOver = document.getElementById("game-over");
    gameOver.innerText = "Missiles Launched....Game Over"
}

function resetGame () {
    let randomNum1 = Math.floor(Math.random()*3) + 1;
        let randomNum2 = Math.floor(Math.random()*3) + 1;
        let randomNum3 = Math.floor(Math.random()*3) + 1;
        let randomNum4 = Math.floor(Math.random()*3) + 1;
        let randomNum5 = Math.floor(Math.random()*3) + 1;
        let randomNum6 = Math.floor(Math.random()*3) + 1;
        let randomNum7 = Math.floor(Math.random()*3) + 1;
        let randomNum8 = Math.floor(Math.random()*3) + 1;
        let randomNum9 = Math.floor(Math.random()*3) + 1;
        let randomColor1 = Math.floor(Math.random()*3) + 1;
        let randomColor2 = Math.floor(Math.random()*3) + 1;
        let randomColor3 = Math.floor(Math.random()*3) + 1;
        let randomColor4 = Math.floor(Math.random()*3) + 1;
        let randomColor5 = Math.floor(Math.random()*3) + 1;
        let randomColor6 = Math.floor(Math.random()*3) + 1;
        let randomColor7 = Math.floor(Math.random()*3) + 1;
        let randomColor8 = Math.floor(Math.random()*3) + 1;
        let randomColor9 = Math.floor(Math.random()*3) + 1;
        document.getElementById("random-num-top-left").innerText = randomColor1;
        document.getElementById("random-num-middle-left").textContent = randomColor2;
        document.getElementById("random-num-bottom-left").textContent = randomColor3;
        document.getElementById("random-num-top-middle").textContent = randomColor4;
        document.getElementById("random-num-center").textContent = randomColor5;
        document.getElementById("random-num-bottom-middle").textContent = randomColor6;
        document.getElementById("random-num-top-right").textContent = randomColor7;
        document.getElementById("random-num-middle-right").textContent = randomColor8;
        document.getElementById("random-num-bottom-right").textContent = randomColor9;

        document.getElementById("random-color-top-left").innerText = randomNum1;
        document.getElementById("random-color-middle-left").textContent = randomNum2;
        document.getElementById("random-color-bottom-left").textContent = randomNum3;
        document.getElementById("random-color-top-middle").textContent = randomNum4;
        document.getElementById("random-color-center").textContent = randomNum5;
        document.getElementById("random-color-bottom-middle").textContent = randomNum6;
        document.getElementById("random-color-top-right").textContent = randomNum7;
        document.getElementById("random-color-middle-right").textContent = randomNum8;
        document.getElementById("random-color-bottom-right").textContent = randomNum9;

        randomColorTopLeft ();
        randomColorTopMiddle ();
        randomColorTopRight ();
        randomColorMiddleLeft ();
        randomColorCenter ();
        randomColorMiddleRight ();
        randomColorBottomLeft ();
        randomColorBottomMiddle ();
        randomColorBottomRight ();

        test();
}

function test () {
    rotateValueTopLeft = document.getElementById("rotate-value-top-left");
    rotateValueTopMiddle = document.getElementById("rotate-value-top-middle");
    rotateValueTopRight = document.getElementById("rotate-value-top-right");
    rotateValueMiddleLeft = document.getElementById("rotate-value-middle-left");
    rotateValueCenter = document.getElementById("rotate-value-center");
    rotateValueMiddleRight = document.getElementById("rotate-value-middle-right");
    rotateValueBottomLeft = document.getElementById("rotate-value-bottom-left");
    rotateValueBottomMiddle = document.getElementById("rotate-value-bottom-center");
    rotateValueBottomRight = document.getElementById("rotate-value-bottom-right");

    rotateValueTopLeft.innerText = 0;
    rotateValueTopMiddle.innerText = 0;
    rotateValueTopRight.innerText = 0;
    rotateValueMiddleLeft.innerText = 0;
    rotateValueCenter.innerText = 0;
    rotateValueMiddleRight.innerText = 0;
    rotateValueBottomLeft.innerText = 0;
    rotateValueBottomMiddle.innerText = 0;
    rotateValueBottomRight.innerText = 0;


    rotateValueTopLeftInnerDial = document.getElementById("rotate-value-top-left-inner-dial");
    rotateValueTopMiddleInnerDial = document.getElementById("rotate-value-top-middle-inner-dial");
    rotateValueTopRightInnerDial = document.getElementById("rotate-value-top-right-inner-dial");
    rotateValueMiddleLeftInnerDial = document.getElementById("rotate-value-middle-left-inner-dial");
    rotateValueCenterInnerDial = document.getElementById("rotate-value-center-inner-dial");
    rotateValueMiddleRightInnerDial = document.getElementById("rotate-value-middle-right-inner-dial");
    rotateValueBottomLeftInnerDial = document.getElementById("rotate-value-bottom-left-inner-dial");
    rotateValueBottomMiddleInnerDial = document.getElementById("rotate-value-bottom-center-inner-dial");
    rotateValueBottomRightInnerDial = document.getElementById("rotate-value-bottom-right-inner-dial");

    rotateValueTopLeftInnerDial.innerText = 0;
    rotateValueTopMiddleInnerDial.innerText = 0;
    rotateValueTopRightInnerDial.innerText = 0;
    rotateValueMiddleLeftInnerDial.innerText = 0;
    rotateValueCenterInnerDial.innerText = 0;
    rotateValueMiddleRightInnerDial.innerText = 0;
    rotateValueBottomLeftInnerDial.innerText = 0;
    rotateValueBottomMiddleInnerDial.innerText = 0;
    rotateValueBottomRightInnerDial.innerText = 0;


    rotateRingTopLeft ();
    rotateRingTopMiddle ();
    rotateRingTopRight ();
    rotateRingMiddleLeft ();
    rotateRingCenter ();
    rotateRingMiddleRight ();
    rotateRingBottomLeft ();
    rotateRingBottomMiddle ();
    rotateRingBottomRight ();

    rotateCenterDialTopLeft ();
    rotateCenterDialTopMiddle ();
    rotateCenterDialTopRight ();
    rotateCenterDialMiddleLeft ();
    rotateCenterDialMiddle ();
    rotateCenterDialMiddleRight ();
    rotateCenterDialBottomLeft ();
    rotateCenterDialBottomMiddle ();
    rotateCenterDialBottomRight ();

    rotateRingTopLeftInnerDial ();
    rotateRingTopMiddleInnerDial ();
    rotateRingTopRightInnerDial ();
    rotateRingMiddleLeftInnerDial ();
    rotateRingCenterInnerDial ();
    rotateRingMiddleRightInnerDial ();
    rotateRingBottomLeftInnerDial ();
    rotateRingBottomMiddleInnerDial ();
    rotateRingBottomRightInnerDial ();

    
}