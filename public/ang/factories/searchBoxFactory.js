angular.module('cmscApp').factory('searchBoxFactory', function() {
    return {
        phoneName: '',
        imageRequired: false,
        price: {
            from: 0,
            to: null
        }
    };
});