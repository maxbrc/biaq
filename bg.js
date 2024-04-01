/*

Credit to the template for this:
https://codepen.io/inegoita/pen/xOgKRM

Simple and easy to alter, thanks a lot. ~ Max

*/

//create the canvas element
let myCanvas = document.createElement("canvas");

//set the canvas width and height
myCanvas.width=1000;
myCanvas.height=1000;

//get the 2-dimensional drawing context
var ctx = myCanvas.getContext("2d");
//first we clear the canvas
ctx.clearRect(0,0,1000,1000);
//setup the palette array
var palette = ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black",
"#4d194d","#3e1f47","#312244", "#B7094C", "#A01A58", "#892B64", "#c9184a", "#c1121f", "#e63946", "#dd2d4a", "#89023e"];
// this is the best solution i could some up with

//create 10x10 squares
for (i=0;i<100;i++){
 for(j=0;j<100;j++){
  //indicate when starting drawing a rectangle
  ctx.beginPath();
  ctx.rect(0+10*j,0+10*i,10,10);

  //choose a random color from the palette
  var randomColorIndex = 
    Math.round(Math.random() * (palette.length-1));
  ctx.fillStyle = palette[randomColorIndex];

  //fill the rectangle with the selected color
  ctx.fill();

  //draw a white border for the rectangle
  ctx.strokeStyle = "#33415c";
  ctx.stroke();
  //indicating when finished drawing the rectangle
  ctx.closePath();
 }
}

//this will run when the document has finished loading
function setDynamicBackground(){
  //generate the image from the canvas
  var imageDataURL = myCanvas.toDataURL();

  //set the dynamic image as the background
  document.body.style.background =  "transparent url('"+imageDataURL+"') repeat";
}

document.body.addEventListener('load', setDynamicBackground()); // basically onload on body tag