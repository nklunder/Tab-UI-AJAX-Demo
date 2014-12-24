var cache = {};

$(".ajax-tabs li").on("click", function () {
  var $displayArea = $(".display-area"),
      page = $(this).attr("class");
      
      console.log(page);

  if (cache[page]) {
    $displayArea.html(cache[page]);
  } else {
    $.get("pages/" + page + ".html", function (data) {
      $displayArea.html(data);
      cache[page] = data;
    });
  }
});
