const drawArea = document.querySelector(".drawArea");
const button  =document.querySelector("button");
const rainbow = document.querySelector("#rainbow");
const darkening = document.querySelector("#darkening");

let opacity = 0.1;

renderGrid(16);

button.onclick = newGrid;
darkening.onclick = () => opacity = 0.1;

function renderGrid(gridSize){   
    for (let i=0;i<gridSize;i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        drawArea.appendChild(row);
        
        for (let j=0;j<gridSize;j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.flex = "1 0 auto";
            square.onmouseenter = function(e) {paintSquare(e.target)};
            row.appendChild(square);
        }
    }
}

function paintSquare(square){
    if (rainbow.checked) {
        square.style.background = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';        
    } else {
        square.style.background = "#E2CBF7";
    }

    if (darkening.checked) {
        square.style.opacity = opacity;
        opacity += 0.1;
    } else {
        square.style.opacity = 1;
    }
}

function clearGrid(){
    while(drawArea.firstChild) {
        drawArea.removeChild(drawArea.firstChild);
    }
}

function newGrid(){
    let gridSize = Math.min(Number(prompt()),100);
    console.log(gridSize)
    if (isNaN(gridSize)){
        alert("Invalid entry, please enter a number");
    } else {
        clearGrid();
        renderGrid(gridSize);
    }
}