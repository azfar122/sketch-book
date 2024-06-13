const bigbox=document.querySelector(".box")
let colourpicker=document.querySelector("#colour")
let colour=colourpicker.value;
const eraser=document.querySelector("#eraser")
for (let i=0;i<800;i++){
const smallbox=document.createElement("div");
smallbox.className="smallbox";
bigbox.appendChild(smallbox);
}
const smallboxes=document.querySelectorAll(".smallbox")
smallboxes.forEach((smallbox=>{
    smallbox.addEventListener("mouseover",function(){

if(eraser.checked){

    smallbox.style.backgroundColor="white";
}
else{
    smallbox.style.backgroundColor=colour;
}
    })
}))


colourpicker.addEventListener("input",function(){
colour=colourpicker.value;
})
