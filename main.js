// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let color = document.querySelectorAll('.color')
let currentColor = document.querySelector('#current-color')

const palette = document.querySelectorAll('#palette .color')

color.forEach((item)=> {
  item.addEventListener('click',(event)=> {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})

const cell = document.querySelectorAll('.cell')

cell.forEach((cel) => {
  cel.addEventListener('click', () => {
    cel.style.backgroundColor = currentColor.style.backgroundColor
  })
})