'use strict';

// Global variables
var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit"); // lewy przycisk
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius"); // prawy przycisk
var outputFirst = document.getElementById("outputFirst"); // wyświetlenie temperatury
var outputSecond = document.getElementById("outputSecond"); // wyświetlenie informacji o stanie wody



function getTemp() { // podanie temperatury
  var temp = parseFloat(window.prompt("Podaj temperaturę:"));
  return temp;
};

function celsiusToFahrenheit(tempCelsius) { // sprawdzenie podanej wartości
  var tempF = tempCelsius * 1.8 + 32; // przeliczenie na stopnie Far
  return tempF;
};
function fahrenheitToCelsius(tempFahrenheit) {
  var tempC = (tempFahrenheit - 32) / 1.8; // przeliczenie na stopnie Cel
  return tempC;
}

function showTemp(temp){ // sprawdzenie podanej wartości
  outputFirst.innerHTML = "Obliczona temperatura to " + temp;
};

fahrenheitToCelsiusButton.addEventListener("click", function() {
  var tempF = getTemp();
  var tempC = fahrenheitToCelsius(tempF);
  showTemp(tempC);
  waterInfo(tempC);
});
celsiusToFahrenheitButton.addEventListener("click", function () {
  var tempC = getTemp();
  var tempF = celsiusToFahrenheit(tempC);
  showTemp(tempF);
  waterInfo(tempC);
});

function waterInfo(tempCelsius){ // informacja o stanie wody
  if (tempCelsius < 0){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest cieczą.";
  } else if (tempCelsius >= 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda zamienia się w parę.";
  }
};