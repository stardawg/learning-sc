var fs = require('fs');
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);

  var app = require('express')();

  var httpServer = worker.httpServer;
  var scServer = worker.scServer;


  app.set('views', __dirname+'/views');
  app.set('view engine', 'jade');
  app.locals.pretty=true;

  app.use(serveStatic(path.resolve(__dirname, 'public')));

  
  app.get('*', function(req, res) {
      res.render('index',{
          title: 'SC-1'
        });
  });

  httpServer.on('request', app);

  var modelController = require('./controllers/modelController');

  /*
    In here we handle our incoming realtime connections and listen for events.
  */
  scServer.on('connection', function (client) {
    console.log('Client ' + client.id + ' has connected.');

      client.on('datagram', function(data){
        console.log('client: ' + client.id + ' sent: ' + data);
        modelController[data.route][data.resource](client, data);
      });
  });
};
