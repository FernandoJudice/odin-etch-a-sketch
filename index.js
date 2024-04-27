let gridSize = 16;

const drawArea = document.querySelector(".drawArea");

for (let i=0;i<gridSize;i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = "a"
    drawArea.appendChild(square);
}

