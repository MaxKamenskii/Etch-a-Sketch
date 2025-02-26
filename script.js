console.log('Test');

const gridSize = 16;

for(let i = 0; i < gridSize; i++) {
    for(let k = 0; k < gridSize; k++) {
        // get container
        const cont = document.getElementById('container');
        // create a div element
        const newDiv = document.createElement('div');
        // Apply class
        newDiv.classList.add('newDiv');
    
        // const newContent = document.createTextNode("a");
        // newDiv.appendChild(newContent);
    
        // append container 
        cont.appendChild(newDiv);
    }  
}

const newDivColor = document.querySelectorAll('.newDiv');

function changeColor(event) {
    // console.log(event)
    event.target.style.backgroundColor = 'white';
}

newDivColor.forEach(div => {
    div.addEventListener('mouseover', changeColor);
})

// const newDivColor = document.getElementById('div');


// newDivColor.addEventListener('mouseover', event => {newDivColor.style.backgroundColor = 'white';});

// onmouseover = (event) => event.target.style.backgroundColor = 'white';


