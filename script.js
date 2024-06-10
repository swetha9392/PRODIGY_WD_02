let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    running = false;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('display').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}