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
	let weatherType;
	let playlistId;
	let playlistTheme;

	switch(weatherIconName) {
		case "\"01d\"":
			weatherType = "clear sky day";
			playlistId = "6pmTSyoGP89kpnzaSzQW4C";
			playlistTheme = "white";
			break;
		case "\"01n\"":
			weatherType = "clear sky night";
			playlistId = "6pmTSyoGP89kpnzaSzQW4C";
			playlistTheme = "black";
			break;
		case "\"02d\"":
			weatherType = "few clouds day";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "white";
			break;
		case "\"02n\"":
			weatherType = "few clouds night";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "black";
			break;
		case "\"03d\"":
			weatherType = "scattered clouds day";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "white";
			break;
		case "\"03n\"":
			weatherType = "scattered clouds night";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "black";
			break;
		case "\"04d\"":
			weatherType = "broken clouds day";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "white";
			break;
		case "\"04n\"":
			weatherType = "broken clouds night";
			playlistId = "6muyGzSo8MyUsIIMGqJSna";
			playlistTheme = "black";
			break;
		case "\"09d\"":
			weatherType = "shower rain day";
			playlistId = "0NiHg73PvXtUQw9tB87kNW";
			playlistTheme = "white";
			break;
		case "\"09n\"":
			weatherType = "shower rain night";
			playlistId = "0NiHg73PvXtUQw9tB87kNW";
			playlistTheme = "black";
			break;
		case "\"10d\"":
			weatherType = "rain day";
			playlistId = "0NiHg73PvXtUQw9tB87kNW";
			playlistTheme = "white";
			break;
		case "\"10n\"":
			weatherType = "rain night";
			playlistId = "0NiHg73PvXtUQw9tB87kNW";
			playlistTheme = "black";
			break;
		case "\"11d\"":
			weatherType = "thunderstorm day";
			playlistId = "6mkMaOMvWbug59jXdRJnoo";
			playlistTheme = "white";
			break;
		case "\"11n\"":
			weatherType = "thunderstorm night";
			playlistId = "6mkMaOMvWbug59jXdRJnoo";
			playlistTheme = "black";
			break;
		case "\"13d\"":
			weatherType = "snow day";
			playlistId = "3i9S8jLFZdwZZyJbgk4HHa";
			playlistTheme = "white";
			break;
		case "\"13n\"":
			weatherType = "snow night";
			playlistId = "3i9S8jLFZdwZZyJbgk4HHa";
			playlistTheme = "black";
			break;
		case "\"50d\"":
			weatherType = "mist day";
			playlistId = "0kdgMdlV7dTeeslqXPrEuF";
			playlistTheme = "white";
			break;
		case "\"50n\"":
			weatherType = "mist night";
			playlistId = "0kdgMdlV7dTeeslqXPrEuF";
			playlistTheme = "black";
			break;
	};

	const spotifyUrl = `https://open.spotify.com/embed?uri=spotify:user:mnzheng:playlist:${playlistId}&view=coverart&theme=${playlistTheme}`;
	console.log(spotifyUrl);

	$('.js-resultspage').removeClass("hidden");

/*	$('.js-playlistiframe').attr("src", `${spotifyUrl}`);*/
	$('.js-resultspage').html(`
		<iframe src="${spotifyUrl}" width="400" height="80" frameborder="0" allow="encrypted-media" allowtransparency="true" class="js-playlistiframe"></iframe>`);
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