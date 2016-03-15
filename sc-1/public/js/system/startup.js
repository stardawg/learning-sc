$(function(){

	observe('bind', function(){
		console.log('bind');
		setTimeout(function() {notify('finished-loading');}, 300);
	});

});

$(document).ready(function(){
	console.log('ready called...');
	notify('bind');
	console.log('ready completed');
});