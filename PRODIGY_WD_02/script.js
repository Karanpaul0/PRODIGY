// script.js

// Initialize variables
let startTime = null;
let elapsedTime = 0;
let timerInterval = null;

const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const lapButton = document.getElementById("lap-button");
const lapsContainer = document.getElementById("laps");

// Format time as HH:MM:SS.mmm
function formatTime(ms) {
  const date = new Date(ms);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Update the time display
function updateTime() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
startButton.addEventListener("click", () => {
  if (!startTime) {
    startTime = new Date().getTime() - elapsedTime;
  }
  timerInterval = setInterval(updateTime, 10);
  startButton.disabled = true;
  pauseButton.disabled = false;
  lapButton.disabled = false;
});

// Pause the stopwatch
pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  startButton.disabled = false;
  pauseButton.disabled = true;
});

// Reset the stopwatch
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = null;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00.000";
  lapsContainer.innerHTML = "";
  startButton.disabled = false;
  pauseButton.disabled = true;
  lapButton.disabled = true;
});

// Record a lap
lapButton.addEventListener("click", () => {
  const lapTime = document.createElement("li");
  lapTime.textContent = formatTime(elapsedTime);
  lapsContainer.appendChild(lapTime);
});
