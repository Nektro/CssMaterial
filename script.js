(function() {
  document.body.innerHTML += "<div id='overlay'></div>";
})();
(function() {
  // slide out navbar
  var a = document.getElementById("side-nav") || document.createElement('div');
  if (a.className === "pull-out") {
    document.getElementsByClassName("sidenavcontrol")[0].addEventListener('click', function(e) {
      var f = function() {
        var b = window.getComputedStyle(a, null).getPropertyValue("left");
        var l = parseInt(b.substring(0,b.length-2));
        a.style.left = (l+30) + "px";
        if (l < 240) {
          requestAnimationFrame(f);
        }
        else {
          a.style.left = "240px";
        }
      };
      document.getElementById('overlay').style.display = "block";
      f();
    });
    document.getElementsByTagName("body")[0].addEventListener('click', function(e) {
      if (window.getComputedStyle(a, null).getPropertyValue("left") === "240px") {
        if (e.pageX > 240) {
          var f = function() {
            var b = window.getComputedStyle(a, null).getPropertyValue("left");
            var l = parseInt(b.substring(0,b.length-2));
            a.style.left = (l-30) + "px";
            if (l > 0) {
              requestAnimationFrame(f);
            }
            else {
              a.style.left = "0px";
            }
          };
          document.getElementById('overlay').style.display = "none";
          f();
        }
      }
    });
  }
})();
