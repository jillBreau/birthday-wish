var age = document.getElementById("age")
var enterName = document.getElementById("enterName")
var generateWish = document.getElementById("generateWish")

function displayValue(element, value) {
    document.getElementById(element).value = value;
}

function generateMessage() {
    console.log("!!!!!!!!!!!!!!!!")
    var name = document.getElementById('nameView').value;
    console.log(name)
    var age = document.getElementById('ageView').value;
    var ageSuffix = ordinalSuffix(age);
    
    var wish = document.getElementById('wishView')
    wish.innerHTML = `Happy ${ageSuffix} Birthday ${name}!!`
    wish.style.color = color
}

function ordinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
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


Red.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'red'
}
Blue.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'blue'
}
Green.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'green'
}
Pink.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'magenta'
}
Orange.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'orangered'
}
Purple.onclick = function() {
    var wish = document.getElementById('wishView')
    wish.style.color = 'purple'
}


document.getElementById("ageView").value = age.value;