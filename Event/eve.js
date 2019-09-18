var drumLength= document.querySelectorAll(".butt").length;

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  addClass(event.key);


});

for(var i=0;i<drumLength;i++){

    document.querySelectorAll(".butt")[i].addEventListener("click", function(){
     var drumHTML= this.innerHTML;
    makeSound(drumHTML);
    addClass(drumHTML);


  });


}


function addClass(para){
   var paraAdd= document.querySelector("."+para);

   paraAdd.classList.add("pressed");

   setTimeout(function(){
     paraAdd.classList.remove("pressed");
   },1000);

}




function makeSound(event1){
  switch (event1) {
    case "w":
    console.log("This is the W sound");

    break;

    case "e":
    console.log("This is the E sound");

    break;

    case "l":
    console.log("This is the L sound");

    break;

    case "c":
    console.log("This is the C sound");

    break;

    case "o":
    console.log("This is the O sound");

    break;

    case "m":
    console.log("This is the M sound");

    break;

    case "e":
    console.log("This is the E sound");

    break;

    default:
    console.log("wrong choice");


}
}
