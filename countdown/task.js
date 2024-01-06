const p = document.getElementById('timer')
pTime = Number(p.textContent)  
function tick() {
  if (--pTime === 0) {
    p.textContent = pTime
    clearInterval(t) 
    alert('Вы победили в конкурсе! Поздравляем!')
}
  else{
   p.textContent = pTime}
}

let t = setInterval(tick, 1000)
tick()