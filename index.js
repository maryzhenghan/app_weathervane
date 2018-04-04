const OPENWEATHER_SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather';
const UNSPLASH_SEARCH_URL = 'https://api.unsplash.com/photos/random/';
let map;


function changeBg(unsplashData) {
	const unsplashBgUrl = unsplashData.urls.full;
	$('html').css("background", `url('${unsplashBgUrl}') no-repeat center center fixed`);
}

function getUnsplashData(weatherIcon, callback) {
	const weatherPhotoSearch = weatherBank[weatherIcon].weatherPhotoSearch;
	const query = {
		query: weatherPhotoSearch,
		orientation: 'landscape',
		featured: '',
		client_id: '18f4244f98bfff352004a8687212d4a90fc64ad55bfa3402e323e10f9041ec22',
	}

	$.getJSON(UNSPLASH_SEARCH_URL, query, callback);
}

function initMap(locationLat, locationLng) {
	const numberLat = Number(locationLat);
	const numberLng = Number(locationLng);

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: numberLat, lng: numberLng},
		zoom: 10
	});
}

function displayPlaylist(weatherIcon) {
	const playlistId = weatherBank[weatherIcon].playlistId;
	const playlistTheme = weatherBank[weatherIcon].playlistTheme;

	const spotifyUrl = `https://open.spotify.com/embed?uri=spotify:user:mnzheng:playlist:${playlistId}&view=coverart&theme=${playlistTheme}`;

	$('.js-resultspage').removeClass("hidden");
	$('.js-playlistiframe').attr("src", `${spotifyUrl}`);
}

function displayApiSearchData(data) {
	const weatherIcon = data.weather[0].icon;

	const locationLat = data.coord.lat;
	const locationLng = data.coord.lon;

	displayPlaylist(weatherIcon);
	initMap(locationLat, locationLng);
	getUnsplashData(weatherIcon, changeBg);
}

function getWeatherData(searchTerm, searchTerm2, callback) {
	const query = {
		q: `${searchTerm},${searchTerm2}`,
		units: 'imperial',
		APPID: '753488c2e76956786a10dc9e1ab0243a',
	}

	$.getJSON(OPENWEATHER_SEARCH_URL, query, callback);
}


function submitLocation() {
	$('.js-form-zipcode').submit(function(event) {
		event.preventDefault();

		const zipcodeTarget = $(event.currentTarget).find('.js-zipcode');
		const zipcode = zipcodeTarget.val();
		const countryDefault = 'us';

		$('.js-weatherpage').addClass("hidden");

		getWeatherData(zipcode, countryDefault, displayApiSearchData);
	});

	$('.js-form-citycountry').submit(function(event) {
		event.preventDefault();

		const cityTarget = $(event.currentTarget).find('.js-city');
		const city = cityTarget.val();
		const countrycodeTarget = $(event.currentTarget).find('.js-countrycode');
		const countryCode = countrycodeTarget.val();

		$('.js-weatherpage').addClass("hidden");

		getWeatherData(city, countryCode, displayApiSearchData);
	});
}

function startApp() {
	$('.js-startbutton').on('click', function(event){
		event.preventDefault();

		$('.js-homepage').addClass("hidden");
		$('.js-weatherpage').removeClass("hidden");

		submitLocation();
	});
}

function masterCallback() {
	startApp();
}


$(masterCallback);