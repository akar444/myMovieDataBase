'use strict';

angular.module('movieList').
	component('movieList', {
		templateUrl: 'movieList/movieList.template.html',
		controller: ['Movies','orderByFilter', function movieListController(Movies, orderBy) {
			var self = this;
			self.sortBy = 'rating';
			Movies.then(function(response) {
				self.movieList = response.data;
				self.showMovieInfo(0, 'rating');
			});
	        self.showMovieInfo = function(index, sortBy) {
            	self.selectedIndex = index;
            	self.setMainImage(index, sortBy);
            };
            self.setMainImage = function(index, sortBy) {
            	self.movieList = orderBy(self.movieList, sortBy);
            	self.mainImage = 'http://netflixroulette.net/api/posters/'+ self.movieList[index].show_id + '.jpg';
            }
		}]
	});
