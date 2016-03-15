var users = {};

users.index = function(client, data){
	var results = {
		success: 0,
		message: 'Failed to get users',
		notify: 'users-index'
	};

	function finish() {
		client.emit('response', results);
	};

	results.users = [
		{
			id: 1,
			name: 'Aang'
		},
		{
			id: 2,
			name: 'Katara'
		}
	];
	finish();
};

module.exports = users;