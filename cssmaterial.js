function reloadCssM() {
    // slide out navbar
    var a = document.getElementById("side-nav") || document.createElement('div');
    // if class is pull-out, add animation
    if (a.className === "pull-out") {
        document.getElementsByClassName("sidenavcontrol")[0].addEventListener('click', function(e) {
            a.setAttribute('aria-expanded', !(a.getAttribute('aria-expanded')===('true')));
        });
        document.body.addEventListener('click', function(e) {
            if (e.target.path.indexOf(document.getElementsByClassName("sidenavcontrol")[0]) === -1) {
                if (e.target.path.indexOf(a) === -1) {
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
        $cssm.menu(v);
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
}

(function() {
    // add a js script to the dom and add a callback
    window.addScript = function(url,on) {
        var script = document.createElement('script');
        script.setAttribute('src',url);
        script.addEventListener('load', function(e) { on(); });
        document.head.appendChild(script);
    }
    // add each to array
    HTMLCollection.prototype.each = function(f) {
        for (var i = 0; i < this.length; i++) {
            f(i, this[i]);
        }
    }
    // get element path
    Object.defineProperty(Element.prototype, 'path', {
        get: function() {
            var resp = [this];
            return (this.parentElement) ? (resp.concat(this.parentElement.path)) : (resp);
        }
    });
    // setup cssm init Object
    window.$cssm = {
        menu: function(n) {
            document.body.addEventListener('click', function(e) {
                if (e.target.path.indexOf(n) === -1) {
                    if (n.getAttribute('aria-expanded') === 'true') {
                        n.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            n.addEventListener("click", function(e) {
                if (e.target.path.indexOf(n) > -1) {
                    var open = n.getAttribute('aria-expanded') === "true";
                    n.setAttribute('aria-expanded', open ? "false" : "true");
                }
            });
        }
    };

    // button waves effect
    addScript('https://rawgit.com/fians/Waves/master/src/js/waves.js', function() {
        Waves.attach('.btn');
        Waves.attach('.menu a');
        Waves.attach('.sidenavcontrol > span');
        Waves.init();
    });
    // add overlay div
    document.body.innerHTML += "<div id='overlay'></div>";
    reloadCssM();
})();
