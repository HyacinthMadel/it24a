// document.getElementById("btn").addEventListener("click"), function () {
//     alert("Button was click!");
// });

function updateDisplay(){
   let textbox = document.getElementById("text");
   let displaytext = document.getElementById("display");

    displaytext.textContent = textbox.value;
    


}