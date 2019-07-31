// all imports should be at the top
// import config to access api key
import Config from '../../config.js';

let config = new Config();

const API_KEY = config.getKey();

function loadHeader(response) {
  $('header').html(response);
}

$.get('./components/header.html', loadHeader)

// create a function for the form when submitted
$('#submit-btn').click(function(e) {
  e.preventDefault();
  let city = $('#city_search').val();

  // store url for call
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`

  // use jquery to send a call for the current weather data
  $.get(url, function(response) {
    $('#city_name').text(`${response.name}, ${response.sys.country}`)
    $('#high').html(`${response.main.temp_max.toFixed(0)}&#8457;`)
    $('#low').html(`${response.main.temp_min.toFixed(0)}&#8457;`)
    $('#forecast').text(`${response.weather[0].main}`)
    $('#humidity').text(`${response.main.humidity.toFixed(0)}%`)

    // show weather info cards
    $('#weather_info').css('display', 'block');
  });
});

// hide the weather info section immediate on load
$('#weather_info').css('display', 'none');
