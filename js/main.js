$(function() {
    $loggedIn = $("#logged-in-wrapper");
    $loggingIn = $("#logging-in-wrapper");
    $loggedOut = $("#logged-out-wrapper");
    $loginbtn = $(".login-btn");
    $logoutbtn = $(".logout-btn");
    $nextbtn = $(".next-login");
    $validationInput = $(".validate");
    $validationButton = $("#add_auction");
    $errorDiv = $("#error");
    $errorList = $("#error ul");
    $sortDropdown = $(".sort-dropdown");
    $filter = $(".filters");
    $sortArrow = $("#sort-arrow");

    $loggedIn.hide();
    $loggingIn.hide();
    $filter.hide();
    var boollogin = localStorage.length;
    

    $loginbtn.on('click', function(){
        $loggingIn.show();
        $loggedOut.hide();
    });
    $nextbtn.on('click', function(){
        $loggingIn.hide();
        $loggedIn.show();
        localStorage.setItem('isloggedin' ,true);
    });
    $logoutbtn.on('click', function(){
        $loggedIn.hide();
        $loggedOut.show();
        localStorage.removeItem('isloggedin');
    });
    if(boollogin){
        $loggingIn.hide();
        $loggedOut.hide();
        $loggedIn.show();
    } 
    if(!boollogin) {
        $loggedIn.hide();
        $loggingIn.hide();
        $loggedOut.show();

    }

});



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