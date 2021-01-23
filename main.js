const circle = document.querySelector('circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const TIME_LIMIT = 300

const displayTime = document.querySelector("time")
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

 const progressChecker =  setInterval(function () {
    
    const mins = Math.floor(seconds / 60)
    const displayMin = mins < 10 ? `0${mins}` : mins
    const secs = seconds % 60
    const displaySec = secs < 10 ? `0${secs}` : secs
    seconds--
    //console.log(seconds)
   // console.log(temp)
    //const cir = circumference - ((circumference * seconds) / temp)
    //console.log(cir)
    
    if(seconds === 0) {
      clearInterval(progressChecker)
    }
    displayTime.innerText = `${displayMin}:${displaySec}`
    setProgress((temp - seconds))
  }, 1000)
}

timer(TIME_LIMIT)