/**
 * Created by anoop on 26/3/17.
 */
'use strict';

angular.module('myMovieApp').
    config(['$routeProvider', function config($routeProvider) {
    $routeProvider.when('/view1', {
        template: '<movie-list-view-1></movie-list-view-1>'
    }).
    when('/view2', {
        template: '<movie-list-view-2></movie-list-view-2>'
    }).
    otherwise('/view1');
}]);