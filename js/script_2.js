'use strict';

// First Button
var outputFirst = document.getElementById("outputFirst"); // pole do wyświetlania komunikatów
var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit");

function getTempCelsius() { // podanie temperatury
  var temp = window.prompt("Podaj temperaturę w stopniach Celsiusza:");
  return temp;
}

function checkTempCelsius(tempCelsius) { // sprawdzenie podanej wartości
  if (tempCelsius.trim() !== null) { // sprawdzenie czy nie pusta wartość
    if (parseFloat(tempCelsius) === "number" || !isNaN(tempCelsius)) { // sprawdzenie czy liczba
      var temp = tempCelsius * 1.8 + 32; // przeliczenie na stopnie Far
      outputFirst.innerHTML = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + temp.toFixed(1) + "℉.";
    } else {
      outputFirst.innerHTML = "Podana wartość jest nieprawidłowa";
    }
  }
}

function waterInfo1(tempCelsius){ // informacja o stanie wody
  if (tempCelsius < 0){
    outputFirst.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    outputFirst.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest cieczą.";
  } else if (tempCelsius >= 100){
    outputFirst.innerHTML = "Przy temperaturze " +tempCelsius + "℃ woda zamienia się w parę.";
  }
}

celsiusToFahrenheitButton.addEventListener("click", function() { // wywołanie funkcji po kolei
  var temp = getTempCelsius();
  checkTempCelsius(temp);
  waterInfo1(temp);
});

// Second Button
var outputSecond = document.getElementById("outputSecond");
var fahrenheitToCelsiusButton = document.getElementById("fahrenheitToCelsius");

function getTempFahrenheit() { // podanie temperatury
  var temp = window.prompt("Podaj temperaturę w stopniach Fahrenheit'a:");
  return temp;
}

function checkTempFahrenheit(tempFahrenheit){ // sprawdzenie podanej wartości
  if (tempFahrenheit.trim() !== null) { // sprawdzenie czy nie pusta wartość
    if (parseFloat(tempFahrenheit) === "number" || !isNaN(tempFahrenheit)) { // sprawdznie czy warość liczbowa
      var temp = (tempFahrenheit - 32) / 1.8; // przeliczenie na stopnie Cel
      outputSecond.innerHTML = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + temp.toFixed(1) +"℃.";
    } else {
      outputSecond.innerHTML = "Podana wartość jest nieprawidłowa";
    }
  }
}

function waterInfo2(tempFahrenheit){
  if (temp < 0){
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest zamarznięta.";
  } else if (temp >= 0 && temp < 100) {
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda jest cieczą.";
  } else if (temp >= 100) {
    outputSecond.innerHTML = "Przy temperaturze " + tempCelsius + "℃ woda zamienia się w parę.";
  }
}

fahrenheitToCelsiusButton.addEventListener("click", function() {
  var temp = getTempFahrenheit();
  checkTempFahrenheit(temp);
  waterInfo2(temp);
});












/*var celsiusToFahrenheitButton = document.getElementById("celsiusToFahrenheit");
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

if (!name){
    alert ("Nie podano imienia");
} else {
    output.innerHTML = "Witaj na stronie " + name + ". Poniżej znajdziesz przelicznik temperatury." + "<br>" + "Działa on w skali Fahrenheit'a i Celsiusza." + "<br>" + "Są to dwie używane obecnie skale tepmeratur."; // wypisanie komunikatu powitalnego po podaniu imienia
}

// Celsius to Fahrenheit
function celsiusToFahrenheit (){
    tempCelsius = window.prompt("Podaj temperaturę w stopniach Celsiusza"); // Prompt o podanie temperatury
    if (tempCelsius !== null){ //Sprawdzenie czy podana wartość istnieje
      if (tempCelsius !== "" || !isNaN) { // Sprawdzenie czy wartość jest liczbą
        tempFahrenheit = tempCelsius * 1.8 + 32;
        outputFahrenheit.innerText = "Podana temperatura to " + tempCelsius + "℃. Jej odpowiednik to " + tempFahrenheit.toFixed(1) + "℉.";
        waterStatusInfo();
        console.log(fahrenheitInfo);
        fahrenheitInfo.innerText = "Przy temperaturze " + tempCelsius + "℃, " + msg;
      }
    } else alert ("Musisz podać temperaturę!");
};
celsiusToFahrenheitButton.addEventListener("click", celsiusToFahrenheit);

// Fahrenheit to Celsius
function fahrenheitToCelsius (){
    tempFahrenheit = window.prompt("Podaj temperaturę w stopniach Fahrenheita"); // Prompt o podanie temperatury
    if (tempFahrenheit !== null){ //Sprawdzenie czy podana wartość istnieje
      if (tempFahrenheit !== "" || !isNaN) { // Sprawdzenie czy wartość jest liczbą
        tempCelsius = (tempFahrenheit - 32) / 1.8 ;
        outputCelsius.innerText = "Podana temperatura to " + tempFahrenheit + "℉. Jej odpowiednik to " + tempCelsius.toFixed(1) + "℃";
        waterStatusInfo();
        celsiusInfo.innerText = "Przy temperaturze " + tempCelsius.toFixed(1) + "℃, " + msg;
      }
    } else alert ("Nie podano temperatury");
};
fahrenheitToCelsiusButton.addEventListener("click", fahrenheitToCelsius);

function waterStatusInfo(){
    if (tempCelsius < 0){
      msg = "woda jest zamarznięta.";
    } else if (tempCelsius >= 0 && tempCelsius < 100){
      msg = "woda jest cieczą.";
    } else if (tempCelsius >= 100){
      msg = "woda zamienia się w parę.";
    }
}

function newLine(){
    var line;
    line.innerText = '<br>'
    console.log (line);
}*/


/*
console.log('przed ifem: ' + tempCelsius);
function status(tempCelsius){
  if (tempCelsius < 0){
    msg = "woda jest zamarznięta.";
  } else if (tempCelsius >= 0 && tempCelsius < 100){
    msg = "woda jest cieczą.";
  } else if (tempCelsius >= 100);{
    msg = "woda zamienia się w parę.";
  }
};
status(tempCelsius);*/
/*
function doAllFunctions (){
    CelsiusToFahrenheit();
    FahrenheitToCelsius();
    status();
}*/