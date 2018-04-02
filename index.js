function startApp() {
	$('.js-startbutton').on('click', function(event){
		event.preventDefault();

		$('.js-homepage').addClass("hidden");
		$('.js-weatherpage').removeClass("hidden");

		submitLocation();
	});
}

const OPENWEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather';

function getWeatherData(searchTerm, searchTerm2, callback) {
	const query = {
		q: `${searchTerm},${searchTerm2}`,
		units: 'imperial',
		APPID: '753488c2e76956786a10dc9e1ab0243a',
	}
	$.getJSON(OPENWEATHER_SEARCH_URL, query, callback);
}

function displayApiSearchData(data) {
	const weatherIcon = data.weather[0].icon;
	let weatherIconName = JSON.stringify(weatherIcon);
	console.log(weatherIconName);

	displayPlaylist(weatherIconName);
}

function displayPlaylist(weatherIconName){
	
}

function submitLocation() {
	$('.js-form-zipcode').submit(function(event) {
		event.preventDefault();

		const zipcodeTarget = $(event.currentTarget).find('.js-zipcode');
		const zipcode = zipcodeTarget.val();

		const countryDefault = 'us';

		$('.js-weatherpage-locationform').addClass("hidden");

		console.log('submit button works ' + zipcode + ', ' + countryDefault);

		getWeatherData(zipcode, countryDefault, displayApiSearchData);
	});

	$('.js-form-citycountry').submit(function(event) {
		event.preventDefault();

		const cityTarget = $(event.currentTarget).find('.js-city');
		const city = cityTarget.val();

		const countrycodeTarget = $(event.currentTarget).find('.js-countrycode');
		const countryCode = countrycodeTarget.val();

		$('.js-weatherpage-locationform').addClass("hidden");

		console.log('2nd submit button works ' + city + ', ' + countryCode);

		getWeatherData(city, countryCode, displayApiSearchData);
	});
}

function masterCallback() {
	startApp();
}


$(masterCallback);