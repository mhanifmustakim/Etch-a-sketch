const gridContainer = document.querySelector("#grid-container");
let curSize = 16;
let curColor = "black";
createGrid(curSize);

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
resetBtn.addEventListener("click", resetGrids)

const changeColorBtn = document.querySelector("#change-color");
changeColorBtn.addEventListener("click", (e) => {
    if (changeColorBtn.textContent.toLowerCase() == "rainbow!") {
        changeColorBtn.textContent = "Black!";
        makeSketchColor("random");
    } else if (changeColorBtn.textContent.toLowerCase() == "black!") {
        changeColorBtn.textContent = "Rainbow!";
        curColor = "black";
        makeSketchColor(curColor);
    }
})

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("change", (e) => {
    e.preventDefault();
    curColor = `${e.target.value}`;
    makeSketchColor(curColor);
})

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 460px)')

// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    alert('This page is currently suitable on PC or laptop only');
}




function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        curSize = size;
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
    makeSketchColor(curColor);
}

function deleteGrids() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((box) => {
        box.remove();
    })
}

function resetGrids() {
    deleteGrids();
    createGrid(curSize);
}

function makeSketchColor(color) {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((box) => box.addEventListener("mouseover", () => {
        if (color == "random") {
            box.style.backgroundColor = randColor();
        } else {
            box.style.backgroundColor = color;
        }
    }));
}

function randColor() {
    return `hsl(${Math.floor(Math.random() * 360 + 1)}, 100%, 50%)`;
}