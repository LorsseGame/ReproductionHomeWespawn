let days = 15;
let hour = 5;
let minute = 34;
let second = 10;

async function decompte() {
  second--;
  if (second === 0) {
    second = 59;
    minute--;
  }
  if (minute === 0) {
    minute = 59;
    hour--;
  }
  if(hour === 0){
    hour = 23;
    days--;
  }
  if(days === 0){
    clearTimeout(intervalID);
  }
}

// Exécute decompteOuverture toutes les 1 second
const intervalID = setInterval(decompte, 1000);
async function refreshCount(){
    document.getElementById('days').textContent = days;
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
}
setInterval(refreshCount,1)
