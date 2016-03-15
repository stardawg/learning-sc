$(function() {

	observe('bind', function() {

	});

	observe('start', function(){

	});

	observe('build-dashboard', function(){
		console.log('build-dashboard');
		$('section[data-route="dashboard"]').show();
		setTimeout(function(){notify('finished-loading');},300);
	});

});