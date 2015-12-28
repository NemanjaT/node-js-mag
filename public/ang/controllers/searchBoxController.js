angular.module('cmscApp').controller('searchBoxController', ['$http', '$location', function($http, $location) {
    this.submitUrl = function(event, path) {
        if(path === undefined) path = '/';
        if(event.which == 13)
            $location.path(path);
    };
}]);