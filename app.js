var cache = {};

$('.ajax-tabs li').on('click', function () {
  var $displayArea = $('.display-area'),
      page = $(this).data('tab');

  $(this).addClass('selected').siblings().removeClass('selected');

  if (cache[page]) {
    $displayArea.html(cache[page]);
  } else {
    $.get('pages/' + page + '.html', function (data) {
      $displayArea.html(data);
      cache[page] = data;
    });
  }
});
