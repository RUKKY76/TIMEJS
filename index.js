

setInterval(function(){

  const date = new Date()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  
  const dayElem = document.querySelector('.number-day div')
  const hoursElem = document.querySelector('.number-hours div')
  const minutesElem = document.querySelector('.number-minutes div')
  const secondsElem = document.querySelector('.number-seconds div')

  dayElem.innerText = day
  hoursElem.innerText = hours
  minutesElem.innerText = minutes
  secondsElem.innerText = seconds

},1000) 

