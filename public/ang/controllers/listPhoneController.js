angular.module('cmscApp').controller('listPhoneController', ['$scope', '$http', function($scope, $http) {
    $http.get('/api/getallphones').then(function(res) {
        $scope.phoneList = res.data;
    }, function() {
        $scope.errorMsg = 'Greska u dohvatanju podataka';
    });
}]);