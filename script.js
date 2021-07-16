const canvas = document.querySelector('.outer');
const resetBtn = document.querySelector('#resetBtn')
const blackBtn = document.querySelector('#blackPen');
const rainBowBtn = document.querySelector('#rainbowPen');
const colorPicker = document.querySelector('#colorpicker');
const slider = document.querySelector('#slider');
let on = true;

let size = 50*50;
let penColor = "black";

let elementsArray;
makeDivs();
addHover();





// make divs
function makeDivs() {
    for (let i = 0; i < size; ++i) {
        let hw = (720 - Math.sqrt(size)*2)/Math.sqrt(size);

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



//add mouse hover over canvas effect
function addHover() {
    elementsArray.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(elem) {
            this.style.backgroundColor = penColor;

        })
    });
}

// Reset button clicked.
resetBtn.addEventListener("click", () => {
    for (let i = 0; i < elementsArray.length; ++i) {
        elementsArray[i].style.backgroundColor = "white";
    }});

// Change color
colorPicker.addEventListener("input", function(elem) {
    penColor = elem.target.value.toString();
})

// Change size of canvas
slider.addEventListener("input", function() {
    size = this.value * this.value;
    removeAllChildNodes(canvas);
    makeDivs();
    addHover();

});

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}