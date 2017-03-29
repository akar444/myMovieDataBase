/**
 * Created by anoop on 29/3/17.
 */

'use strict';

angular.module('movieListView2').
    component('movieListView2', {
    templateUrl: 'movieListView2/movieListView2.template.html',
    controller: ['Movies', 'orderByFilter', function movieListViewController(Movies, orderBy) {
        var self = this;
        Movies.then(function(response) {
           self.movieList = response.data;
        });
    }]
});
