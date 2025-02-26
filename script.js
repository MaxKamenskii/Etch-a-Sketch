console.log('Test');

let gridSize = 16;

const pickGridSize = document.getElementById('gridSizePick');

function changeGridSize() {
    let size = prompt("Enter preffered grid size. Maximum 100!");
    size = parseInt(size);

    if(size > 100) {
        alert('Wrong number! Pick the number less or equal to 100');
        let size = prompt("Enter preffered grid size. Maximum 100!");
        size = parseInt(size);
    }
    createGrid(size);
    
}

pickGridSize.addEventListener('click', changeGridSize);

function createGrid(size) {
    // get container
    const cont = document.getElementById('container');
    container.innerHTML = "";
    for(let i = 0; i < size; i++) {
        for(let k = 0; k < size; k++) {
            
            // create a div element
            const newDiv = document.createElement('div');
            // Apply class
            newDiv.classList.add('newDiv');
            // Set the proper size of each accoding to the size of the box;
            newDiv.style.width = `${960/size}px`
            newDiv.style.height = `${960/size}px`
            // append container 
            cont.appendChild(newDiv);
        }  
    }

    const newDivColor = document.querySelectorAll('.newDiv');



    // CHANGING THE COLOR OF A DIV
    
    // add a dondition for a pressed spacebar
    
    
    let isSpacePressed = false;
    document.addEventListener('keydown', (event) => {
        if(event.code === 'Space') {
            event.preventDefault()
            isSpacePressed = true;
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            isSpacePressed = false;
        }
    })
    
    function changeColor(event) {
        // console.log(event)
        if(isSpacePressed === true) {
            event.target.style.backgroundColor = pickedColor;
        }
    }
    
    newDivColor.forEach(div => {
            div.addEventListener('mouseover', changeColor);
        
    })
    
    const clearColor = document.querySelectorAll('.newDiv')
    
    const clear = document.getElementById('colorPick');
    
    function clearBoard() {
        clearColor.forEach(div => {
            div.style.backgroundColor = "white";
    });
    };
    clear.addEventListener('click', clearBoard);

}

createGrid(gridSize);


let pickedColor = '';

// Pick the color from the color board
const blackColor = document.getElementById('black');
function pickBlack() {
    pickedColor = 'black';
}
blackColor.addEventListener('click', pickBlack);

const whiteColor = document.getElementById('white');
function pickwhite() {
    pickedColor = 'white';
}
whiteColor.addEventListener('click', pickwhite);

const redColor = document.getElementById('red');
function pickred() {
    pickedColor = 'red';
}
redColor.addEventListener('click', pickred);

const greenColor = document.getElementById('green');
function pickgreen() {
    pickedColor = 'green';
}
greenColor.addEventListener('click', pickgreen);

const blueColor = document.getElementById('blue');
function pickblue() {
    pickedColor = 'blue';
}
blueColor.addEventListener('click', pickblue);

const yellowColor = document.getElementById('yellow');
function pickyellow() {
    pickedColor = 'yellow';
}
yellowColor.addEventListener('click', pickyellow);

const orangeColor = document.getElementById('orange');
function pickorange() {
    pickedColor = 'orange';
}
orangeColor.addEventListener('click', pickorange);

const grayColor = document.getElementById('gray');
function pickgray() {
    pickedColor = 'gray';
}
grayColor.addEventListener('click', pickgray);

const purpleColor = document.getElementById('purple');
function pickpurple() {
    pickedColor = 'purple';
}
purpleColor.addEventListener('click', pickpurple);

const brownColor = document.getElementById('brown');
function pickbrown() {
    pickedColor = 'brown';
}
brownColor.addEventListener('click', pickbrown);


// const newDivColor = document.getElementById('div');


// newDivColor.addEventListener('mouseover', event => {newDivColor.style.backgroundColor = 'white';});

// onmouseover = (event) => event.target.style.backgroundColor = 'white';


