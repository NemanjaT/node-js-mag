$(function() {
    var moreInfoBtn = document.getElementById('more-info-btn');
    var searchMoreInfo = document.getElementById('search-more-info');
    var phoneNameTxt = document.getElementById('phoneName');

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
        }
    });

});