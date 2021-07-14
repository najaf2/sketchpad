const outerDiv = document.querySelector('.outer');

console.log(outerDiv);

let size = 10*10;
for (let i = 0; i < size; ++i) {
    let hw = 720/Math.sqrt(size);

    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.width = hw.toString() + "px";
    div.style.height = hw.toString() + "px";
    div.style.float = "left";
    div.id = "grids"
    outerDiv.appendChild(div);
}


let elementsArray = document.querySelectorAll("#grids");

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        this.style.backgroundColor = randomColor();
    });
});

function randomColor() {
    const rndInt = Math.floor(Math.random() * 7) + 1

    switch (rndInt) {
        case 1:
            return "red";
        case 2:
            return "orange";
        case 3:
            return "yellow";
        case 4:
            return "green";
        case 5:
            return "blue";
        case 6:
            return "indigo";
        case 7:
            return "violet";
    }
}


