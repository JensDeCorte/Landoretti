

var countDownDate = new Date("Jan 16, 2018 15:06:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";
  if (distance < 0) {
    clearInterval(x);
    d =document.getElementById("auction1");
    d.className += " hideAuction";
  }
}, 1000);