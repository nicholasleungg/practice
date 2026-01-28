const container = document.querySelector("#container");
const button = document.querySelector("#button")

const GRID_SIZE_PX = 960;
const MAX = 100

function clearGrid() {
    container.innerHTML = ""
}

function createGrid(sides) {
    clearGrid();

    const squareSize = GRID_SIZE_PX / sides

    for (let i = 0; i < sides * sides; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);

        square.addEventListener("mousedown", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
}

function buttonClick() {
    const input = prompt(`Enter a number of squares per side (1 - ${MAX})`)

    const n = Number(input)

    if (!Number.isInteger(n) || n < 1 || n > MAX) {
        alert(`Enter a number of squares per side (1 - ${MAX})`)
        return;
    }

    createGrid(n)
}

button.addEventListener("click", buttonClick);

createGrid(16);
