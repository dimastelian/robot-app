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