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
const time__control__long = document.querySelector(".time__control__long")


let pomodoro__count = Number(input__control__time.value)
let short__count = Number(time__control__short.value)
let long__count = Number(time__control__long.value)
console.log(pomodoro__count)

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
  if (target__input == null) {
    return
  }
  if (target__input.classList.contains("time__control")) {
    console.log("pomodoro timer control")
    if (target.classList.contains("btn--up")) {
      console.log("increase the pomodoro timer")
      countUp(90, short__count, target__input, 5)     
    }
    else if (target.classList.contains("btn--down")) {
      console.log("decrease the pomodoro timer")
      countDown(5, pomodoro__count, target__input, 90)    
    }
  } else if (target__input.classList.contains("time__control__short")) {
    console.log("short timer break controll")
    if (target.classList.contains("btn--up")) {
      console.log("increase the short break timer")     
      countUp(10, short__count, target__input, 5)
    }
    else if (target.classList.contains("btn--down")) {
      console.log("decrease the short break timer")    
      countDown(5, short__count, target__input, 10)
    }
  } else if (target__input.classList.contains("time__control__long")) {
    console.log("long timer break controll")
    if (target.classList.contains("btn--up")) {
      console.log("increase the long break timer")     
      countUp(20, long__count, target__input, 10)
    }
    else if (target.classList.contains("btn--down")) {
      console.log("decrease the long break timer")    
      countDown(10, long__count, target__input, 20)
    }
  }
   console.log(target__input)
})

const countUp = (maxvalue, counter, targetInput, checkmin) => {

  if(Number(targetInput.value < checkmin)) {
    //alert(`Minimum value should not be below ${checkmin}`)
    targetInput.value = checkmin
  }  

  if(Number(targetInput.value > maxvalue)) {
    //alert(`Maximum value should not exceed ${maxvalue}`)
    targetInput.value = maxvalue
  }
  counter = Number(targetInput.value)
  if (counter < maxvalue) {
    counter = counter + 1
    targetInput.value = counter
    console.log(counter)
    console.log(maxvalue)
    console.log(targetInput.value)   
  }

  
}

const countDown = (minvalue, counter, targetInput, checkmax) => {
  if(Number(targetInput.value < minvalue)) {
    //alert(`Minimum value should not be below ${minvalue}`)
    targetInput.value = minvalue
  }  

  counter = Number(targetInput.value)
  if (counter > minvalue) {
    counter = counter - 1
    targetInput.value = counter
    console.log(counter)
    console.log(minvalue)
    console.log(targetInput.value)   
  }

  if (Number(targetInput.value > checkmax)) {
    //alert(`Maximum value should not exceed ${checkmax}`)
    targetInput.value = checkmax
  }
}