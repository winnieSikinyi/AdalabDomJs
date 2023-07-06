document.getElementById("heading").style.color="indigo"
document.getElementById("heading").style.backgroundColor="green"

document.getElementById("intro").innerHTML = "My name is Winnie Sikinyi and I am 22 years old"
document.getElementById("intro").style.fontSize = "24px";
let paragraph = document.createElement("p");
paragraph.innerHTML = "I am new"
document.getElementById("container").appendChild(paragraph);
let child = document.getElementById("container").children;

console.log({child});
let button = document.getElementById("button")
button.addEventListener("click",function(){
    button.innerHTML = "Clicked !!!";
})
document.getElementById("container").setAttribute("class","container");