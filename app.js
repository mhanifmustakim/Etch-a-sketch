const gridContainer = document.querySelector("#grid-container");

createGrid(16);

const changeSizeForm = document.querySelector("#change-size-form");
changeSizeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const changeSizeValue = document.querySelector("#new-size");
    let newSize = changeSizeValue.value;
    changeSizeValue.value = "";
    deleteGrids();
    createGrid(newSize);
})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    deleteGrids();
    createGrid();
})

function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        //resizing grid container
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        //creating grid boxes for the sketch area
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${gridContainer.offsetWidth / size}px`;
        grid.style.height = `${gridContainer.offsetHeight / size}px`;
        gridContainer.appendChild(grid);
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach((box) => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    }));
}

function deleteGrids() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((box) => {
        box.remove();
    })
}