const footer = document.querySelector("footer");
const body = document.querySelector("body");
const mouse = document.createElement("div");
body.appendChild(mouse);
let round = 0;

footer.textContent = `© ${new Date().getFullYear()} Mohamed Ibrahim`


setInterval(() => {
    if(round === 1){
        body.style.backgroundColor = "yellow";
        round = 0;
    }
    else {
        body.style.backgroundColor = "yellow";
        round = 1;
    }
},);


setInterval()