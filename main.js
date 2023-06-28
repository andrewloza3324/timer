let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let button = document.querySelector(".button");
let history = document.querySelector(".history-list");

function updateTimer() {
  let newDate = new Date();
  hours.textContent = newDate.getHours();
  minutes.textContent = newDate.getMinutes();
  seconds.textContent = newDate.getSeconds();
}

setInterval(updateTimer, 1000);

function inHistory() {
  let newel = document.createElement("li");
  let inlist = document.createElement("div");
  let hours = document.createElement("span");
  let minutes = document.createElement("span");
  let seconds = document.createElement("span");
  let newDate = new Date();
  hours.textContent = newDate.getHours();
  minutes.textContent = newDate.getMinutes();
  seconds.textContent = newDate.getSeconds();
  inlist.classList.add("in-list");
  history.append(newel);
  newel.append(inlist);
  inlist.append(hours);
  inlist.append(minutes);
  inlist.append(seconds);
}

button.addEventListener("click", inHistory);
