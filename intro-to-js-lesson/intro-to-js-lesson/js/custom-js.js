// the first thing we are going to do is check to see if our page has been fully rendered

document.addEventListener('DOMContentLoaded', (loaded) =>{
// now let's ltest to make sure our connection is working
console.log('Our JS is working');

console.log('gigi dagostino best dj in the world');

//declare our variables
let a = 200;
let b = 100;
let c = a + b;

//const is a variable that cannot be changed once the value has been assigned

const value1 = 500;
const value2 = 600;
let total = value1 + value2;

//lets use these variables to output the values to our html

document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + "<p>Let: The value of C is " + c + "</p>" + 
"<p>Const: The total is: " + total +"</p>";

document.getElementById("ex2").innerHTML = "<h3>NEW ROW</h3>" + "<p>g97537fg2tdvbsouadusgfiyvdt6vewyvdip</p>" +
"<img src = './img/spongebob.jpg'>";

document.getElementById("newrow").innerHTML = "<img id=carphoto src ='./img/car.png'>" + "<h2>this is a car.</h2>" + "<p>it's a beautiful car.</p>";

//Now we will style our text

document.getElementById("ex1").style.color = "#f8f8f8";
document.getElementById("ex1").style.padding = "0% 10%";

document.getElementById("ex2").style.color = "#73648A";
document.getElementById("ex2").style.fontWeight = "bold";
document.getElementById("ex2").style.backgroundColor = "white";
document.getElementById("ex2").style.marginTop = "25%";

document.getElementById("carphoto").style.cssText = "height: 450px; width: 770px";


//now our global header 

document.getElementById("lesson-global-header").innerHTML = 
"<div id = 'logo-container'>" + 
    "<a href= '#'>" + 
        "<img src = './img/logo.png' header logo'>" + 
    "</a>"+
"</div>"+ 

"<nav><menu>" + 
    "<li><a href='#'> Item 1</a></li>" +
    "<li><a href='#'> Item 2</a></li>" +
    "<li><a href='#'> Item 3</a></li>" +
"</nav></menu>";

document.getElementById("lesson-global-header").style.cssText = //this way you can add multiple properties*****************
"display: flex; height: 125px; background-color: #f8f8f8; align-items: center;" 






})