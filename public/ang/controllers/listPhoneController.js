angular.module('cmscApp').controller('listPhoneController', ['$scope', '$http', 'searchBoxFactory', function($scope, $http, searchBoxFactory) {
    $scope.listInfo = searchBoxFactory;
    $http.get('/api/getallphones').then(function(res) {
        $scope.phoneList = res.data;
    }, function() {
        $scope.errorMsg = 'Greska u dohvatanju podataka';
    });
}]);