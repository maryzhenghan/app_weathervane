function startApp() {
	$('.js-startbutton').on('click', function(event){
		event.preventDefault();

		$('.js-homepage').css('display','none');
		$('.js-weatherpage').css('display','inline-block');
	});
}




function callBack() {
	startApp();
}


$(callBack);