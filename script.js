let numberOfBoxes = 16;
let color = "black";
let eraser = false;
let random = false;

function buildTheGrid (numberOfBoxes) {
    let container = document.querySelector(".container")
    container.backgroundColor = "white";
    let size = `${100/numberOfBoxes}%`
    for (let i = 0; i < numberOfBoxes*numberOfBoxes; i++) {
        let box = document.createElement("div")
        box.style.width = size
        box.style.height = size
        box.setAttribute("class", "block")
        container.appendChild(box)
    }
    container.addEventListener("mouseover", (event =>{
        if (eraser == true) {
            event.target.style.backgroundColor = "white";
        }
        else if (random == true) {
            event.target.style.backgroundColor = getRandomColor();
        }
        else{
            event.target.style.backgroundColor = color
        }
    }))
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function cleanContainer(){
    let container = document.querySelector(".container")
    container.innerHTML = '';
}

function resize(numberOfBoxes) {
    cleanContainer()
    buildTheGrid(numberOfBoxes)
}

function changeEraser(){
    let toggleEraser = document.querySelector("#eraser")
    if(eraser == false){
        let toggleRandom = document.querySelector("#random")
        toggleRandom.style.backgroundColor = "red"
        toggleEraser.style.backgroundColor = "green"
        eraser = true
        random = false
    }
    else{
        eraser = false
        toggleEraser.style.backgroundColor = "red"
    }
}

function changeRandom() {
    let toggleRandom = document.querySelector("#random")
    if(random == false){
        let toggleEraser = document.querySelector("#eraser")
        random = true
        eraser = false
        toggleEraser.style.backgroundColor = "red"
        toggleRandom.style.backgroundColor = "green"
    }
    else{
        random = false
        toggleRandom.style.backgroundColor = "red"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let toggleEraser = document.querySelector("#eraser")
    toggleEraser.style.backgroundColor = "red"
    toggleEraser.addEventListener("click", ()=> {
        changeEraser()
    })

    let toggleRandom = document.querySelector("#random")
    toggleRandom.style.backgroundColor = "red"
    toggleRandom.addEventListener("click", () => {
        changeRandom()
    })


    let colorPicker = document.querySelector("#color")
    colorPicker.addEventListener("input", (event) =>{
        color = event.target.value
    })

    let slider = document.querySelector("#slider")
    slider.addEventListener("mouseup", () =>{
        resize(slider.value)
    })

    numberOfBoxes = (slider.value)
    buildTheGrid(numberOfBoxes);

    let restart = document.querySelector(".restart")
    restart.addEventListener("click", () =>{
        numberOfBoxes = (slider.value)
        cleanContainer()
        buildTheGrid(numberOfBoxes)
    })
})