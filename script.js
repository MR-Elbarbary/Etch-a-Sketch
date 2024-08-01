let numberOfBoxes = 16;

function buildTheGrid (numberOfBoxes) {
    let container = document.querySelector(".container")
    let size = `${100/numberOfBoxes}%`
    for (let i = 0; i < numberOfBoxes*numberOfBoxes; i++) {
        let box = document.createElement("div")
        box.style.width = size
        box.style.height = size
        box.setAttribute("class", "block")
        container.appendChild(box)
    }
}

function cleanContainer(){
    let container = document.querySelector(".container")
    container.innerHTML = '';
}

function resize() {
    numberOfBoxes = prompt("number of grids max 100 (100x100)")
    cleanContainer()
    buildTheGrid(numberOfBoxes)
}

document.addEventListener("DOMContentLoaded", () => {
    buildTheGrid(numberOfBoxes);

    let size = document.querySelector(".size")
    size.addEventListener("click", () =>{
        resize()
    })

    let grips = document.querySelectorAll(".block")
    grips.forEach(grip => {
        grip.addEventListener("hover", (event) =>{
        })
    });
})