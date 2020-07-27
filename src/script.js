// ⏰Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00

function formatDate(d) {
  let daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = daysOfWeek[d.getDay()];
  let date = d.getDate();
  let month = monthsOfYear[d.getMonth()];
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = "am";

  // Since the time will be in 12 hour format, determine if it is PM
  if (hours >= 12) {
    ampm = "pm";
  }

  // Convert clock from 24 hour time to 12 hour time
  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let output = `${day}, ${month} ${date} ${hours}:${minutes} ${ampm}`;
  return output;
}

let dateResult = document.querySelector("#date-result");
dateResult.innerHTML = formatDate(new Date());

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function citySearch(event) {
  event.preventDefault();
  let input = document.querySelector("#user-input");
  let cityHeader = document.querySelector("#city-result");
  if (input.value) {
    input.value = input.value.trim();
    cityHeader.innerHTML = `${input.value}`;
  }
}

let citySearchForm = document.querySelector("#city-search");
citySearchForm.addEventListener("submit", citySearch);

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function convertTemptoF(event) {
  event.preventDefault();
  // check if the current unit is Farenheit, then loop through all the results; if unit is already Celcius, do nothing
  if (currentUnit === "C") {
    // change the current unit
    currentUnit = "F";
    // update class on buttons to change appearance: remove active styling
    let currentActiveButton = document.querySelector(".celciusButton");
    currentActiveButton.classList.remove("tempButtonActive");
    // update class on buttons to change appearance: add active styling
    let newActiveButton = document.querySelector(".farenheitButton");
    newActiveButton.classList.add("tempButtonActive");
    // Get all the elements containing a temp to convert
    let selectTempFields = document.querySelectorAll(".tempInCurrentUnit");
    // apply formula that converts
    for (let i = 0; i < selectTempFields.length; i++) {
      // Formula: (C * 9 / 5) + 32 = F
      selectTempFields[i].innerHTML = Math.round(
        (parseInt(selectTempFields[i].innerHTML) * 9) / 5 + 32
      );
    }
    // Get the element containing the unit displayed
    let changeUnit = document.querySelectorAll(".unitSelect");
    for (let i = 0; i < changeUnit.length; i++) {
      changeUnit[i].innerHTML = "F";
    }
  } else {
    // Do nothing, the unit is already in Farenheit so there is nothing to convert
    return;
  }
}

function convertTemptoC(event) {
  event.preventDefault();
  // check if the current unit is Farenheit, then loop through all the results; if unit is already Celcius, do nothing
  if (currentUnit === "F") {
    // change the current unit
    currentUnit = "C";
    // update class on buttons to change appearance: remove active styling
    let currentActiveButton = document.querySelector(".farenheitButton");
    currentActiveButton.classList.remove("tempButtonActive");
    // update class on buttons to change appearance: add active styling
    let newActiveButton = document.querySelector(".celciusButton");
    newActiveButton.classList.add("tempButtonActive");
    // Get all the elements containing a temp to convert
    let selectTempFields = document.querySelectorAll(".tempInCurrentUnit");
    // apply formula that converts
    for (let i = 0; i < selectTempFields.length; i++) {
      // Formula: (F − 32) × 5 / 9 = C
      selectTempFields[i].innerHTML = Math.round(
        ((parseInt(selectTempFields[i].innerHTML) - 32) * 5) / 9
      );
    }
    // Get the element containing the unit displayed
    let changeUnit = document.querySelectorAll(".unitSelect");
    for (let i = 0; i < changeUnit.length; i++) {
      changeUnit[i].innerHTML = "C";
    }
  } else {
    // Do nothing, the unit is already in Celcius so there is nothing to convert
    return;
  }
}

let currentUnit = "F";
let buttonClickF = document.querySelector(".farenheitButton");
let buttonClickC = document.querySelector(".celciusButton");

buttonClickF.addEventListener("click", convertTemptoF);
buttonClickC.addEventListener("click", convertTemptoC);
