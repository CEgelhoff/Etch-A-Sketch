const container = document.querySelector(".pContainer")
let blocks = 144;


for(let i = 0; i < blocks; i++)
{  
    const square = document.createElement('div')
    container.append(square);
    square.classList.add('grid')
    square.classList.add('grid-item-' + i)
    square.addEventListener("mouseover", e => {
    square.style.backgroundColor = 'black';})
}

function setLayout(){

    let input = 0;
    input = Number(prompt("How many rows and columns would you like?", 4))
    //CAN CHANGE TO NOT ALLOW NON-WHOLE NUMBERS.
    if (input > 100 || input < 1)
    {
        input = 4;
    }

    for(let x  = 0; x < blocks; x++)
    {
    document.querySelector('.grid').remove();
    }

    blocks = input * input

    container.style.gridTemplateColumns = 'repeat(' + input +', 1fr)';

    for(let i = 0; i < blocks; i++)
    {  
        const square = document.createElement('div')
        container.append(square);
        square.classList.add('grid')
        square.classList.add('grid-item-' + i)
        square.addEventListener("mouseover", e => {
        square.style.backgroundColor = 'black';})
    }
}


