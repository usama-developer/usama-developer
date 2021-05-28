var min = 0
var sec = 0
var msec = 0
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliseconds = document.getElementById('msec')
var interval;


function start() {
    interval = setInterval(function () {
        msec++
        miliseconds.innerHTML = msec
        if (msec >= 100) {
            sec++
            seconds.innerHTML = sec
            msec = 000

        }
        else if (sec >= 60) {
            min++
            minutes.innerHTML = min
            sec = 000
        }
    }, 10)
    var b = document.getElementById('str').disabled = true
}


function pause() {
    clearInterval(interval)
}

function reset() {
    min = 0;
    sec = 0
    msec = 0
    minutes.innerHTML = min
    seconds.innerHTML = sec
    miliseconds.innerHTML = msec
}