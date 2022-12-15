var start = document.getElementById('start')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')
var appendMinutes = document.getElementById('minutes')
var appendSeconds = document.getElementById('seconds')

minutes = 00;
seconds = 00;
let interval;
start.addEventListener('click', ()=>{
   clearInterval(interval)
    interval = setInterval(setFunction , 10)
})
function setFunction(){
  seconds++ 
  appendSeconds.innerHTML = seconds
  if(seconds < 9){
    appendSeconds.innerHTML = '0' + seconds
  }
  if(seconds > 9){
    appendSeconds.innerHTML = seconds
  }
  if(seconds > 99){
    minutes++
    appendMinutes.innerHTML = '0' + minutes
    seconds = 0
    appendSeconds.innerHTML = '0' + 0
  }
}
stop.addEventListener('click', ()=>{
  clearInterval(interval)
})
reset.addEventListener('click', ()=>{
  clearInterval(interval)
  appendMinutes.innerHTML = 00
  appendSeconds.innerHTML = 00
})