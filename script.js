var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".randomButton")

var randomColor = Math.floor(Math.random()*16777215).toString(16);


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {

	color1 = randomColor;
	body.style.background = 
	"linear-gradient(to right, " 
	+ document.getElementById(".button1").style.color
	+ ", "
	+ color2.value
	+ ")";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button1.addEventListener("click", setRandom);



