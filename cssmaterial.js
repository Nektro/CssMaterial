(function() {
    function addScript(url,on) {
        var script = document.createElement('script');
        script.setAttribute('src',url);
        script.addEventListener('load', function(e) { on(); });
        document.head.appendChild(script);
    }
    // button waves effect
    addScript('https://rawgit.com/fians/Waves/master/src/js/waves.js', function() {
        Waves.attach('.btn');
        Waves.attach('.menu a');
        Waves.attach('.sidenavcontrol > span');
        Waves.init();
    });
    // add each to array
    HTMLCollection.prototype.each = function(f) {
        for (var i = 0; i < this.length; i++) {
            f(i, this[i]);
        }
    }
    // add overlay div
    document.body.innerHTML += "<div id='overlay'></div>";
    // slide out navbar
    var a = document.getElementById("side-nav") || document.createElement('div');
    // if class is pull-out, add animation
    if (a.className === "pull-out") {
        document.getElementsByClassName("sidenavcontrol")[0].addEventListener('click', function(e) {
            a.setAttribute('aria-expanded', !(a.getAttribute('aria-expanded')===('true')));
        });
        document.getElementsByTagName("body")[0].addEventListener('click', function(e) {
            if (e.path.indexOf(document.getElementsByClassName("sidenavcontrol")[0]) === -1) {
                if (e.path.indexOf(a) === -1) {
                    if (a.getAttribute('aria-expanded') === 'true') {
                        a.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    }
    // if a is null, set size to 0
    if (a.children.length === 0) {
        document.body.parentElement.style.setProperty('--cm-sidenav-width', '0px');
    }
    // dropdown menu (material toolbar)
    document.getElementsByClassName("menu").each(function(i, v) {
        v.addEventListener("click", function(e) {
            var el = e.target.parentElement;
            var open = el.getAttribute('aria-expanded') === "true";
            el.setAttribute('aria-expanded', open ? "false" : "true");
        });
    });
    // autosize textarea
    // inspired by http://codepen.io/vsync/pen/czgrf (MIT)
    try {
        document.querySelector('textarea').addEventListener('keydown', function(e) {
            var el = this;
            setTimeout(function(){
                el.style.cssText = 'height:auto; padding:0';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }, 0);
        });
    }
    catch (x) {}
})();
