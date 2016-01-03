angular.module('cmscApp').filter('hasImageFilter', function() {
    return function(items, input) {
        var filtered = [];
        if(!input)
            return items;
        angular.forEach(items, function(item) {
            if(item.mainImage != '')
                filtered.push(item);
        });
        return filtered;
    };
});