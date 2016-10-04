
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ',' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location='
        + address + '&pitch=-0.76&key=AIzaSyBKpmV2hKzhnU7p2IEiaMfrvhknoDL3b_o';
    $body.append('<img class="bgimg" src="'+ streetviewUrl + '">');

    // YOUR CODE GOES HERE!

    //NYTimes
    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
        + cityStr + '&api-key=9aeaeac79a5741b2b4ceafca841db987';
    $.getJSON(nytURL, function (data) {
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);
        var items = data.response.docs;
        for (var i = 0; i < items.length; i++) {
            var article = items[i];
            $nytElem.append('<li class="article">' +
                '<a href="' + article.web_url + '">' + article.headline.main + '</a>'
                + '<p>' + article.snippet + '</p>' + '</li>');
        };
    }).error(function(e) {
        $nytHeaderElem.text('New York Times articles could not be loaded');
    });

    //Wikipedia article

    return false;
};

$('#form-container').submit(loadData);
