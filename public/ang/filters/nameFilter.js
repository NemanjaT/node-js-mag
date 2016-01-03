angular.module('cmscApp').filter('nameFilter', function() {
    return function(items, input) {
        var filtered = [];
        if(!input)
            return items;
        angular.forEach(items, function(item) {
            if(item.name.toLowerCase().indexOf(input.toLowerCase()) != -1
            || item.manufacturer.toLowerCase().indexOf(input.toLowerCase()) != -1)
                filtered.push(item);
        });
        return filtered;
    }
});