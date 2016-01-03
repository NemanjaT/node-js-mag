angular.module('cmscApp').controller('listPhoneController', ['$scope', '$http', '$location', 'searchBoxFactory',
    function($scope, $http, $location, searchBoxFactory) {
        $scope.listInfo = searchBoxFactory;
        $scope.phoneList = [];

        $http.get('/api/getallphones').then(function(res) {
            $scope.phoneList = res.data;
        }, function() {
            $scope.errorMsg = 'Greska u dohvatanju podataka';
        });

        this.submitUrl = function(path) {
            path = path || '/';
            $location.path(path);
        };
}]);