var textType = "solid";
var textColour = "black";
var backgroundType = "solid";
var backgroundColour = "grey";
var besideBday = "!"
var besideName = ""

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

    context.font = '40px Candara';
    context.textAlign = "center";

    if (name) {
        besideBday = "";
        besideName = "!";
    } else {
        besideBday = "!";
        besideName = "";
    }

    if (textType == "solid") {
        context.fillStyle = textColour;
        context.fillText(`Happy`, 258, 200);
        context.fillText(`${ageSuffix} Birthday${besideBday}`, 258, 250);
        context.fillText(`${name}${besideName}`, 258, 300);
    } else {
        context.strokeStyle = textColour;
        context.lineWidth = "1.5";
        context.strokeText(`Happy`, 258, 200);
        context.strokeText(`${ageSuffix} Birthday${besideBday}`, 258, 250);
        context.strokeText(`${name}${besideName}`, 258, 300);
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

function ageSliderChange(value) {
    displayValue('age', value); 
    drawWish();
};

function ageInputChange(value) {
    displayValue('ageSlider', value);
    drawWish();
};

function updateTextType(type) {
    textType = type;
    drawWish();
};

textRed.onclick = () => setTextColour('textRed', 'red');
textBlue.onclick = () => setTextColour('textBlue', 'blue');
textYellow.onclick = () => setTextColour('textYellow', 'yellow');
textGreen.onclick = () => setTextColour('textGreen', 'green');
textPink.onclick = () => setTextColour('textPink', 'magenta');
textBlack.onclick = () => setTextColour('textBlack', 'black');
textOrange.onclick = () => setTextColour('textOrange', 'orangered');
textPurple.onclick = () => setTextColour('textPurple', 'purple');
textWhite.onclick = () => setTextColour('textWhite', 'white');

function setTextColour(button, colour) {
    resetTextButtons();
    document.getElementById(button).style.backgroundColor = colour;

    textColour = colour;
    drawWish();
};

function resetTextButtons() {
    const textButtons = ["textRed", "textBlue", "textYellow", "textGreen",
                        "textPink", "textBlack", "textOrange", "textPurple", "textWhite"];

    for (button of textButtons) {
        document.getElementById(button).style.backgroundColor = 'rgb(175, 178, 178)';
    }
};

function updateBackgroundType(type) {
    backgroundType = type;
    drawWish();
};

backgroundRed.onclick = () => setBackgroundColour('backgroundRed', 'red');
backgroundBlue.onclick = () => setBackgroundColour('backgroundBlue', 'blue');
backgroundYellow.onclick = () => setBackgroundColour('backgroundYellow', 'yellow');
backgroundGreen.onclick = () => setBackgroundColour('backgroundGreen', 'green');
backgroundPink.onclick = () => setBackgroundColour('backgroundPink', 'magenta');
backgroundBlack.onclick = () => setBackgroundColour('backgroundBlack', 'black');
backgroundOrange.onclick = () => setBackgroundColour('backgroundOrange', 'orangered');
backgroundPurple.onclick = () => setBackgroundColour('backgroundPurple', 'purple');
backgroundWhite.onclick = () => setBackgroundColour('backgroundWhite', 'white');

function setBackgroundColour(button, colour) {
    resetBackgroundButtons();
    document.getElementById(button).style.border = `6px solid ${colour}`;

    backgroundColour = colour;
    drawWish();
};

function resetBackgroundButtons() {
    const backgroundButtons = ["backgroundRed", "backgroundBlue", "backgroundYellow", "backgroundGreen",
                                "backgroundPink", "backgroundBlack", "backgroundOrange", "backgroundPurple", "backgroundWhite"];

    for (buttonColor of backgroundButtons) {
        document.getElementById(buttonColor).style.border = '6px solid rgb(175, 178, 178)';
    }
};