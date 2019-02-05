
var buttonContainer = document.getElementById('button-container');
var colorSelect = document.getElementById('menu');
var options = document.getElementsByTagName('option');
var createButton = document.getElementById('create');


var primaryColors = ["green", "red", "yellow"];
var otherColors = ["azure", "aqua", "aquamarine", "cornflowerblue", "darkcyan",
"fuchsia", "darkseagreen", "greenyellow", "lightgray", "lime", "maroon", 
"mediumpurple", "midnightblue", "orangered", "olive", "palegreen", "purple",
"thistle", "salmon", "wheat"];


for (var i = 0; i < primaryColors.length; i++) {
    createButtons(primaryColors[i]);
}

function createButtons(color) {
    var originalButton = document.createElement("button");
    originalButton.innerText = color;
    originalButton.style.backgroundColor = color;
    originalButton.addEventListener("click", function() {document.body.style.backgroundColor = color;});
    buttonContainer.appendChild(originalButton);
}

for (var j = 0; j < otherColors.length; j++) {
    listColors(otherColors[j]);
}

function listColors(color) {
    var newOption = document.createElement("option");
    newOption.value = color;
    newOption.innerText = color;
    colorSelect.appendChild(newOption);
}

createButton.addEventListener("click", function newColorButton() {
    var newColorButton = document.createElement("button");
    var currColor = colorSelect.value;
    newColorButton.innerText = currColor;
    newColorButton.style.backgroundColor = currColor;
    newColorButton.addEventListener("click", function() {document.body.style.backgroundColor = currColor;});
    buttonContainer.appendChild(newColorButton);
    colorSelect.remove(currColor);
});

