angular.module('cmscApp').controller('listPhoneController', ['$scope', '$http', '$location', 'searchBoxFactory',
    function($scope, $http, $location, searchBoxFactory) {
        $scope.listInfo = searchBoxFactory;

        console.log('phoneList: ');
        console.log($scope.phoneList);
        $http.get('/api/getallphones').then(function(res) {
            $scope.phoneList = res.data;
            console.log('phoneList: ');
            console.log($scope.phoneList);
        }, function() {
            $scope.errorMsg = 'Greska u dohvatanju podataka';
        });
}]);