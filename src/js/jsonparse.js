(function(window, $, undefined) {
  $(function() {

    var feedUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/hatena/b/hotentry&num=-1',
      feedArray = [],
      $wrapper = $('#jsonparse');

    $.ajax({
      url: feedUrl,
      type: 'GET',
      cache: false,
      dataType: 'jsonp',
      success: function(data) {
        displayFeed(data.responseData.feed.entries);
      }
    });

    displayFeed = function(feedData) {


      for (var i = 0; i < feedData.length; i++) {
        // 画像取得
        var entryImg = feedData[i].content.match(/(http:){1}[\S_-]+\.(?:jpg|gif|png)/);

        //$wrapper.html('<img src="'+ entryImg[0] +'" alt="" />');
      }
    };
  });
})(window, jQuery);