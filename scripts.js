const container = document.querySelector('.container');

let rainbow = ['rock', 'paper', 'scissors'];

let rainEnable = false;

let rainbowButton = document.querySelector('.rainbowPen');

let resizeButton = document.querySelector('.resize');

let clearButton = document.querySelector('.clear');
createGrid();
let squares = document.querySelectorAll('.square');

/*Functions*/
function makeRows(rowNum) {
    for(let x = 0; x < rowNum; x++)
    {
    let row = document.createElement('div');
    container.appendChild(row).className = "gridRow";
    };    
};

function makeColumn(colNum) {
    let rows = document.getElementsByClassName("gridRow");
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

function clear() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((sq) => {
        sq.classList.remove('shadesquare');
        sq.style.backgroundColor = 'white';
    });
}

function enableSquares()
{
    let squares = document.querySelectorAll('.square');
    squares.forEach((sq) => {
        sq.addEventListener('mouseover', () => {
            console.log("shade");
            sq.style.backgroundColor = "#353333";
        });
    });
}

function removeRows()
{
    while(container.hasChildNodes())
    {
        container.firstChild.remove();
    }
}


function randomColors()
{
    let squares = document.querySelectorAll('.square');
    squares.forEach((sq) => {
        sq.addEventListener('mouseover', () => {
            console.log("color");
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            sq.style.backgroundColor = "#" + randomColor;
        });
    });
}

rainbowButton.addEventListener('click', () => {
    if(rainEnable == false){
        rainEnable = true;
        rainbowButton.classList.add('rainbow-enable');
        
        randomColors();
    }
    else{
        rainEnable = false;
        rainbowButton.classList.remove('rainbow-enable');
        enableSquares();
    } 
    
});

resizeButton.addEventListener('click', () => {
    let size = prompt('Would you like to resize the sketch pad (Max: 50).');
    if(size <= 50 && size > 0)
    {
        removeRows();
        makeRows(size);
        makeColumn(size);
        if(rainEnable == false)
        {
            enableSquares();
        }
        else{
            randomColors();
        }

    }
    else
    {
        clear();
    }
});

clearButton.addEventListener('click', () =>
{
    clear();
});