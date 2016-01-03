angular.module('cmscApp').filter('priceFilter', function() {
    return function(items, from, to) {
        var filtered = [];
        if(!from && !to)
            return items;
        from = from || 0;
        to   = to   || 999999;
        console.log(from);
        console.log(to);
        angular.forEach(items, function(item) {
            if(item.price >= from && item.price <= to)
                filtered.push(item);
        });
        return filtered;
    }
});