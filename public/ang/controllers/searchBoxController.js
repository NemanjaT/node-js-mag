angular.module('cmscApp').controller('searchBoxController', ['$http', '$location', '$scope', 'searchBoxFactory',
    function($http, $location, $scope, searchBoxFactory) {
        $scope.searchInfo = searchBoxFactory;

        this.submitUrl = function(event, path) {
            if(path === undefined) path = '/';
            if(event.which == 13)
                $location.path(path);
        };
}]);