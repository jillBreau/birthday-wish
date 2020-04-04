var wish = document.getElementById('wish')

function displayValue(element, value) {
    document.getElementById(element).value = value;
}

function generateWish() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const ageSuffix = ordinalSuffix(age);
    
    document.getElementById('wishPrompt').innerHTML = "Here is your wish! Take a picture and share it!";
    document.getElementById('topImage').src = "pictures/banner.png";
    document.getElementById('bottomImage').src = "pictures/balloons.png";

    wish.innerHTML = `Happy ${ageSuffix} Birthday ${name}!!`;

}

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
}

Red.onclick = () => setColour('Red', 'red');
Blue.onclick = () => setColour('Blue', 'blue');
Green.onclick = () => setColour('Green', 'green');
Pink.onclick = () => setColour('Pink', 'magenta');
Orange.onclick = () => setColour('Orange', 'orangered');
Purple.onclick = () => setColour('Purple', 'purple');

function setColour(button, colour) {
    resetButtons();
    document.getElementById(button).style.border = '2px solid black';
    document.getElementById(button).style.color = 'black'
    wish.style.color = colour;
}

function resetButtons() {
    const colourButtons = ["Red", "Blue", "Green", "Pink", "Orange", "Purple"]

    for (button of colourButtons) {
        document.getElementById(button).style.border = `2px solid white`;
        document.getElementById(button).style.color = 'white'
    }
}