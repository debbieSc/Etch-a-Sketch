const container = document.querySelector(".container");
const smallbtn = document.querySelector(".small");
const mediumbtn = document.querySelector(".medium");
const largebtn = document.querySelector(".large");
let multiple = 0;
let cellSize = "";
console.log(container.offsetWidth)
const multicolour = ["red", "yellow", "pink", "green", "orange", "purple", "blue"]

smallbtn.addEventListener("click", () => {
    
    container.innerHTML = "";
   
    multiple = 16 * 16
    cellSize = ((container.offsetWidth / 16) - 2) + "px"
    gridSize()

})

mediumbtn.addEventListener("click", () => {

    container.innerHTML = "";

    multiple = 32 * 32
    cellSize = ((container.offsetWidth / 32) - 2) + "px"
    gridSize()
})

largebtn.addEventListener("click", () => {

    container.innerHTML = "";

    multiple = 64 * 64
    cellSize = ((container.offsetWidth / 64) - 2) + "px"
    gridSize()
})

function gridSize() {

for(let i=0; i<multiple; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.border = "1px solid black";
    createDiv.style.width =cellSize;
    createDiv.style.height =cellSize;
    createDiv.style.background ="hotpink";
    
    createDiv.className = "squares"
    
container.appendChild(createDiv);

createDiv.addEventListener("mouseover", () => {


   
    
    const choice = multicolour[Math.floor(Math.random() * multicolour.length)];

    createDiv.style.background = choice;
    
        
    });
    


};  
}





const custom = document.querySelector(".custom");

custom.addEventListener("click", () => {
    container.innerHTML = "";
    customSize()

})


function customSize(){

    let customNumber = prompt("Please enter a number between 2 and 100");
    let changeToNumber = parseInt(customNumber)
    

    
    if (isNaN(changeToNumber)) {
        let customNumber = prompt("Value entered is not a number, please enter a number between 2 and 100");
       
    }

    else if (changeToNumber > 100) {
        let customNumber = prompt("Value entered is too high, please enter a number between 2 and 100");
        
    }
    else if (changeToNumber < 2) {
        let customNumber = prompt("Value entered is too low, please enter a number between 2 and 100"); 
        
    }
    else  {

        
    
        createCustomGrid(changeToNumber);

   
}
}

function createCustomGrid (cellWidth) {

    multiple = cellWidth * cellWidth
    cellSize = ((container.offsetWidth / cellWidth) - 2) + "px"
    gridSize()
}


