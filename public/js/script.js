$(function() {
    var searchBox = document.getElementById('search-box');
    var moreInfoBtn = document.getElementById('more-info-btn');
    var searchMoreInfo = document.getElementById('search-more-info');
    var phoneNameTxt = document.getElementById('phoneName');
    var searched = false;

    var jSearchBox = function(query) {
        this.searchBox = $(query);
        this.goToMiddle = function() {
            this.searchBox.css('margin-top', $(document).height() / 2 - this.searchBox.height() / 2);
        };
        this.goToTop = function() {
            this.searchBox.css('margin-top', 0);
        };
    };

    var jsb = new jSearchBox('#search-box');
    jsb.goToMiddle();

    window.onresize = function() {
        if(!searched) {
            jsb.goToMiddle();
        }
    };

    moreInfoBtn.addEventListener('click', function() {
        if (searchMoreInfo.classList.contains('hidden')) {
            searchMoreInfo.classList.remove('hidden');
            searchMoreInfo.classList.add('shown');
            moreInfoBtn.classList.add('rotated');
        } else {
            searchMoreInfo.classList.add('hidden');
            searchMoreInfo.classList.remove('shown');
            moreInfoBtn.classList.remove('rotated');
        }
    });

    phoneNameTxt.addEventListener('keypress', function() {
        var mainContainer = $('.container')[0];
        if(mainContainer.classList.contains('hidden')) {
            mainContainer.classList.remove('hidden');
            jsb.goToTop();
            searched = true;
        }
    });

});