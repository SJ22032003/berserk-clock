const container = document.getElementById('container');
let day = document.getElementById('day');
let time = document.getElementById('time');

const dayArray=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THRUSDAY','FRIDAY','SATURDAY'];


setInterval(function(){
    const d = new Date();
    day.innerHTML = dayArray[d.getDay()];
    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
},1000)