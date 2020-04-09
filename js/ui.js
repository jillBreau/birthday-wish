var textType = "solid";
var textColour = "black";
var backgroundType = "solid";
var backgroundColour = "grey";

function displayValue(element, value) {
    document.getElementById(element).value = value;
};

function drawWish() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const ageSuffix = ordinalSuffix(age);

    var canvas = document.getElementById('wishCanvas');
    var context = canvas.getContext('2d');
    var image = document.getElementById('wishImage');

    if (backgroundType == "solid") {
        context.fillStyle = backgroundColour;
    } else {
        gradient = context.createLinearGradient(0, 0, 516, 375);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, backgroundColour);
        context.fillStyle = gradient;
    }

    context.fillRect(0, 0, 516, 375);
    context.drawImage(image, 0, 0);

    context.font = "40px Calibri";
    context.textAlign = "center";

    if (textType == "solid") {
        context.fillStyle = textColour;
        context.fillText(`Happy ${ageSuffix}`, 258, 250);
        context.fillText(`Birthday ${name}!!`, 258, 300);
    } else {
        context.strokeStyle = textColour;
        context.lineWidth = "1.5";
        context.strokeText(`Happy ${ageSuffix}`, 258, 250);
        context.strokeText(`Birthday ${name}!!`, 258, 300);
    }

};

function ordinalSuffix(i) {
    var j = i % 10;
    var k = i % 100;
    if (i == 0) {
        return "";
    }
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
};

function updateTextType(type) {
    textType = type;
};

textRed.onclick = () => setTextColour('textRed', 'red');
textBlue.onclick = () => setTextColour('textBlue', 'blue');
textGreen.onclick = () => setTextColour('textGreen', 'green');
textPink.onclick = () => setTextColour('textPink', 'magenta');
textOrange.onclick = () => setTextColour('textOrange', 'orangered');
textPurple.onclick = () => setTextColour('textPurple', 'purple');

function setTextColour(button, colour) {
    resetTextButtons();
    document.getElementById(button).style.backgroundColor = 'rgb(180, 180, 180)';
    textColour = colour;
};

function resetTextButtons() {
    const textButtons = ["textRed", "textBlue", "textGreen",
                                "textPink", "textOrange", "textPurple"];

    for (button of textButtons) {
        document.getElementById(button).style.backgroundColor = 'white';
    }
};

function updateBackgroundType(type) {
    backgroundType = type;
};

backgroundRed.onclick = () => setBackgroundColour('backgroundRed', 'red');
backgroundBlue.onclick = () => setBackgroundColour('backgroundBlue', 'blue');
backgroundGreen.onclick = () => setBackgroundColour('backgroundGreen', 'green');
backgroundPink.onclick = () => setBackgroundColour('backgroundPink', 'magenta');
backgroundOrange.onclick = () => setBackgroundColour('backgroundOrange', 'orangered');
backgroundPurple.onclick = () => setBackgroundColour('backgroundPurple', 'purple');

function setBackgroundColour(button, colour) {
    resetBackgroundButtons();
    document.getElementById(button).style.border = '2px solid black';
    document.getElementById(button).style.color = 'black';
    backgroundColour = colour;
};

function resetBackgroundButtons() {
    const backgroundButtons = ["backgroundRed", "backgroundBlue", "backgroundGreen",
                                "backgroundPink", "backgroundOrange", "backgroundPurple"];

    for (button of backgroundButtons) {
        document.getElementById(button).style.border = '2px solid white';
        document.getElementById(button).style.color = 'white';
    }
};