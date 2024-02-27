const hoursElement = document.getElementById('horas')
const minutesElement = document.getElementById('minutos')
const secondsElement = document.getElementById('segundos')
function newTime() {
    const date = new Date();


    const horas = date.getHours()
    const minutos = date.getMinutes()
    const segundos = date.getSeconds()

    hoursElement.textContent = fixTime(horas)
    minutesElement.textContent = fixTime(minutos)
    secondsElement.textContent = fixTime(segundos)
}

function fixTime(time) {
    return time < 10 ? '0' + time : time
}

newTime()
setInterval(newTime, 1000)



