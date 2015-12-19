(function() {
	angular.module('eCommerceApp', ['ngRoute'])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '/angular/templates/partials/phonelist.html',
					controller: 'mobilePhoneListController',
					controllerAs: 'mobileList'
				}).
				when('/phone/:phoneSlug', {
					templateUrl: '/angular/templates/partials/phonedetail.html',
					controller: 'mobilePhoneDetailController',
					controllerAs: 'mobileDetail'
				}).
				otherwise({
					templateUrl: '/angular/templates/error/404.html',
				});
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		}])
		.controller('mobilePhoneListController', ['$http', '$location', function($http, $location) {
			var thisObj = this;
			this.mobilePhones = [];

			$http.get('/api/getallphones').then( function(data) {
				thisObj.mobilePhones = data;
			}, function(data) {
				thisObj.mobilePhones = data || "Request Data Fail!";
			});

			this.getUrl = function() {
				return $location.url();
			}
		}])
		.controller('mobilePhoneDetailController', ['$http', '$location', function($http, $location) {
			var thisObj = this;

			this.getUrl = function() {
				return $location.url();
			}
		}])
})();
