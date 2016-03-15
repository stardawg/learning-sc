$(function(){

	observe('bind', function() {

		function routerMiddleware() {
			console.log('routerMiddleware');
			notify('start-loading');
			$('section').hide();
			var hash = window.location.hash.slice(2);
			console.log('route: ' + hash);
			if(isNaN(hash[hash.length -1])) {
				notify('build-' + hash);
			}
			else {
				//it's an edit so use function below...
			}
		}


		var dashboard = function() {};
		var about = function() {};
		var users = function() {};

		var routes = {
			'/dashboard' : dashboard,
			'/about' : about,
			'/users' : users
		};

		var router = Router(routes);

		router.configure({
			on: routerMiddleware
		});

		router.init();

	});

	observe('start-loading', function(){
		console.log('start-loading');
		$('.whole-page').hide();
		$('.loading-page').show();
	});

	observe('finished-loading', function(){
		console.log('finished-loading');
		$('.loading-page').hide();
		$('.whole-page').show();
	});

});