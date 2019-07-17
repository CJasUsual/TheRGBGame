var numSquares = 6;
var colours = generateRandomColours(6);
var colourPicked = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var squares = document.querySelectorAll(".square");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var menu = document.querySelector(".menu");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

colourDisplay.textContent = colourPicked;

for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
        reset();
    });
}

// resetButton button //play again // new colours
resetButton.addEventListener("click", function () {
    reset();
});

// assigning squares to colours
for (var i = 0; i < squares.length; i++) {
    //add colours to the square
    squares[i].style.backgroundColor = colours[i];

    //add click feature
    squares[i].addEventListener("click", function () {
        //get the colour of the square
        var clickedColour = this.style.backgroundColor;
        //compare the colour
        if (clickedColour === colourPicked) {
            //change the colour of other squares and h1 background to the correct colour
            h1.style.backgroundColor = clickedColour;
            message.innerHTML = "<strong>Correct!</strong>";
            resetButton.textContent = "Play Again?";
            changeColours(clickedColour);
        } else {
            message.innerHTML = "<strong>Try Again</strong>";
            this.style.backgroundColor = "#232323";
        }
    });
}

function reset() {
    colours = generateRandomColours(numSquares);
    //change the colour to matched the picked colour
    colourPicked = pickColour();
    //pick a new random colour
    colourDisplay.textContent = colourPicked;
    //change the colours for the squares
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colours";
}

function changeColours(colour) {
    //loop through all colours
    for (var i = 0; i < squares.length; i++) {
        //change the colour of all the colours
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    //generate random numbers in the colour array
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return arr;
}

function randomColour() {
    //get random numbers for each rgb colour
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}