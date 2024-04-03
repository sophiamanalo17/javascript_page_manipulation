// BACKGROUND GRADIENT
var gradient = new Gradient()
gradient.initGradient('#gradient-canvas');


let usernameInput = document.getElementById("username").value;
let headingElem = document.getElementById("outputContainer").value;
var outputParagraph = document.getElementById("outputText");
var bigPic = document.getElementById("emoji").value;
console.log("innit")

var dares = ["to send a kissy face emoji to your third contact", " to eat a banana and drink sprite", "to eat a whole bowl of popcorn in twnety seconds witout using your hands"];
var colors = ["#801947", "#5f5fb8", "#134d52", "#438c4f", "#99a133"]

function generator(incUserInput) {
    console.log("i ran")
    var randomIndex = Math.floor(Math.random() * dares.length);
    console.log(randomIndex);
    var selectedRandomDare = dares[randomIndex];
    outputParagraph.innerText = incUserInput + ", your dare is " + selectedRandomDare;
  }

function restyle(){
    var randomIndexColor = Math.floor(Math.random() * colors.length);
    var selectedRandomColor = colors[randomIndexColor];
    outputContainer.style.backgroundColor = selectedRandomColor

    firstHeading.style.color = selectedRandomColor
    firstHeading.style.fontSize = "20px"
    emoji.style.width = "30rem"

}

executeButton.addEventListener("click", function(){
    usernameInput = document.getElementById("username").value;
    // alert(usernameInput)
    var currentInputText = usernameInput;
    generator(currentInputText);
    restyle();
    console.log(currentInputText);
})


