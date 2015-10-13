var Utils = {

    basedir: process.env.PWD,

};

Utils.dirs = {
    client_views: Utils.basedir + '/client_src/views'
};
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

App.HTTPServer = function () {

    var express = require('express');
    var httpApp = express();

    httpApp.set('view engine', 'jade');
    httpApp.set('views', Utils.dirs.client_views);

//    httpApp.use(express.static('client'));
    httpApp.use('/assets', express.static('assets'));

    httpApp.get('/', function (req, res) {
        res.render('index', {title: 'Home', app: App});
    });

    this.init = function () {

        var server = httpApp.listen(App.config.http_port, function () {
            var host = server.address().address;
            var port = server.address().port;

            console.log('Example app listening at http://%s:%s', host, port);
            App.status.client_app.running = true;
        });

    }

    return this;

};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if(!App.templates){
    App.templates = {};
}

App.templates.window = {
    header: '<div class="window-header clearfix">\
                        <div class="window-title">\
                            Window Title Here\
                        </div>\
                        <div class="window-buttons">\
                            <a href="#" class="window-minimize">_</a>\
                            <a href="#" class="window-maximize">[]</a>\
                            <a href="#" class="window-close">X</a>\
                        </div>\
                </div>',

    body_start: '<div class="window-body">',

    body_end: '</div>\
                <div class="window-footer">\
                </div>'
};

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