function startApp() {
	$('.js-startbutton').on('click', function(event){
		event.preventDefault();

		$('.js-homepage').css('display','none');
		$('.js-weatherpage').css('display','inline-block');

		submitLocation();
	});
}

const OPENWEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather';

function submitLocation() {
	$('.js-form-zipcode').submit(function(event) {
		const zipcodeTarget = $(event.currentTarget).find('.js-zipcode');
		const zipcode = zipcodeTarget.val();
		console.log(zipcode);
		event.preventDefault();
	});


	
}


function callBack() {
	startApp();
}


$(callBack);