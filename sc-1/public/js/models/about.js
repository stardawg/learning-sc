$(function() {

	observe('bind', function() {

	});

	observe('start', function(){

	});

	observe('build-about', function(){
		console.log('build-about');
		$('section[data-route="about"]').show();
		setTimeout(function() {notify('finished-loading');},300);
	});

});