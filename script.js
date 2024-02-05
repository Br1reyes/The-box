/* Declare variables below to save the different sections (divs) of your story/* */

let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionOneImg = document.querySelector(".option-one-img");
let optionOneEnd = document.querySelector(".option-one-end");


buttonOne.onclick=function(){
 opening.style.display = "none";
    optionOne.style.display = "block";

};
buttonTwo.onclick = function() {
    opening.style.display = "none";
    // buttons.style.display = "none";
    optionTwo.style.display = "block";
      
};


// INSERT_VARIABLE.onclick=function(){

// optionOneImg.onclick = function() {
//     optionOne.style.display = "none";
//     optionOneEnd.style.display = "block";
// }

// title.onmouseover = function() {
   
// INSERT_VARIABLE.onclick=function(){

// };