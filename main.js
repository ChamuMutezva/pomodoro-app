// ring timer
const circle = document.querySelector('circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const TIME_LIMIT = 1500

const displayTime = document.querySelector("time")

const change__settings = document.querySelector(".menu__options--btn")
const close__menu = document.querySelector(".close__menu")
const modal = document.querySelector(".modal__settings")
// timer controller setter
const timer__controller = document.querySelector(".time__settings")
console.log(timer__controller)
//pomodoro time controllers
const count__up = document.querySelector(".btn--up")
const count__down = document.querySelector(".btn--down")
const input__control__time = document.querySelector(".time__control")

//short break contollers
const count__up__short = document.querySelector(".btn--up")
const count__down__short = document.querySelector(".btn--down")
const time__control__short = document.querySelector(".time__control__short")



let count = Number(input__control__time.value)
console.log(count)

console.log(change__settings)
console.log(circumference)

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / TIME_LIMIT * circumference;
  circle.style.strokeDashoffset = offset;
  //console.log(offset)
}

//const input = document.querySelector('input');
//setProgress(input.value);

//input.addEventListener('change', function (e) {
//  if (input.value < 61 && input.value > -1) {
// setProgress(input.value);
// }
//})

function timer(seconds) {
  const temp = seconds

  const progressChecker = setInterval(function () {

    const mins = Math.floor(seconds / 60)
    const displayMin = mins < 10 ? `0${mins}` : mins
    const secs = seconds % 60
    const displaySec = secs < 10 ? `0${secs}` : secs
    seconds--
    displayTime.innerText = `${displayMin}:${displaySec}`
    //console.log(seconds)
    // console.log(temp)
    //const cir = circumference - ((circumference * seconds) / temp)
    //console.log(cir)

    if (seconds === 0) {
      displayTime.innerHTML = "00:00"
      clearInterval(progressChecker)
    }

    setProgress((temp - seconds))
  }, 1000)
}

timer(TIME_LIMIT)

/* modal setting */
change__settings.addEventListener("click", () => {
  modal.classList.toggle("modal__settings__hide")
})
close__menu.addEventListener("click", () => {
  modal.classList.toggle("modal__settings__hide")
})

/*
count__up.addEventListener("click", ()=> {
  if (count < 30) {
    count += 1
  } 
  input__control__time.value = count.toString()
  console.log(count)
})
count__down.addEventListener("click", ()=> {
  if (count > 1) {
    count -= 1
  } 
  input__control__time.value = count.toString()
  console.log(count)
})*/
timer__controller.addEventListener("click", (evt) => {
  const target = evt.target
  //get parent div of target
  const parent__div = target.closest("div")
  // get parent div of input element
  const parent__input = parent__div.previousElementSibling
  // get input element
  const target__input = parent__input.firstElementChild
  if (target.classList.contains("btn--up")) {
    console.log("increase timer")
    console.log(timer__controller.firstElementChild)
  } else if(target.classList.contains("btn--down")) {
    console.log("decrease the count down timer")
    console.log(timer__controller.firstElementChild)
  }
 console.log(target__input)
})