const toggle= document.getElementById("btn");
const avatar= document.getElementById("avatar");
let value=true;

console.log(toggle);
toggle.addEventListener("click",function(){
    value = !value;
    if(value){
        toggle.textContent= "show" ;
        avatar.classList.add("w3-hide");
    }
    else {
        toggle.textContent= "hide";
        avatar.classList.remove("w3-hide");}
})