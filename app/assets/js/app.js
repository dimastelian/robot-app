var App = {
    config: {
        http_port: 8080,
    },
    status: {
        client_app: {            
            running: false,
        },
    }

};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



App.HTTPServer = function () {

    var express = require('express');
    var httpApp = express();

    httpApp.use(express.static('client'));
    httpApp.use('/assets', express.static('assets'));

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
var server = App.HTTPServer();

server.init();