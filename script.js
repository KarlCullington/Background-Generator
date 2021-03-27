var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");
var copyBtn = document.querySelector(".copy-btn")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}
// SET RANDOM BUTTON
// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

// SET COPY GRADIENT BUTTON
copyBtn.onclick = function() {
	var element = document.querySelector('h3');
	var range = document.createRange();
	range.selectNode(element);
	window.getSelection().addRange(range);
    document.execCommand("copy");
}

function copyCss(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", css.textContent);
    }
    alert("Copied to clipboard!");
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
setGradient();
randomButton.addEventListener("click", setRandomGradient);
copyBtn.addEventListener("copy", copyCss);