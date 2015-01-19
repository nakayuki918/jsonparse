(function(window, $, undefined) {
  $(function() {

    var feedUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/hatena/b/hotentry&num=-1',
      htmlstr = '',
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

        var entryTitle = feedData[i].title, // タイトル取得
            entryImg = feedData[i].content.match(/(http:){1}[\S_-]+\.(?:jpg|gif|png)/); //画像取得
            entryDate = new Date(feedData[i].publishedDate);

          if( entryDate !== null) {
            strDate = (entryDate.getMonth() + 1) + '月' + entryDate.getDate() + '日';
          }

        htmlstr +=
          '<li>' +
          '<span class="date">' + strDate + '</span>' +
          '<h2 clas="title">' + entryTitle + '</h2>' +
          '<img src="' + entryImg[0] + '" alt="" />' +
          '</li>';
      }

      $wrapper.html('<ul>' + htmlstr + '</ul>');
    };
  });
})(window, jQuery);