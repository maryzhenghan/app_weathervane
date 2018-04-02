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

	$('.js-form-citycountry').submit(function(event) {
		event.preventDefault();

		const cityTarget = $(event.currentTarget).find('.js-city');
		const city = cityTarget.val();

		const countrycodeTarget = $(event.currentTarget).find('.js-countrycode');
		const countryCode = countrycodeTarget.val();

		$('.js-weatherpage-locationform').addClass("hidden");

		console.log('2nd submit button works ' + city + ', ' + countryCode);
	});


	
}


function callBack() {
	startApp();
}


$(callBack);