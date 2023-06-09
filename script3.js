// Stopwatch HTML elements
const stopwatchStartButton = document.getElementById('start');
const stopwatchStopButton = document.getElementById('stop');
const stopwatchResetButton = document.getElementById('reset');
const stopwatchHrDisplay = document.getElementById('hr');
const stopwatchMinDisplay = document.getElementById('min');
const stopwatchSecDisplay = document.getElementById('sec');

// Stopwatch variables
let stopwatchStartTime;
let stopwatchElapsedTime = 0;
let stopwatchTimerInterval;

// Update the stopwatch display
function updateStopwatchDisplay() {
  const stopwatchCurrentTime = Date.now();
  const stopwatchElapsedSeconds = Math.floor((stopwatchCurrentTime - stopwatchStartTime) / 1000);
  const stopwatchHours = Math.floor(stopwatchElapsedSeconds / 3600);
  const stopwatchMinutes = Math.floor((stopwatchElapsedSeconds % 3600) / 60);
  const stopwatchSeconds = stopwatchElapsedSeconds % 60;

  stopwatchHrDisplay.textContent = stopwatchHours.toString().padStart(2, '0');
  stopwatchMinDisplay.textContent = stopwatchMinutes.toString().padStart(2, '0');
  stopwatchSecDisplay.textContent = stopwatchSeconds.toString().padStart(2, '0');
}

// Start the stopwatch
function startStopwatch() {
  stopwatchStartTime = Date.now() - (stopwatchElapsedTime * 1000);
  stopwatchTimerInterval = setInterval(updateStopwatchDisplay, 10);
  stopwatchStartButton.disabled = true;
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(stopwatchTimerInterval);
  stopwatchElapsedTime = Math.floor((Date.now() - stopwatchStartTime) / 1000);
  stopwatchStartButton.disabled = false;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(stopwatchTimerInterval);
  stopwatchElapsedTime = 0;
  stopwatchHrDisplay.textContent = '00';
  stopwatchMinDisplay.textContent = '00';
  stopwatchSecDisplay.textContent = '00';
  stopwatchStartButton.disabled = false;
}

// Timer HTML elements
const timerStartButton = document.getElementById('START');
const timerStopButton = document.getElementById('STOP');
const timerResetButton = document.getElementById('RESET');
const timerHrDisplay = document.getElementById('HR');
const timerMinDisplay = document.getElementById('MIN');
const timerSecDisplay = document.getElementById('SEC');
const timerInput = document.getElementById('timer-input');
const timerSubmitButton = document.getElementById('timer-submit');

// Timer variables
let timerInterval;
let totalSeconds = 0;
let timerDuration = 0;

// Update the timer display
function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerHrDisplay.textContent = hours.toString().padStart(2, '0');
  timerMinDisplay.textContent = minutes.toString().padStart(2, '0');
  timerSecDisplay.textContent = seconds.toString().padStart(2, '0');

  totalSeconds--;

  if (totalSeconds < 0) {
    stopTimer();
    // Add code here to handle timer completion
  }
}

// Start the timer
function startTimer() {
  if (timerDuration > 0) {
    totalSeconds = timerDuration;
    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
    timerStartButton.disabled = true;
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  timerStartButton.disabled = false;
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = 0;
  timerHrDisplay.textContent = '00';
  timerMinDisplay.textContent = '00';
  timerSecDisplay.textContent = '00';
  timerStartButton.disabled = false;
}

// Set the timer duration based on user input
function setTimerDuration() {
  const inputTime = parseInt(timerInput.value);
  if (!isNaN(inputTime) && inputTime > 0) {
    timerDuration = inputTime;
    totalSeconds = timerDuration;
    updateTimerDisplay();
    timerInput.value = '';
  }
}

// Event listeners for timer
timerStartButton.addEventListener('click', startTimer);
timerStopButton.addEventListener('click', stopTimer);
timerResetButton.addEventListener('click', resetTimer);
timerSubmitButton.addEventListener('click', setTimerDuration);


// Event listeners for stopwatch
stopwatchStartButton.addEventListener('click', startStopwatch);
stopwatchStopButton.addEventListener('click', stopStopwatch);
stopwatchResetButton.addEventListener('click', resetStopwatch);
