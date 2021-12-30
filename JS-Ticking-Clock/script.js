function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }

  var hour = document.querySelector("#hour");
  var minutes = document.querySelector("#minutes");
  var seconds = document.querySelector("#seconds");
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      hour.style.transform = "rotate(" + (time/120-180) + "deg)";
      minutes.style.transform = "rotate(" + (time/10-180) + "deg)";
      seconds.style.transform = "rotate(" + (time*6-180) + "deg)";
  }, 1000);