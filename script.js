/* Declare variables below to save the different sections (divs) of your story*/
let optionYes = document.querySelector(".option-yes");
let optionNo = document.querySelector(".option-no");
let woodsYes = document.querySelector(".option-woods");
let woodsNo = document.querySelector(".option-nowoods");
let imgTuna = document.querySelector(".food");
let imgOnions = document.querySelector(".food-two");
let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let optionTwoscreen = document.querySelector(".option-two-screen");
let font = document.querySelector(".cave");
let optiononeEnd = document.querySelector(".option-one-end");
let buttonTwo = document.querySelector(".two-buttons");
let optionOnescreen = document.querySelector(".option-one-screen");
let optionTwoend = document.querySelector(".option-two-end");
let optionThreeend = document.querySelector(".option-three-end");

optionYes.onclick=function(){

title.style.display="none"; 
  storyOpening.style.display="none";
  buttons.style.display="none";
  optionOnescreen.style.display="block";
   optionOnescreen.style.backgroundColor="green";
  buttonTwo.style.display="block";

};


optionNo.onclick=function(){

  title.style.display="none"; 
storyOpening.style.display="none";
  buttons.style.display="none"
  optiononeEnd.style.display="block";
};


woodsYes.onclick=function(){
   optionOnescreen.style.display="none";
   optionTwoscreen.style.display="block";
 optionTwoscreen.style.backgroundColor="black";
  font.style.color="white";
  buttonTwo.style.display="none";
  imgOnions.style.display="block";
  imgTuna.style.display="block";
};

woodsNo.onclick=function(){
 optionOnescreen.style.display="none";
 optiononeEnd.style.display="block";
  buttonTwo.style.display="none";
};

 imgTuna.onclick=function(){
optionTwoscreen.style.display="none";
    imgOnions.style.display="none";
  imgTuna.style.display="none";
optionTwoend.style.display="block";
 };

imgOnions.onclick=function(){
  optionTwoscreen.style.display="none";
    imgOnions.style.display="none";
  imgTuna.style.display="none";
optionThreeend.style.display="block";
 };

  
