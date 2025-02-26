console.log('Test');

const gridSize = 16;

// const pickGridSize = document

for(let i = 0; i < gridSize; i++) {
    for(let k = 0; k < gridSize; k++) {
        // get container
        const cont = document.getElementById('container');
        // create a div element
        const newDiv = document.createElement('div');
        // Apply class
        newDiv.classList.add('newDiv');
        // Set the proper size of each accoding to the size of the box;
        newDiv.style.width = `${960/gridSize}px`
        newDiv.style.width = `${960/gridSize}px`
        // append container 
        cont.appendChild(newDiv);
    }  
}

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

const newDivColor = document.querySelectorAll('.newDiv');



// CHANGING THE COLOR OF A DIV

// add a dondition for a pressed spacebar


let isSpacePressed = false;
document.addEventListener('keydown', (event) => {
    isSpacePressed = true;
})
document.addEventListener('keyup', (event) => {
    isSpacePressed = false;
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
// const newDivColor = document.getElementById('div');


// newDivColor.addEventListener('mouseover', event => {newDivColor.style.backgroundColor = 'white';});

// onmouseover = (event) => event.target.style.backgroundColor = 'white';


