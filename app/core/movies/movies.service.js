'use strict';


angular.module('core.movies').
    factory('Movies', ['$http', function($http) {
      return $http.get('http://netflixroulette.net/api/api.php?director=Quentin')
    }]);