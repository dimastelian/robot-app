
App.Main = function() {
    
    var app = this;
    
    app.initialized = false;
    app.callback_init = function(){};
    app.callback_main = function(){};

    app.init = function(callback) {
        app.callback_init = callback;
        app.initialized = true;
    };
    
    app.main = function(callback) {
        app.callback_main = callback;
    };

    app.initWindow = function(windowClass)
    {
        alert('foo');
    }

    jQuery(function($){
        app.callback_init();
        
        $(baseWindow).ready(function(){
            app.callback_main();
        })
    });

    return this;

};