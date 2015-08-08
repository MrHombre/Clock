$(document).ready(function(){
  setInterval(time);
  function time() {
    var date = new Date();
    if (date.getHours() < 10) {
      $('.num1').text("0");
      $('.num2').text(date.getHours());
    } else {
      $('.num1').text(date.getHours().toString()[0]);
      $('.num2').text(date.getHours().toString()[1]);
    }
    if (date.getMinutes() < 10) {
      $('.num3').text("0");
      $('.num4').text(date.getMinutes());
    } else {
      $('.num3').text(date.getMinutes().toString()[0]);
      $('.num4').text(date.getMinutes().toString()[1]);
    }
  }
});