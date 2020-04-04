var wish = document.getElementById('wish')

function displayValue(element, value) {
    document.getElementById(element).value = value;
}

function generateWish() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var ageSuffix = ordinalSuffix(age);
    
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

Red.onclick = () => setWishColour('red');
Blue.onclick = () => setWishColour('blue');
Green.onclick = () => setWishColour('green');
Pink.onclick = () => setWishColour('magenta');
Orange.onclick = () => setWishColour('orangered');
Purple.onclick = () => setWishColour('purple');

function setWishColour(colour) {
    wish.style.color = colour;
}