// Initialization 
const grid = document.querySelector('.grid')

// creating grid
function createGrid(){
    for (let i=1; i<= 42; i++){
        const box = document.createElement('div')
        box.classList.add('box')
        grid.append(box)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createGrid()
})