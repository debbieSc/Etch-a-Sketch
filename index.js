const container = document.querySelector(".container")

const multiple = 16 * 16;
console.log(multiple)

for(let i=0; i<multiple; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width ="100px";
    createDiv.style.height ="100px";
    createDiv.style.background ="pink";
    createDiv.style.border = "1px solid black";
    
container.appendChild(createDiv);
}