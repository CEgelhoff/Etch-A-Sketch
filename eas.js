const container = document.querySelector(".pContainer")
let rows = 16;


for(let i = 0; i < rows; i++)
{  
    const square = document.createElement('div')
    container.append(square);
    square.classList.add('grid')
    square.classList.add('grid-item-' + i)
    square.addEventListener("mouseover", e => {
    square.style.backgroundColor = 'black';})
}

function setLayout(){
    rows = Number(prompt("How many rows and columns would you like?", 4))
    rows = rows * rows
}
