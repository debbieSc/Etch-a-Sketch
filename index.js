const container = document.querySelector(".container");
const smallbtn = document.querySelector(".small");
const multiple = 16 * 16;

smallbtn.addEventListener("click", () => {
    
    

})

for(let i=0; i<multiple; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width ="100px";
    createDiv.style.height ="100px";
    createDiv.style.background ="pink";
    createDiv.style.border = "1px solid black";
    createDiv.className = "squares"
    
container.appendChild(createDiv);


};

const squares = document.querySelector(".squares")

squares.onmousedown = () => {

    squares.style.background = "black";
}



/*squares.forEach(div => div.addEventListener("mousedown", () => {

squares.style.background = "black";

    
}));





squares.onmousedown = () => {
    
    squares.style.background = "black";
}*/