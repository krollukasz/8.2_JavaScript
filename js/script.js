'use strict';

// Global variables
var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit"); // lewy przycisk
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius"); // prawy przycisk
var outputFirst = document.getElementById("outputFirst"); // wyświetlenie temperatury
var outputSecond = document.getElementById("outputSecond"); // wyświetlenie informacji o stanie wody

function getTemp() { // podanie temperatury
  var temp = window.prompt("Podaj temperaturę:"); // zapisanie podanej wartości do zmiennej temp
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
  outputFirst.innerHTML = "Temperatura po przeliczeniu wynosi " + temp.toFixed(1) + " stopni.";
};

celsiusToFahrenheitButton.addEventListener("click", function () { // wywołanie po kolei funkcji dla pierwszego buttona
  var tempC = getTemp();
    if (!tempC || tempC === null) { // sprawdzenie, czy podano cokolwiek. Jeśli nie lub anulowano to wypisanie komunikatu
      outputFirst.innerHTML = "Nie podano żadnej wartości.";
      outputSecond.innerHTML = "";
    } else if (isNaN(tempC)) { // sprawdzenie, czy to co podano jest tekstem
      outputFirst.innerHTML = "To nie jest liczba.";
      outputSecond.innerHTML = "";
    } else {
      var tempF = celsiusToFahrenheit(tempC);
      showTemp(tempF);
      waterInfo(tempC);
    };
});

fahrenheitToCelsiusButton.addEventListener("click", function() { // wywołanie po kolei funkcji dla drugiego buttona
  var tempF = getTemp();
    if (!tempF || tempF === null) { // sprawdzenie, czy podano cokolwiek. Jeśli nie lub anulowano to wypisanie komunikatu
      outputFirst.innerHTML = "Nie podano żadnej wartości.";
      outputSecond.innerHTML = "";
    } else if (isNaN(tempF)) { // sprawdzenie, czy to co podano jest tekstem
      outputFirst.innerHTML = "To nie jest liczba.";
      outputSecond.innerHTML = "";
    } else {
      var tempC = fahrenheitToCelsius(tempF);
      showTemp(tempC);
      waterInfo(tempC.toFixed(1));
    };  
});

function waterInfo(tempCelsius){ // informacja o stanie wody
  if (tempCelsius < 0){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius+ "℃ woda jest cieczą.";
  } else if (tempCelsius >= 100){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda zamienia się w parę.";
  }
};