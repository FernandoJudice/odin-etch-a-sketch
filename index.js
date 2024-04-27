let gridSize = 16;

const drawArea = document.querySelector(".drawArea");

for (let i=0;i<gridSize*gridSize;i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = i;
    square.style.flex = `1 0 calc(1/${gridSize+1}*100%)`;
    square.style.border = "solid gray 1px"
    drawArea.appendChild(square);
}

