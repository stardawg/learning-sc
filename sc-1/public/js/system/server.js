$(function() {

	var socket = socketCluster.connect();

	socket.on('connect', function() {
		console.log('connected: ' + socket);
	});

	socket.on('response', function(data) {
		console.log('recieved from server: ' + data);
		notify(data.notify, data);
	});

	observe('server', function(data){
		socket.emit('datagram', data);
	});

});