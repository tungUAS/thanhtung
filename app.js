


const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


const text = document.querySelector("h2.v");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent ="";
for(let i=0;i< splitText.length; i++)
{
    text.innerHTML += "<span>" + splitText[i] +"</span>";
}

let char =0;
let timer = setInterval(onTick,200);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char === splitText.length)
    {
        complete();
        return;
    }
}

function complete()
{
    clearInterval(timer);
    timer = null;
}