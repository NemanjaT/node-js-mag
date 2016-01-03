angular.module('cmscApp').controller('detailPhoneController', ['$http', '$scope', '$routeParams',
    function($http, $scope, $routeParams) {
        $scope.detailInfo = {};
        var phoneSlug = $routeParams.phoneSlug;

        $http.get('/api/getphone/' + phoneSlug)
            .then(function(res) {
                $scope.detailInfo = res.data;
            }, function() {
                $scope.errorMsg = 'Greska u dohvatanju podataka';
            });
}]);