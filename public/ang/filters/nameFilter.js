angular.module('cmscApp').filter('nameFilter', function() {
    return function(items, input) {
        var filtered = [];
        if(!input)
            return items;
        angular.forEach(items, function(item) {
            var name = item.manufacturer.toLowerCase() + ' ' + item.name.toLowerCase();
            if(name.indexOf(input.toLowerCase()) != -1)
                filtered.push(item);
        });
        return filtered;
    }
});