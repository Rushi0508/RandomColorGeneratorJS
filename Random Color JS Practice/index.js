let button = document.querySelector("button");
let btns = document.querySelectorAll("button");
let span = document.querySelector("span");
let btncpy = document.querySelector(".copy");
document.body.style.backgroundColor = "rgb(234, 23, 78)";
button.addEventListener("click", ()=>{
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    span.innerText = newColor;
    for(let x of btns){
        x.style.borderColor = newColor;
    }
});

const randomColor = ()=>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

btncpy.addEventListener("click", ()=>{
    const x = span.innerText;
    navigator.clipboard.writeText(x);
});

