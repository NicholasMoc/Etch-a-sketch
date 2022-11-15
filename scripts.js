const container = document.querySelector('.container');

function makeRows(rowNum) {
for(let x = 0; x < rowNum; x++)
{
 let row = document.createElement('div');
 container.appendChild(row).className = "gridRow";
};    
};

let rows = document.getElementsByClassName("gridRow");

function makeColumn(colNum) {
    for(let x = 0; x < rows.length; x++)
    {
        for(let y = 0; y < colNum; y++)
        {
            let square = document.createElement('div');
            rows[y].appendChild(square).className = "square";
        }
    }

};

function createGrid() {
    makeRows(16);
    makeColumn(16);
    enableSquares();
};

createGrid();



function clear() {
    squares.forEach((sq) => {
        sq.classList.remove('shadesquare');
    });
}
function enableSquares()
{
    let squares = document.querySelectorAll('.square');
    squares.forEach((sq) => {
        sq.addEventListener('mouseover', () => {
            console.log("shade");
            sq.classList.add('shadesquare');
        });
    });
}

let rainbow = ['rock', 'paper', 'scissors'];

let rainEnable = false;

let rainbowButton = document.querySelector('.rainbowPen');

rainbowButton.addEventListener('click', () => {
    if(rainEnable == false){
        rainEnable = true;
        rainbowButton.classList.add('rainbow-enable');
    }
    else{
        rainEnable = false;
        rainbowButton.classList.remove('rainbow-enable');
    } 
    
});

let resizeButton = document.querySelector('.resize');

function removeRows()
{
    while(container.hasChildNodes())
    {
        container.firstChild.remove();
    }
}

resizeButton.addEventListener('click', () => {
    let size = prompt('Would you like to resize the sketch pad (Max: 50).');
    if(size <= 50 && size > 0)
    {
        removeRows();
        makeRows(size);
        makeColumn(size);
        enableSquares();
    }
    else
    {
        clear();
    }
})

let clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () =>
{
    clear();
});