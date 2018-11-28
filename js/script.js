'use strict';

// Global variables
var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit"); // lewy przycisk
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius"); // prawy przycisk
var outputFirst = document.getElementById("outputFirst"); // wyświetlenie temperatury
var outputSecond = document.getElementById("outputSecond"); // wyświetlenie informacji o stanie wody

// First Button
function getTemp() { // podanie temperatury
  var temp = parseFloat(window.prompt("Podaj temperaturę:")); // zapisanie do zmiennej temp
  return temp; // zwrócenie podanej wartości
};


function celsiusToFahrenheit(tempCelsius) { // funkcja do przeliczenia na st. Fahrenheita
  var tempF = tempCelsius * 1.8 + 32; // przeliczenie na stopnie Far i zapisanie po przeliczniu do zmiennej tempF. To jest temperatura w Fahrenheitah
  return tempF; // zwrócenie wartości temperatury w Fahrenheitah
};

function fahrenheitToCelsius(tempFahrenheit) { // funkcja do przeliczenia na st. Celsiusza
  var tempC = (tempFahrenheit - 32) / 1.8; // przeliczenie na stopnie Cel i zapisanie po przeliczeniu do zmiennej tempC. Temperatura w Celsiuszach
  return tempC; // zwrócenie wartości temperatury w Celsiuszach
};

function showTemp(temp){ // funkcja do wyświetlenia info z temperaturą
  outputFirst.innerHTML = "Temperatura po przeliczeniu wynosi " + temp.toFixed(1) + " stopni";
};

fahrenheitToCelsiusButton.addEventListener("click", function() { // wywołanie po kolei funkcji dla pierwszego buttona
  var tempF = getTemp();
  checkTemp(tempF);
  var tempC = fahrenheitToCelsius(tempF);
  showTemp(tempC);
  waterInfo(tempC);
});

celsiusToFahrenheitButton.addEventListener("click", function () { // wywołanie po kolei funkcji dla drugiego buttona
  var tempC = getTemp();
  checkTemp(tempC);
  var tempF = celsiusToFahrenheit(tempC);
  showTemp(tempF);
  waterInfo(tempC);
});

function waterInfo(tempCelsius){ // informacja o stanie wody
  if (tempCelsius < 0){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda jest cieczą.";
  } else if (tempCelsius >= 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda zamienia się w parę.";
  }
};




/*
function checkTempCelsius(tempCelsius) { // sprawdzenie podanej wartości
  if (!isNaN(tempCelsius)) { // sprawdzenie czy wartość nie jest pusta
      var tempF = tempCelsius * 1.8 + 32; // przeliczenie na stopnie Far
      return tempF;
      // outputFirst.innerHTML = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + tempF.toFixed(1) + "℉.";
    } else {
      outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
    }
};
*/
/*
function showTempCelsius(tempF) {
  var tempCelsius;
  outputFirst.innerHTML = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + tempF.toFixed(1) + "℉.";
};
*/

/*
celsiusToFahrenheitButton.addEventListener("click", function() { // wywołanie funkcji po kolei
  var tempF = getTempCelsius();
  checkTempCelsius(tempF);
  showTempCelsius(tempF);
  waterInfo(tempF);
});
*/

/*
// Second Button
function getTempFahrenheit() { // podanie temperatury
  return parseFloat(window.prompt("Podaj temperaturę w stopniach Fahrenheit'a:"));
};
*/
/*
function checkTempFahrenheit(tempFahrenheit){ // sprawdzenie podanej wartości
  if (!isNaN(tempFahrenheit)) { // sprawdzenie czy wartość nie jest pusta
      var tempC = (tempFahrenheit - 32) / 1.8; // przeliczenie na stopnie Cel
      outputFirst.innerHTML = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + tempC.toFixed(1) +"℃.";
    } else {
      outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
    }
};
*/

// tu piszę nowy kod
/*
var info = function showMessage(text) {
  outputFirst.innerHTML = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + temp.toFixed(1) +"℃.";
};
*/

/*
fahrenheitToCelsiusButton.addEventListener("click", function() {
  var tempC = getTempFahrenheit();
  checkTempFahrenheit(tempC);
  // outputInfo(this.temp);
  waterInfo(tempC);
});
*/

/*
function waterInfo(tempCelsius){ // informacja o stanie wody
  if (tempCelsius < 0){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda jest cieczą.";
  } else if (tempCelsius >= 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃ woda zamienia się w parę.";
  }
};
*/
// zakończenie pisania nowego kodu


















// to co jest ponizej jest sprawdzone i działa :D
/*
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
*/

/*
To ponizej nie działa

function checkTemp(temp) {
  if (temp === !isNaN) {
    outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
  };
};
*/