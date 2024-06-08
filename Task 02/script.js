javascript;
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let stopped = false;
const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
    recordLap();
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  stopped = false;
  difference = 0;
  display.innerHTML = "00:00:00";
  lapsContainer.innerHTML = "";
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function recordLap() {
  const lapTime = display.innerHTML;
  const lapElement = document.createElement("div");
  lapElement.className = "lap";
  lapElement.textContent = lapTime;
  lapsContainer.appendChild(lapElement);
}
