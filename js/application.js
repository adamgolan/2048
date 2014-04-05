// Wait till the browser is ready to render the game (avoids glitches)
(function() {
    var gameManager;
    window.requestAnimationFrame(function () {
        gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    });
    window.onhashchange = function(event) { 
        var old = event.oldURL, nnew = event.newURL, reg = /\"count\":(\d+)/;
        if(old && nnew) {
            var ocount = old.match(reg); 
            var ncount = nnew.match(reg);
            if(ocount && ncount && +ocount[1] > +ncount[1]) {
                gameManager.setup();
            }
        }	
    };
})();