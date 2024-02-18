const start = document.querySelector('.start');
const main = document.querySelector('main');
start.addEventListener('click',e=>{
  start.classList.toggle('hidden',true);
  main.classList.toggle('hidden',false);
});