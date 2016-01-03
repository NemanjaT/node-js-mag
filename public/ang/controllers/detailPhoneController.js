angular.module('cmscApp').controller('detailPhoneController', ['$http', '$scope', function($http, $scope) {
    $scope.detailInfo = {};

    $http.get('/api/getphone/lg-nexus-5x-16gb')
        .then(function(res) {
            $scope.detailInfo = res.data;
        }, function() {
            $scope.errorMsg = 'Greska u dohvatanju podataka';
        });
}]);