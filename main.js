
var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 60 * circumference;
  circle.style.strokeDashoffset = offset;
}

const input = document.querySelector('input');
setProgress(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 61 && input.value > -1) {
    setProgress(input.value);
  }  
})


