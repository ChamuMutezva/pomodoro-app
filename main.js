const circle = document.querySelector('circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const TIME_LIMIT = 1500

const displayTime = document.querySelector("time")

const change__settings = document.querySelector(".menu__options--btn")
const modal = document.querySelector(".modal__settings")
console.log(change__settings)
console.log(circumference)

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / TIME_LIMIT * circumference;
  circle.style.strokeDashoffset = offset;
  console.log(offset)
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