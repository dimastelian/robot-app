var nw = require('nw.gui'),
    jQuery = require('jquery'),
    backbone = require('backbone'),
    underscore = require('underscore'),    
    baseWindow = window,
    nwWindow = nw.Window.get();
    
var App = {
    config: {
        http_port: 8080,
    },
    status: {
        client_app: {
            running: false,
        }
    }
};
