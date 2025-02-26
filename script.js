let minNumber = document.getElementById("min")
let maxNumber = document.getElementById("max")
let btn = document.getElementById("btn")
let output = document.getElementById("forAns")
let form = document.querySelector("form")
let aqua = document.getElementById("aqua")
let blue = document.getElementById("blue")
let red = document.getElementById("red")
let purple = document.getElementById("purple")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")
let magenta = document.getElementById("magenta")
let brush = document.getElementById("brush")
let colors = document.getElementById("colors")
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    makeRandom(minNumber.value, maxNumber.value)
})

function makeRandom(min, max){
    return (output.innerHTML = +min + Math.floor(Math.floor(Math.random() * (max - min + 1))));
}

brush.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
}
aqua.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "aqua";
    brush.style.color = "aqua";
}
blue.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "blue";
    brush.style.color = "blue";
}
red.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "red";
    brush.style.color = "red";
}
purple.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "purple";
    brush.style.color = "purple";
}
green.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "green";
    brush.style.color = "green";
}
yellow.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "yellow";
    brush.style.color = "yellow";
}
magenta.onclick = function(){
    colors.style.display = colors.style.display === "flex" ? "none" : "flex";
    form.style.backgroundColor = "magenta";
    brush.style.color = "magenta";
}

