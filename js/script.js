'use strict';

var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit");
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius");

var tempCelsius; // wartość temperatury, która ma być podana w prompcie
var tempFahrenheit; // jak wyżej
var name = window.prompt("Witaj ! Jak masz na imię ?"); // komunikat z pytaniem o imię
var msg;

var outputCelsius = document.getElementById("outputCelsius"); // wyświetlenie podanej i przeliczonej temperatury
var outputFahrenheit = document.getElementById("outputFahrenheit"); // jak wyżej

var celsiusInfo = document.getElementById("celsiusInfo"); // info o stanie wody
var fahrenheitInfo = document.getElementById("fahrenheitInfo"); // jak wyżej

var output = document.getElementById("welcome-message"); // komunikat powitalny

if (!name || name === 'null'){
  alert ("Nie podano imienia");
} else {
  output.innerHTML = "Witaj na stronie " + name + ". Poniżej znajdziesz przelicznik temperatury." + "<br>" + "Działa on w skali Fahrenheit'a i Celsiusza." + "<br>" + "Są to dwie używane obecnie skale tepmeratur."; // wypisanie komunikatu powitalnego po podaniu imienia
}

// Celsius to Fahrenheit
function celsiusToFahrenheit (){
  tempCelsius = window.prompt("Podaj temperaturę w stopniach Celsiusza"); // Prompt o podanie temperatury
  if (tempCelsius.trim() !== null){ //Sprawdzenie czy podana wartość istnieje
    if (parseFloat(tempCelsius) === "number" || !isNaN(tempCelsius)) { // Sprawdzenie czy wartość jest liczbą
      tempFahrenheit = tempCelsius * 1.8 + 32;
      outputFahrenheit.innerText = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + tempFahrenheit.toFixed(1) + "℉.";
      if(tempCelsius < 0){
        msg = "woda jest zamarznięta.";
      } else if (tempCelsius >= 0 && tempCelsius < 100){
        msg = "woda jest cieczą.";
      } else if (tempCelsius >= 100){
        msg = "woda zamienia się w parę.";
      }
      fahrenheitInfo.innerText = "Przy temperaturze " + tempCelsius + "℃, " + msg;
    } else alert ("Musisz podać temperaturę!");
  }
}
celsiusToFahrenheitButton.addEventListener("click", celsiusToFahrenheit);

// Fahrenheit to Celsius
function fahrenheitToCelsius (){
  tempFahrenheit = window.prompt("Podaj temperaturę w stopniach Fahrenheita"); // Prompt o podanie temperatury
  if (tempFahrenheit.trim() !== null){ //Sprawdzenie czy podana wartość istnieje
    if (parseFloat(tempFahrenheit) === "number" || !isNaN(tempFahrenheit)) { // Sprawdzenie czy wartość jest liczbą
      tempCelsius = (tempFahrenheit - 32) / 1.8 ;
      outputCelsius.innerText = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + tempCelsius.toFixed(1) + "℃";
      if (tempCelsius < 0){
        msg = "woda jest zamarznięta.";
      } else if (tempCelsius >= 0 && tempCelsius < 100){
        msg = "woda jest cieczą.";
      } else if (tempCelsius >= 100){
        msg = "woda zamienia się w parę.";
      }
      celsiusInfo.innerText = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃, " + msg;
    } else alert ("Nie podano temperatury");
  }
}
fahrenheitToCelsiusButton.addEventListener("click", fahrenheitToCelsius);