(function() {
	angular.module('eCommerceApp', [])
		.controller('mobilePhoneListController', ['$http', function($http){
			var thisObj = this;
			thisObj.mobilePhones = [];

			$http.get('/api/getallphones').then( function(data) {
				thisObj.mobilePhones = data;
			}, function(data) {
				thisObj.mobilePhones = data || "Request Data Fail!";
			});
		}])
})();
