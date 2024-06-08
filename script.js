const main = document.querySelector('.main');
const container = document.querySelector('.container');
const header = document.querySelector('.header')
const body = document.querySelector('body');
const colors = ['black', 'red', 'blue', 'green', 'yellow'];
let cellValue = 0;

main.style.display = "flex";

function headerMod() {
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.background = "linear-gradient(45deg, red, black, blue)";
    header.style.opacity = "0.5";
    header.style.border = "2px solid black";
    header.style.borderRadius = "20px";
    header.addEventListener('mouseover', () => {
        header.style.opacity = "1";
    })
    header.addEventListener('mouseout', () => {
        header.style.opacity = "0.5";
    })
}

function buttonMod() {
    let button = document.createElement('button');
    button.classList.add('btn');
    header.appendChild(button);
    button.style.background = "yellow";
    button.style.margin = "20px 20px";
    button.style.width = "200px";
    button.style.height = "200px";
    button.style.padding = "10px";
    button.textContent = "Click to generate grid";
    button.style.fontSize = "30px";
    button.style.textAlign = "center";
    button.style.borderRadius = "20px";
    button.addEventListener('click', () => {
        container.innerHTML = '';
        spawnCells();
    })
}

function bodyMod() {
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.maxHeight = "100%";
    body.style.maxWidth = "100%";
    body.style.background = "black";
}

function containerFlex() {
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.justifyContent = "center";
    container.style.border = "2px solid black";
    container.style.background = "white";
    container.style.borderRadius = "20px";
}

function spawnCells() {
    cellValue = parseInt(prompt("Enter cell number: "));
    while (isNaN(cellValue) || cellValue > 100) {
        cellValue = parseInt(prompt("Please enter a valid number: "));
    }
    
    let cellArea = 0;
    if (cellValue <= 100) {
        cellArea = cellValue * cellValue;
    }

    for (let i = 0; i < cellArea; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = "20px";
        cell.style.height = "20px";
        cell.style.background = "white";
        cell.style.border = "1px solid black";
        container.appendChild(cell);
        cell.style.opacity = 0;
        cell.addEventListener('mouseover', () => {
            cell.style.background = colors[Math.floor(Math.random() * colors.length)];
            cell.style.opacity = cell.style.opacity > 0.9 ? cell.style.background = "black"
            : parseFloat(cell.style.opacity) + 0.1;
        })
    }

}

bodyMod();
headerMod();
containerFlex();
buttonMod();