const canvas = document.querySelector('.outer');
const resetBtn = document.querySelector('#resetBtn')
const blackBtn = document.querySelector('#blackPen');
const rainBowBtn = document.querySelector('#rainbowPen');
const colorPicker = document.querySelector('#colorpicker');
const whiteBtn = document.querySelector('#whitePen');
const slider = document.querySelector('#slider');

// DO INITIALIZATION OF ALL FUNCTIONS AND VARIABLES
let size = 25*25;
let penColor = "black";
let rainbowClicked = false;

let elementsArray;
let mouseDown = false;
makeDivs();
addHover();
addDown();
addUp();
addClick();

// MAKE ALL DIVS
function makeDivs() {
    for (let i = 0; i < size; ++i) {
        let hw = (576 - Math.sqrt(size)*2)/Math.sqrt(size);

        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.width = hw.toString() + "px";
        div.style.height = hw.toString() + "px";
        div.style.float = "left";
        div.id = "grids"
        canvas.appendChild(div);
    }
    elementsArray = document.querySelectorAll("#grids");

}

// SET WHETHER MOUSE IS PRESSED DOWN OR NOT
function setDown() {
    mouseDown = true;
}
function setUp() {
    mouseDown = false;
}


// ADD EVENT LISTNERS TO ALL DIVS

function addDown() {
    elementsArray.forEach(function(elem) {
        elem.addEventListener("mousedown", function(elem) {
            mouseDown = true;
        })
    });
}

function addUp() {
    elementsArray.forEach(function(elem) {
        elem.addEventListener("mouseup", function(elem) {
            mouseDown = false;
        })
    });
}

function addHover() {
    elementsArray.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(elem) {
            if (mouseDown == true) {
                if (rainbowClicked)
                    this.style.backgroundColor = random();
                else
                    this.style.backgroundColor = penColor;
            }
        })
    });
}

function addClick() {
    elementsArray.forEach(function(elem) {
        elem.addEventListener("click", function(elem) {
        if (rainbowClicked)
            this.style.backgroundColor = random();
        else
            this.style.backgroundColor = penColor;       
         })
    });
}

// ALL BUTTONS AND INPUTS

// Reset button clicked.
resetBtn.addEventListener("click", () => {
    for (let i = 0; i < elementsArray.length; ++i) {
        elementsArray[i].style.backgroundColor = "white";
    }
    penColor = "black";
    rainbowClicked = false;
    resetSelected();
});

// Change color
colorPicker.addEventListener("input", function(elem) {
    rainbowClicked = false;
    penColor = elem.target.value.toString();

    resetSelected();
    colorPicker.style.color = "blue";
    colorPicker.style.borderColor = "blue";
})

// Change size of canvas
slider.addEventListener("input", function() {
    size = this.value * this.value;
    removeAllDivs(canvas);
    makeDivs();
    addHover();
    addDown();
    addUp();
    addClick();


});

rainBowBtn.addEventListener("click", function() {
    if (rainbowClicked) {
        rainbowClicked = false;
    }
    else {
        rainbowClicked = true;
    }

    resetSelected();
    rainBowBtn.style.color = "blue";
    rainBowBtn.style.borderColor = "blue";
});

blackBtn.addEventListener("click", function() {
    rainbowClicked = false;
    penColor = "black";

    resetSelected();
    blackBtn.style.color = "blue";
    blackBtn.style.borderColor = "blue";
})

whiteBtn.addEventListener("click", function() {
    rainbowClicked = false;
    penColor = "white";

    resetSelected();
    whiteBtn.style.color = "blue";
    whiteBtn.style.borderColor = "blue";
})


function removeAllDivs(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function random() {
    let num = Math.floor((Math.random() * 14) + 1);

    switch (num) {
        case 1:
            return "red";
        case 2:
            return "orange";
        case 3:
            return "green";
        case 4:
            return "blue";
        case 5:
            return "indigo";
        case 6:
            return "violet";
        case 7:
            return "yellow";
        case 8:
            return "purple";
        case 9:
            return "pink";
        case 10:
            return "skyblue";
        case 11:
            return "gold";
        case 12:
            return "beige";
        case 13:
            return "brown";
        case 14:
            return "black";

    }
}

function resetSelected() {
    blackBtn.style.color = "white";
    blackBtn.style.borderColor = "white";

    rainBowBtn.style.color = "white";
    rainBowBtn.style.borderColor = "white";

    colorPicker.style.color = "white";
    colorPicker.style.borderColor = "white";

    whiteBtn.style.color = "white";
    whiteBtn.style.borderColor = "white";
  
}





