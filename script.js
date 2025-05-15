const btn1El=document.querySelector(".btn1");
const btn2El=document.querySelector(".btn2");
const containerEl=document.querySelector(".container")
const titleEl=document.querySelector(".title");
const btn3El= document.querySelector(".btn3");
const bodyEl=document.querySelector("body");
const btn4El=document.querySelector(".btn4");

btn1El.addEventListener("click",function(){
    bodyEl.style.backgroundColor="#50C9CE";
});
btn2El.addEventListener('click',function(){
    titleEl.style.fontSize="90px";
});
btn3El.addEventListener("click",function(){
    bodyEl.style.backgroundColor="white";
    titleEl.style.fontSize="32px";
    containerEl.style.backgroundColor="white";
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => {
        button.style.backgroundColor = "white";  
        button.style.color = "black";             
        button.style.border = "";
        button.style.padding = "";
        button.style.borderRadius = "";
        button.style.fontSize = "";
        button.style.margin = "";
        button.style.cursor = "";
    })
});
btn4El.addEventListener("click",function(){
    containerEl.style.backgroundColor="#B24C63";

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => {
        button.style.backgroundColor = "#3A6186";  
        button.style.color = "white";             
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.borderRadius = "8px";
        button.style.fontSize = "16px";
        button.style.margin = "5px";
        button.style.cursor = "pointer";
    })
});