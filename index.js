function startApp() {
$('.js-startbutton').on('click', function(event){
	event.preventDefault();
	console.log('hello world');
	});
}


function callBack() {
	startApp();
}


$(callBack);