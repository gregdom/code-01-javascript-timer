let controls = document.querySelector('.controls')
let hoursElement = document.querySelector('.hours span')
let minutesElement = document.querySelector('.minutes span')
let secondsElement = document.querySelector('.seconds span')
let hoursNum = 0
let minutesNum = 0
let secondsNum = 0
let interval = null

const secondsTimer = () => {
  ++secondsNum
  if (secondsNum <= 9) {
    secondsElement.innerHTML = 0 + secondsNum.toString()
  } else if (secondsNum >= 10 && secondsNum < 60) {
    secondsElement.innerHTML = secondsNum.toString()
  } else {
    minutesTimer()
    secondsElement.innerHTML = '00'
    secondsNum = 0
  }
}

const minutesTimer = () => {
  ++minutesNum
  if (minutesNum <= 9) {
    minutesElement.innerHTML = 0 + minutesNum.toString()
  } else if (minutesNum >= 10 && minutesNum < 60) {
    minutesElement.innerHTML = minutesNum.toString()
  } else {
    hoursTimer()
    minutesElement.innerHTML = '00'
    minutesNum = 0
  }
}

const hoursTimer = () => {
  ++hoursNum
  if (hoursNum <= 9) {
    hoursElement.innerHTML = 0 + hoursNum.toString()
  } else {
    hoursElement.innerHTML = hoursNum.toString()
  }
}

controls.addEventListener('click', (event) => {
  const btn = event.target.innerHTML
  switch (btn) {
    case 'Play':
      interval = setInterval(secondsTimer, 1000)
      event.target.innerHTML = 'Pause'
      break;

    case 'Pause':
      clearInterval(interval)
      event.target.innerHTML = 'Play'
      break;

    default:
      hoursElement.innerHTML = '00'
      minutesElement.innerHTML = '00'
      secondsElement.innerHTML = '00'
      hoursNum = 0
      minutesNum = 0
      secondsNum = 0
      break;
  }
})