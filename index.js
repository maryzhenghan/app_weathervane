function startApp() {
	$('.js-startbutton').on('click', function(event){
		event.preventDefault();

		$('.js-homepage').addClass("hidden");
		$('.js-weatherpage').removeClass("hidden");

		submitLocation();
	});
}

const OPENWEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather';

function submitLocation() {
	$('.js-form-zipcode').submit(function(event) {
		event.preventDefault();

		const zipcodeTarget = $(event.currentTarget).find('.js-zipcode');
		const zipcode = zipcodeTarget.val();

		$('.js-weatherpage-locationform').addClass("hidden");

		console.log('submit button works ' + zipcode);
	});


	
}


function callBack() {
	startApp();
}


$(callBack);