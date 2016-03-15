$(function() {

	var display = {};

	observe('bind', function() {
		display.tbody = $('#users-table');
	});

	observe('start', function(){

	});

	observe('build-users', function(){
		console.log('build-users');
		notify('server', {
			route: 'users',
			resource: 'index'
		})

	});

	observe('users-log', function(users){
		console.log('users:');
		for(var i = 0; i < users.length; i++)
		{
			console.log('id: ' + users[i].id + '; name: ' + users[i].name);
		}
	});

	observe('users-index', function(data) {
		console.log('users-index: ' + data);
		var users = data.users;
		notify('users-log', users);
		display.tbody.empty().html(templatizer['users']({
			users: users
		}));

		$('section[data-route="users"]').show();
		setTimeout(function(){notify('finished-loading');},300);
	});

});