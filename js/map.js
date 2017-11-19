$(document).ready(function () {
    var element = document.getElementById('map');
    if (typeof(element) != 'undefined' && element != null) {
        map = new GMaps({
            div: '.map',
            lat: 49.8397,
            lng: 24.0297,
            zoom: 13
        });
    }
});