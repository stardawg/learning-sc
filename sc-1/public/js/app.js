$(function(){
	observe('hello', function(){
		var a=5;
		console.log(a);
	});

	observe('hello', function() {
		console.log('yay');
	});
	
});