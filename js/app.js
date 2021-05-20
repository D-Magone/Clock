function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    
   if(h < 10) {
       h = "0" + h;
   } else {
       h = h;
   }

   if(m < 10) {
       m = "0" + m;
   } else {
       m = m;
   }

   if(s < 10) {
       s = "0" + s;
   } else {
       s = s;
   }



   let currentTime = h + ":" + m + ":" + s;

   document.getElementById("clock").innerText = currentTime;
   document.getElementById("clock").textContent = currentTime;

   document.getElementById("day").innerText = weekday;
   document.getElementById("day").textContent = weekday;

   setTimeout(showTime, 1000);
    
}

showTime();