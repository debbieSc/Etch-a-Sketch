const container = document.querySelector(".container");
const smallbtn = document.querySelector(".small");
const mediumbtn = document.querySelector(".medium");
const largebtn = document.querySelector(".large");
const redbtn = document.querySelector(".red");
const aquabtn = document.querySelector(".aqua");
const purplebtn = document.querySelector(".purple");
const blackbtn = document.querySelector(".black");
const rainbowbtn = document.querySelector(".rainbow");
let choice = "pink";
let multiple = 0;
let cellSize = "";
let colourPick;
let currentOpacity = 0.1;
console.log(container.offsetWidth);
const multicolour = ["red", "yellow", "hotpink", "green", "orange", "purple", "blue"];



smallbtn.addEventListener("click", () => {
    
    container.innerHTML = "";
   
    multiple = 16 * 16
    cellSize = ((container.offsetWidth / 16) - 2) + "px"
    gridSize()

});





mediumbtn.addEventListener("click", () => {

    container.innerHTML = "";

    multiple = 32 * 32
    cellSize = ((container.offsetWidth / 32) - 2) + "px"
    gridSize()
});





largebtn.addEventListener("click", () => {

    container.innerHTML = "";

    multiple = 64 * 64
    cellSize = ((container.offsetWidth / 64) - 2) + "px"
    gridSize()
});





function gridSize() {

for(let i=0; i<multiple; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.border = "1px solid black";
    createDiv.style.width =cellSize;
    createDiv.style.height =cellSize;
    createDiv.style.background ="pink";
    
    createDiv.className = "squares"
    
container.appendChild(createDiv);


colourPick = createDiv

chooseColour(colourPick)

}
};



function chooseColour (colourChoice) {

    


redbtn.addEventListener("click", () => {
    
    

    colourChoice.addEventListener("mouseover", () => {

        
        choice = "red";
        
        colourChoice.style.background = choice
         
       
        
            
        });
    

})

aquabtn.addEventListener("click", () => {
    
    
    colourChoice.addEventListener("mouseover", () => {


        choice = "aqua";
        colourChoice.style.background = choice
        
    
        
        
            
        });
    
})


purplebtn.addEventListener("click", () => {
    
    
    colourChoice.addEventListener("mouseover", () => {

        choice = "purple";
   
        colourChoice.style.background = choice
        
    
        
        
            
        });
    
})

blackbtn.addEventListener("click", () => {
    
    
    colourChoice.addEventListener("mouseover", () => {

        choice = "black";
   
        colourChoice.style.background = choice
        
    
        
        
            
        });
    
})

rainbowbtn.addEventListener("click", () => {
    
    
    colourChoice.addEventListener("mouseover", () => {

        choice = multicolour[Math.floor(Math.random() * multicolour.length)];

        
   
        colourChoice.style.background = choice
        
    
        
        
            
        });
     
    
    
})
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
};

function createCustomGrid (cellWidth) {

    multiple = cellWidth * cellWidth
    cellSize = ((container.offsetWidth / cellWidth) - 2) + "px"
    gridSize()
}