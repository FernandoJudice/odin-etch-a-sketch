const drawArea = document.querySelector(".drawArea");
const button  =document.querySelector("button");

renderGrid(16);

button.onclick = newGrid;

function renderGrid(gridSize){   
    for (let i=0;i<gridSize;i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        drawArea.appendChild(row);
        
        for (let j=0;j<gridSize;j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.flex = "1 0 auto";
            square.onmouseenter = () => square.classList.add("painted");
            row.appendChild(square);
        }
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