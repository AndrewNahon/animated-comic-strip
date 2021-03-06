$(function() {
  $blinds = $("[id^=blind]"),
  speed = 250,
  delay = 1500;
  
function startAnimation() {
  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    $blind.delay(delay * i + speed).animate({
      height: 0, 
      top: "+=" + $blind.height()
    }, speed);    
  });
  }
  startAnimation();

  $("a").on("click", function(e) {
    e.preventDefault();
    $blinds.removeAttr("style");
    startAnimation();
  });
});