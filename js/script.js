'use strict';

// Global variables
var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit"); // lewy przycisk
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius"); // prawy przycisk
var outputFirst = document.getElementById("outputFirst"); // wyświetlenie temperatury
var outputSecond = document.getElementById("outputSecond"); // wyświetlenie informacji o stanie wody

// First Button
function getTempCelsius() { // podanie temperatury
  var temp = parseFloat(window.prompt("Podaj temperaturę w stopniach Celsiusza:"));
  return temp;
};

function checkTempCelsius(tempCelsius) { // sprawdzenie podanej wartości
  if (!isNaN(tempCelsius)) { // sprawdzenie czy wartość nie jest pusta
      var temp = tempCelsius * 1.8 + 32; // przeliczenie na stopnie Far
      outputFirst.innerHTML = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + temp.toFixed(1) + "℉.";
    } else {
      outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
    }
};

celsiusToFahrenheitButton.addEventListener("click", function() { // wywołanie funkcji po kolei
  var temp = getTempCelsius();
  checkTempCelsius(temp);
  waterInfo(temp);
});

// Second Button
function getTempFahrenheit() { // podanie temperatury
  var temp = parseFloat(window.prompt("Podaj temperaturę w stopniach Fahrenheit'a:"));
  return temp;
};

function checkTempFahrenheit(tempFahrenheit){ // sprawdzenie podanej wartości
  if (!isNaN(tempFahrenheit)) { // sprawdzenie czy wartość nie jest pusta
      var temp = (tempFahrenheit - 32) / 1.8; // przeliczenie na stopnie Cel
      outputFirst.innerHTML = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + temp.toFixed(1) +"℃.";
    } else {
      outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
    }
};

fahrenheitToCelsiusButton.addEventListener("click", function() {
  var temp = getTempFahrenheit();
  checkTempFahrenheit(temp);
  waterInfo(temp);
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