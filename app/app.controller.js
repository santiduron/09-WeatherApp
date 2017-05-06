(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeatherController', WeatherController);

  WeatherController.$inject = ['weatherFactory'];

  /* @ngInject */
  function WeatherController(weatherFactory) {
    var vm = this;

    vm.search = search;
    vm.searches = [];

    function search(cityName) {
      vm.searches.push({
        cityName: cityName,
        timestamp: new Date()
      });

      weatherFactory.getWeatherForCity(cityName)
        .then(function(data) {
          vm.weatherData = data;
        })
    };
  }
})();
