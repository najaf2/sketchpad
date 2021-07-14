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
