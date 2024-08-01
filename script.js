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

document.addEventListener("DOMContentLoaded", () => {
    buildTheGrid(32);
    let resize = document.addEventListener("click", () =>{})
    let grips = document.querySelectorAll(".block")
    grips.forEach(grip => {
        grip.addEventListener("hover", () =>{

        })
    });
})