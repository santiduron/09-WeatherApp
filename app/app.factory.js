(function() {
  'use strict';

  angular
    .module('app')
    .factory('weatherFactory', weatherFactory);

  weatherFactory.$inject = ['$http'];

  /* @ngInject */
  function weatherFactory($http) {

    var OPEN_WEATHER_MAP_API_KEY = 'ccd321f54e2f666fb0b68d0f5b468c6e';

    var service = {
      getWeatherForCity: getWeatherForCity,
    };
    return service;

    function getWeatherForCity(cityName) {
      return $http
        .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&apikey=' + OPEN_WEATHER_MAP_API_KEY)
        .then(function(response) {
          return response.data;
        });
    }

  }

})();
