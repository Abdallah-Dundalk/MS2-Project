
/**
 * When page loads,clicking the outer dials will execute the functions for counting the number of clicks which will determine how many 90 degree rotations the ring will make.
 * Each click will make the rings rotate 90 degrees.
 * The score will update with each click if the updated rotation values match. Each ring has a roation value and if it matches the rotation value of thecenter ring, the score will increment.
 * Each ring has ists on score that is summed to give the total score which is also updated on each click.
 */
addEventListener("DOMContentLoaded", function() {
    let outerRings = document.getElementsByClassName("outer-ring");
    for (let outerRing of outerRings) {
        outerRing.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="top-row-left-dial") {
                incrementClicksTopLeft ();
                rotateRingTopLeft ();
                matchingValuesTopLeft ();
                score ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="middle-row-left-dial") {
                incrementClicksMiddleLeft ();
                rotateRingMiddleLeft ();
                matchingValuesMiddleLeft ();
                score4 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-left-dial") {
                incrementClicksBottomLeft ();
                rotateRingBottomLeft ();
                matchingValuesBottomLeft ();
                score7 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-row-middle-dial") {
                incrementClicksTopMiddle ();
                rotateRingTopMiddle ();
                matchingValuesTopMiddle ();
                score2 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="middle-row-center-dial") {
                incrementClicksCenter ();
                rotateRingCenter ();
                matchingValuesCenter ();
                score5 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-center-dial") {
                incrementClicksBottomMiddle ();
                rotateRingBottomMiddle ();
                matchingValuesBottomMiddle ();
                score8 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-row-right-dial") {
                incrementClicksTopRight ();
                rotateRingTopRight ();
                matchingValuesTopRight ();
                score3 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="middle-row-right-dial") {
                incrementClicksMiddleRight ();
                rotateRingMiddleRight ();
                matchingValuesMiddleRight ();
                score6 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-right-dial") {
                incrementClicksBottomRight ();
                rotateRingBottomRight ();
                matchingValuesBottomRight ();
                score9 ();
                totalScore ();
            } 
    })
    }
    document.getElementById("new-game").addEventListener("click", resetGame);
    document.getElementById("start-game").addEventListener("click", parentCountdown);
    document.getElementById("start-game").addEventListener("click", resetGame);
    document.getElementById("start-game").addEventListener("click", defaultGameStatusMessage);
    
})


/**
 * The below code does the same as the above code for the inner rings.
 */
addEventListener("DOMContentLoaded", function() {
    let middleRings = document.getElementsByClassName("middle-ring");
    for (let middleRing of middleRings) {
        middleRing.addEventListener("click", function() {
if (this.getAttribute("data-type")==="top-row-left-inner-dial") {
                incrementClicksTopLeftInnerDial ();
                rotateRingTopLeftInnerDial ();
                matchingValuesTopLeft ()
                score ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="middle-row-left-inner-dial") {
                incrementClicksMiddleLeftInnerDial ();
                rotateRingMiddleLeftInnerDial ();
                matchingValuesMiddleLeft ();
                score4 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-left-inner-dial") {
                incrementClicksBottomLeftInnerDial ();
                rotateRingBottomLeftInnerDial ();
                matchingValuesBottomLeft ();
                score7 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-row-middle-inner-dial") {
                incrementClicksTopMiddleInnerDial ();
                rotateRingTopMiddleInnerDial ();
                matchingValuesTopMiddle ();
                score2 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="middle-row-center-inner-dial") {
                incrementClicksCenterInnerDial ();
                rotateRingCenterInnerDial ();
                matchingValuesCenter ();
                score5 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-center-inner-dial") {
                incrementClicksBottomMiddleInnerDial ();
                rotateRingBottomMiddleInnerDial ();
                matchingValuesBottomMiddle ();
                score8 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-row-right-inner-dial") {
                incrementClicksTopRightInnerDial ();
                rotateRingTopRightInnerDial ();
                matchingValuesTopRight ()
                score3 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="middle-row-right-inner-dial") {
                incrementClicksMiddleRightInnerDial ();
                rotateRingMiddleRightInnerDial ();
                matchingValuesMiddleRight ();
                score6 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-row-right-inner-dial") {
                incrementClicksBottomRightInnerDial ();
                rotateRingBottomRightInnerDial ();
                matchingValuesBottomRight ();
                score9 ();
                totalScore ();
            }

    })
    }

})


// calculates scores and rotates rings when buttons are pressed
addEventListener("DOMContentLoaded", function() {
    let centerRings = document.getElementsByClassName("center-ring");
    for (let centerRing of centerRings) {
        centerRing.addEventListener("click", function() {
if (this.getAttribute("data-type")==="top-left-center-dial") {
                topLeftcenterButton ();
                matchingValuesTopLeft ();
                score ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="middle-left-center-dial") {
                MiddleLeftCenterButton ();
                matchingValuesMiddleLeft ();
                score4 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-left-center-dial") {
                BottomLeftCenterButton ();
                matchingValuesBottomLeft ();
                score7 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-middle-center-dial") {
                topMiddleCenterButton ();
                matchingValuesTopMiddle ();
                score2 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="center-dial") {
                MiddleMiddleCenterButton ();
                matchingValuesCenter ();
                score5 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-middle-center-dial") {
                BottomMiddleCenterButton ();
                matchingValuesBottomMiddle ();
                score8 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="top-right-center-dial") {
                topRightCenterButton ();
                matchingValuesTopRight ();
                score3 ();
                totalScore ();
            }  else if (this.getAttribute("data-type")==="middle-right-center-dial") {
                MiddleRightCenterButton ();
                matchingValuesMiddleRight ();
                score6 ();
                totalScore ();
            } else if (this.getAttribute("data-type")==="bottom-right-center-dial") {
                BottomRightCenterButton ();
                matchingValuesBottomRight ();
                score9 ();
                totalScore ();
            }

    })
    }

})


// assigns random values for rotation functions and assigns random values for button colours
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

// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksTopLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-left").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-left").innerText = 0;
    } 
    
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksMiddleLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-left").innerText = 0;
    }
        
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksBottomLeft () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-left").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-left").innerText = 0;
    }
    
}

// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// increments number value to a max of 3 each time outer dial is clicked
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
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksTopMiddle () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-middle").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-middle").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-middle").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksCenter () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-center").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-center").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksBottomMiddle () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-center").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-center").innerText = 0;
    }
}

// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksTopRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-right").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-top-right").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksMiddleRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-middle-right").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time outer dial is clicked
function incrementClicksBottomRight () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-right").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Blue") {
        document.getElementById("rotate-value-bottom-right").innerText = 0;
    }
    
}

// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// increments number value to a max of 3 each time inner dial is clicked
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
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksTopLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-left-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") { 
        document.getElementById("rotate-value-top-left-inner-dial").innerText = 0;
}
}
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksMiddleLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-left-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-left-inner-dial").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksBottomLeftInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-left-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-left-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-left-inner-dial").innerText = 0;
    }
    
}


// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// rotates inner ring depending on number of clicks incremented
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
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksTopMiddleInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-middle-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-middle-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-middle-inner-dial").innerText = 0;
    }
    
}
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksCenterInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-center-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-center-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red"){
        document.getElementById("rotate-value-center-inner-dial").innerText = 0;
    } 
    
}
// increments number value to a max of 3 each time inner dial is clicked
function incrementClicksBottomMiddleInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-center-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-center-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-center-inner-dial").innerText = 0;
    } 
}


// rotates iner ring depending on how many times its clicked
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
// rotates iner ring depending on how many times its clicked
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

// rotates iner ring depending on how many times its clicked
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
// increments number of times inner ring is clicked to a max of 3
function incrementClicksTopRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-top-right-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-top-right-inner-dial").innerText = 0;
    } 
    
}
// increments number of times inner ring is clicked to a max of 3
function incrementClicksMiddleRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-middle-right-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-middle-right-inner-dial").innerText = 0;
    }
    
}
// increments number of times inner ring is clicked to a max of 3
function incrementClicksBottomRightInnerDial () {
    let oldNumOfClicks = parseInt(document.getElementById("rotate-value-bottom-right-inner-dial").innerText) ;
    let toggleButtonText = document.getElementById("toggle-button");

    if (oldNumOfClicks <= 2 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-right-inner-dial").innerText = ++oldNumOfClicks;
    } else if (oldNumOfClicks <= 3 && toggleButtonText.innerText == "Activate Red") {
        document.getElementById("rotate-value-bottom-right-inner-dial").innerText = 0;
    }
    
}

// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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
// rotates button depending on number value
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

// changes colour of button to green if rings are aligned correctly
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
// changes colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// chnages colour of button to green if rings are aligned correctly
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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
// changes colour of button depending on colour value
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

// changes inner text of toggle button 
function toggleButton () {
    let tButton = document.getElementById("toggle-button");

    if (tButton.innerText == "Activate Red") {
        tButton.innerText = "Activate Blue"
    } else {
        tButton.innerText = "Activate Red"
    }
}

// changes colour of toggle button 
function toggleButtonColor () {
    let tButton = document.getElementById("toggle-button");

    if (tButton.innerText == "Activate Red") {
        tButton.style.backgroundColor = "Blue"
    } else {
        tButton.style.backgroundColor= "Red"
    }
}


// toggle Dial Colors
function toggleDialColorTopLeft () {
    let outerRing = document.getElementById("top-row-left-dial");
    let innerRing = document.getElementById("top-row-left-inner-dial")
    let outerIcon = document.getElementById("top-left-outer-icon");
    let innerIcon = document.getElementById( "top-left-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// rotates outer ring depending on how many times it is clicked
function toggleDialColorTopMiddle () {
    let outerRing = document.getElementById("top-row-middle-dial");
    let innerRing = document.getElementById("top-row-middle-inner-dial")
    let outerIcon = document.getElementById("top-center-outer-icon");
    let innerIcon = document.getElementById( "top-center-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}
// rotates outer ring depending on how many times it is clicked
function toggleOuterDialColorTopRight () {
    let outerRing = document.getElementById("top-row-right-dial");
    let innerRing = document.getElementById("top-row-right-inner-dial")
    let outerIcon = document.getElementById("top-right-outer-icon");
    let innerIcon = document.getElementById( "top-right-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// rotates outer ring depending on how many times it is clicked
function toggleDialColorMiddleLeft () {
    let outerRing = document.getElementById("middle-row-left-dial");
    let innerRing = document.getElementById("middle-row-left-inner-dial")
    let outerIcon = document.getElementById("middle-left-outer-icon");
    let innerIcon = document.getElementById( "middle-left-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// rotates outer ring depending on how many times it is clicked
function toggleDialColorMiddleMiddle () {
    let outerRing = document.getElementById("middle-row-center-dial");
    let innerRing = document.getElementById("middle-row-center-inner-dial")
    let outerIcon = document.getElementById("middle-center-outer-icon");
    let innerIcon = document.getElementById( "middle-center-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// rotates outer ring depending on how many times it is clicked
function toggleOuterDialColorMiddleRight () {
    let outerRing = document.getElementById("middle-row-right-dial");
    let innerRing = document.getElementById("middle-row-right-inner-dial")
    let outerIcon = document.getElementById("middle-right-outer-icon");
    let innerIcon = document.getElementById( "middle-right-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// rotates outer ring depending on how many times it is clicked
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

// highlights or dulls outer dials depending on toggle buttons inner text value
function toggleDialColorBottomLeft () {
    let outerRing = document.getElementById("bottom-row-left-dial");
    let innerRing = document.getElementById("bottom-row-left-inner-dial")
    let outerIcon = document.getElementById("bottom-left-outer-icon");
    let innerIcon = document.getElementById( "bottom-left-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}


// highlights or dulls outer dials depending on toggle buttons inner text value
function toggleDialColorBottomMiddle () {
    let outerRing = document.getElementById("bottom-row-center-dial");
    let innerRing = document.getElementById("bottom-row-center-inner-dial")
    let outerIcon = document.getElementById("bottom-center-outer-icon");
    let innerIcon = document.getElementById( "bottom-center-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// highlights or dulls outer dials depending on toggle buttons inner text value
function toggleOuterDialColor () {
    let outerRing = document.getElementById("bottom-row-right-dial");
    let innerRing = document.getElementById("bottom-row-right-inner-dial")
    let outerIcon = document.getElementById("bottom-right-outer-icon");
    let innerIcon = document.getElementById( "bottom-right-inner-icon")
    let tButton = document.getElementById("toggle-button");
    

    if (tButton.innerText == "Activate Red") {
        outerRing.style.borderColor ="slategrey";
        outerIcon.style.color ="slategrey";
       
        innerRing.style.borderColor ="white";
        innerIcon.style.color ="white";

    } else if (tButton.innerText == "Activate Blue") {
        outerRing.style.borderColor ="white";
        outerIcon.style.color ="white";
        innerRing.style.borderColor ="slategrey";
        innerIcon.style.color ="slategrey";

    }

}

// settings for time. Displays win or lose message if time runs out or if game is won before timer runs out
function parentCountdown () {
    let timeRemaining = 60;
    let timerElement = document.getElementById("timer");
        
        let timerInterval = setInterval( countdown, 1000); 
    
        function countdown() {
            
            let score = parseInt(document.getElementById("score").innerText); 

            if (timeRemaining <= -1) {
                clearInterval(timerInterval);
                document.getElementById("timer").value = 60 - timeRemaining;
                timeRemaining -= 1;
                gameOver ()
            } else if (score === 9000 ) {
                clearInterval(timerInterval);
                document.getElementById("timer").value = 60 - timeRemaining;
                timeRemaining -= 1;
                winRound ()
            } else {
                timerElement.innerText = timeRemaining + " seconds until launch...";
                timeRemaining --;
        }
    }
}

// displays message when game is lost
function gameOver () {
    let gameOver = document.getElementById("game-over");
    let gameOverText = document.getElementById("game-over-text");
    gameOverText.innerHTML = `<h2>Missiles Launched...</h2><h2>The AI has won...</h2><h2>Game Over.</h2><h2>Press Start to play again.</h2>`;
    gameOver.style.width = "80%";
    gameOver.style.height = "600px";
    gameOverText.style.width = "80%";
    gameOverText.style.height = "600px";
}

//displays message when game is won
function winRound () {
    let gameOver = document.getElementById("game-over");
    let gameOverText = document.getElementById("game-over-text");
    gameOverText.innerHTML = `<h2>Launch Sequence Disabled...</h2><h2>You have defeated the AI...</h2><h2>Humanity will survive...</h2><h2>Press Start to play again.</h2>`;
    gameOver.style.width = "80%";
    gameOver.style.height = "600px";
    gameOverText.style.width = "80%";
    gameOverText.style.height = "600px";
}

// minimises and resets game over animation
function resetGameOverAnimation () {
    let gameOver = document.getElementById("game-over").style.width;
    let gameOverInnerText = document.getElementById("game-over-text").style.width;
    document.getElementById("game-over-text").style.height= "0px";
    document.getElementById("game-over-text").style.width= "0px";
    gameOverInnerText.innerText = " ";
    document.getElementById("game-over-text").innerText= " "
    document.getElementById("game-over").style.height= "0px";
    document.getElementById("game-over").style.width= "0px";
}


//sets game over message to blank
function defaultGameStatusMessage () {
   let defaultMessage = document.getElementById("game-over");
   defaultMessage.innerText = " ";
}


// resets scores, reassigns random values for rotatin gbuttons and assigning colour values and minimises game over message
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
        resetScore ();
        resetGameOverAnimation ();
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




// increments score if button turns green, esle any other colour will deducted points from score
function score () {
    
    let topLeftCenterDial = document.getElementById("top-left-center-dial"); 
    let score = parseInt(document.getElementById("score-1").innerText);

    
    if (topLeftCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore ();
    } else if (topLeftCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore ()
    }
}
// increments score if rings are correctly aligned
function incrementScore () {
    let oldScore = parseInt(document.getElementById("score-1").innerText);
    document.getElementById("score-1").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore () {
    let oldScore = parseInt(document.getElementById("score-1").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-1").innerText -= 1000;
    }
}
    
// increments score if button turns green, esle any other colour will deducted points from score
function score2 () {
    
    let topMiddleCenterDial = document.getElementById("top-middle-center-dial");
    let score = parseInt(document.getElementById("score-2").innerText);

    if (topMiddleCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore2 ();
    } else if (topMiddleCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore2 ()
    }
}

// increments score if rings are correctly aligned
function incrementScore2 () {
    let oldScore = parseInt(document.getElementById("score-2").innerText);
    document.getElementById("score-2").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore2 () {
    let oldScore = parseInt(document.getElementById("score-2").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-2").innerText -= 1000;
    }
}

// increments score if button turns green, esle any other colour will deducted points from score
function score3 () {
    
    let topRightCenterDial = document.getElementById("top-right-center-dial");
    let score = parseInt(document.getElementById("score-3").innerText);

    if (topRightCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore3 ();
    } else if (topRightCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore3 ()
    }
}
// increments score if rings are correctly aligned
function incrementScore3 () {
    let oldScore = parseInt(document.getElementById("score-3").innerText);
    document.getElementById("score-3").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore3 () {
    let oldScore = parseInt(document.getElementById("score-3").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-3").innerText -= 1000;
    }
}


// increments score if button turns green, esle any other colour will deducted points from score
function score4 () {
    
    let middleLeftCenterDial = document.getElementById("middle-left-center-dial");
    let score = parseInt(document.getElementById("score-4").innerText);

    if (middleLeftCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore4 ();
    } else if (middleLeftCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore4 ()
    }
}
// increments score if rings are correctly aligned
function incrementScore4 () {
    let oldScore = parseInt(document.getElementById("score-4").innerText);
    document.getElementById("score-4").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore4 () {
    let oldScore = parseInt(document.getElementById("score-4").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-4").innerText -= 1000;
    }
}

// increments score if button turns green, esle any other colour will deducted points from score
function score5 () {
    
    let CenterDial = document.getElementById("center-dial");
    let score = parseInt(document.getElementById("score-5").innerText);

    if (CenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore5 ();
    } else if (CenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore5 ();
    }
}

// increments score if rings are correctly aligned
function incrementScore5 () {
    let oldScore = parseInt(document.getElementById("score-5").innerText);
    document.getElementById("score-5").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore5 () {
    let oldScore = parseInt(document.getElementById("score-5").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-5").innerText -= 1000;
    }
}


// increments score if button turns green, esle any other colour will deducted points from score
function score6 () {
    
    let middleRightCenterDial = document.getElementById("middle-right-center-dial");
    let score = parseInt(document.getElementById("score-6").innerText);

    if (middleRightCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore6 ();
    } else if (middleRightCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore6 ();
    }
}
// increments score if rings are correctly aligned
function incrementScore6 () {
    let oldScore = parseInt(document.getElementById("score-6").innerText);
    document.getElementById("score-6").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore6 () {
    let oldScore = parseInt(document.getElementById("score-6").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-6").innerText -= 1000;
    }
}


// increments score if button turns green, esle any other colour will deducted points from score
function score7 () {
    
    let bottomLeftCenterDial = document.getElementById("bottom-left-center-dial");
    let score = parseInt(document.getElementById("score-7").innerText);

    if (bottomLeftCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore7 ();
    } else if (bottomLeftCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore7 ();
    }
}
// increments score if rings are correctly aligned
function incrementScore7 () {
    let oldScore = parseInt(document.getElementById("score-7").innerText);
    document.getElementById("score-7").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore7 () {
    let oldScore = parseInt(document.getElementById("score-7").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-7").innerText -= 1000;
    }
}

// increments score if button turns green, esle any other colour will deducted points from score
function score8 () {
    
    let bottomMiddleCenterDial = document.getElementById("bottom-middle-center-dial");
    let score = parseInt(document.getElementById("score-8").innerText);

    if (bottomMiddleCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore8 ();
    } else if (bottomMiddleCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore8 ();
    }
}
// increments score if rings are correctly aligned
function incrementScore8 () {
    let oldScore = parseInt(document.getElementById("score-8").innerText);
    document.getElementById("score-8").innerText += 1000;

}
// decreases score if rings are not correctly aligned
function decreaseScore8 () {
    let oldScore = parseInt(document.getElementById("score-8").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-8").innerText -= 1000;
    }
}

// increments score if button turns green, esle any other colour will deducted points from score
function score9 () {
    
    let bottomRightCenterDial = document.getElementById("bottom-right-center-dial");
    let score = parseInt(document.getElementById("score-9").innerText);

    if (bottomRightCenterDial.style.backgroundColor == "green" &&  score <= 0) {
        incrementScore9 ();
    } else if (bottomRightCenterDial.style.backgroundColor == "red" || "Blue" || "purple") {
        decreaseScore9 ();
    }
}

// increments score if rings are correctly aligned
function incrementScore9 () {
    let oldScore = parseInt(document.getElementById("score-9").innerText);
    document.getElementById("score-9").innerText += 1000;

}

// decreases score if rings are not correctly aligned
function decreaseScore9 () {
    let oldScore = parseInt(document.getElementById("score-9").innerText);
    if (oldScore >= 1) {
        document.getElementById("score-9").innerText -= 1000;
    }
}

//sums score of each set off rings to give total score
function totalScore () {
    let score1 = parseInt(document.getElementById("score-1").innerText); 
    let score2 = parseInt(document.getElementById("score-2").innerText); 
    let score3 = parseInt(document.getElementById("score-3").innerText); 
    let score4 = parseInt(document.getElementById("score-4").innerText);
    let score5 = parseInt(document.getElementById("score-5").innerText); 
    let score6 = parseInt(document.getElementById("score-6").innerText); 
    let score7 = parseInt(document.getElementById("score-7").innerText); 
    let score8 = parseInt(document.getElementById("score-8").innerText);
    let score9 = parseInt(document.getElementById("score-9").innerText); 
    document.getElementById("score").innerText = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + ".pts";
}

// resets game score
function resetScore () {
    let totalScore = document.getElementById("score");
    let score1 = document.getElementById("score-1");
    let score2 = document.getElementById("score-2");
    let score3 = document.getElementById("score-3");
    let score4 = document.getElementById("score-4");
    let score5 = document.getElementById("score-5");
    let score6 = document.getElementById("score-6");
    let score7 = document.getElementById("score-7");
    let score8 = document.getElementById("score-8");
    let score9 = document.getElementById("score-9");

    totalScore.innerText = "0.pts";
    score1.innerText = "0";
    score2.innerText = "0";
    score3.innerText = "0";
    score4.innerText = "0";
    score5.innerText = "0";
    score6.innerText = "0";
    score7.innerText = "0";
    score8.innerText = "0";
    score9.innerText = "0";
}

// rotates rings when button is clicked
function topLeftcenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("top-row-left-dial");
    let innerRing = document.getElementById("top-row-left-inner-dial");
    


    if (tButton.innerText == "Activate Red") {
        incrementClicksTopLeftInnerDial ();
        rotateRingTopLeftInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksTopLeft ();
        rotateRingTopLeft ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function topMiddleCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("top-row-middle-dial");
    let innerRing = document.getElementById("top-row-middle-inner-dial");


    if (tButton.innerText == "Activate Red") {
        incrementClicksTopMiddleInnerDial ();
        rotateRingTopMiddleInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksTopMiddle ();
        rotateRingTopMiddle ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function topRightCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("top-row-right-dial");
    let innerRing = document.getElementById("top-row-right-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksTopRightInnerDial ();
        rotateRingTopRightInnerDial ();
        innerRing.style.transition = " all 500ms";



    } else {
        incrementClicksTopRight ();
        rotateRingTopRight ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function MiddleLeftCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("middle-row-left-dial");
    let innerRing = document.getElementById("middle-row-left-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksMiddleLeftInnerDial ();
        rotateRingMiddleLeftInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksMiddleLeft ();
        rotateRingMiddleLeft ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function MiddleMiddleCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("middle-row-center-dial");
    let innerRing = document.getElementById("middle-row-center-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksCenterInnerDial ();
        rotateRingCenterInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksCenter();
        rotateRingCenter ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function MiddleRightCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("middle-row-right-dial");
    let innerRing = document.getElementById("middle-row-right-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksMiddleRightInnerDial ();
        rotateRingMiddleRightInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksMiddleRight ();
        rotateRingMiddleRight ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function BottomLeftCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("bottom-row-left-dial");
    let innerRing = document.getElementById("bottom-row-left-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksBottomLeftInnerDial ();
        rotateRingBottomLeftInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksBottomLeft ();
        rotateRingBottomLeft ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function BottomMiddleCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("bottom-row-center-dial");
    let innerRing = document.getElementById("bottom-row-center-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksBottomMiddleInnerDial ();
        rotateRingBottomMiddleInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksBottomMiddle ();
        rotateRingBottomMiddle ();
        outerRing.style.transition = " all 500ms"
    }
}

// rotates rings when button is clicked
function BottomRightCenterButton () {
    let tButton = document.getElementById("toggle-button");
    let outerRing = document.getElementById("bottom-row-right-dial");
    let innerRing = document.getElementById("bottom-row-right-inner-dial");

    if (tButton.innerText == "Activate Red") {
        incrementClicksBottomRightInnerDial ();
        rotateRingBottomRightInnerDial ();
        innerRing.style.transition = " all 500ms"


    } else {
        incrementClicksBottomRight ();
        rotateRingBottomRight ();
        outerRing.style.transition = " all 500ms"
    }

}

// plays sound when buttons are clicked
function correctSound() {
let buttonClick = new Audio();
    buttonClick.src ="buttonClick.mp3";
    buttonClick.play();
}
