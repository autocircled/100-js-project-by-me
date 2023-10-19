const dateFrom = document.querySelector("#date-from");
const dateTo = document.querySelector("#date-to");
const btn = document.querySelector(".btn");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener("click", calculateAge);

function calculateAge(e) {
  e.preventDefault();

  const dateToInput = new Date(dateTo.value);
  const dateFromInput = new Date(dateFrom.value);

  let birthMonth, birthDay, birthYear;
  let birthDetails = {
    date: dateFromInput.getDate(),
    month: dateFromInput.getMonth() + 1,
    year: dateFromInput.getFullYear(),
  };

  let currentYear = dateToInput.getFullYear();
  let currentMonth = dateToInput.getMonth() + 1;
  let currentDate = dateToInput.getDate();

  if (dateFromInput > dateToInput) {
    alert("Invalid Date");
    return;
  }

  // Year
  birthYear = currentYear - birthDetails.year;

  // Month
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  // Day
  if (currentDate >= birthDetails.date) {
    birthDay = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDay = days + currentDate - birthDetails.date;

    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  // show result
  displayResult(birthDay, birthMonth, birthYear);

  function displayResult(bDate, bMonth, bYear) {
    document.querySelector(".age-year").textContent = bYear + " Years";
    document.querySelector(".age-month").textContent = bMonth + " Months";
    document.querySelector(".age-day").textContent = bDate + " Days";
  }
}

