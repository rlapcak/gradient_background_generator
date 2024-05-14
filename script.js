var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradientDirection = document.getElementById("gradientDirection");
var options = document.querySelectorAll("option");

function setGradient(){
	body.style.background = 
		"linear-gradient("
		+ String(getDirection())
		+ ", "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background
  + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.onload = setGradient();

// make direction of gradient adjustable
function getDirection() {
	for (var x of gradientDirection) {
	  gradientDirection.addEventListener("click", setGradient);
	  return gradientDirection.options[gradientDirection.selectedIndex].text;
	}
  }
	