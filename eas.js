const container = document.querySelector(".pContainer")


for(let i = 0; i < 16; i++)
{
    const square = document.createElement('div')
    container.appendChild(square);
    square.classList.add('grid')
    square.classList.add('grid-item-' + i)
}
