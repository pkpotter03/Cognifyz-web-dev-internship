//ChangeColorButton
document.getElementById('colorChangeBtn').addEventListener('click', function () {
    var btn = document.getElementById('colorChangeBtn');
    var currentColor = btn.style.backgroundColor;

    if (currentColor === 'black') {
        btn.style.backgroundColor = 'red';
    } else {
        btn.style.backgroundColor = 'black';
    }
});

//Greeting
var currentTime = new Date();
var hours = currentTime.getHours();
var greeting;

if (hours < 12) {
    greeting = 'Good morning!';
} else if (hours < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
alert(greeting);

//Calculator
function calculateSum() {
    var calculatorResults = document.getElementsByClassName('calculator-result');
    for (var i = 0; i < calculatorResults.length; i++) {
        calculatorResults[i].remove();
    }

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var outputDiv = document.getElementById('output')

    if (isNaN(num1) || isNaN(num2)) {
        outputDiv.innerHTML += '<p class="calculator-result">Enter the numbers!!!</p>';
    } else {
        var result = num1 + num2;
        outputDiv.innerHTML += '<p class="calculator-result">The result of adding ' + num1 + ' and ' + num2 + ' is: ' + result + '</p>';
    }
}

document.getElementById('calculateBtn').addEventListener('click', calculateSum);



