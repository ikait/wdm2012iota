var flag = false;
$(function () {
  $("img", "#img-list").click(function (e) {
    e.preventDefault();
    if (!flag) {
      $('body').append('<div id="lb-whitelayer"><div id="lb-overlayer"></div></div>');
      flag = true;
    }
    var img_src = $(this).attr("src");
    var img_alt = $(this).attr("alt");
    var img_number = $("img", "#img-list").index(this) + 1;
    var img_length = $("img", "#img-list").size(this);
    $("#lb-overlayer").html("<img /><p />");
    $("img", "#lb-overlayer").attr("src", img_src);
    $("p", "#lb-overlayer").html('<span id="lb-index">' + img_number + ' of ' + img_length + '</span><span id="lb-title">' + img_alt + '</span>');
    $("#lb-whitelayer").show();
    $("img", "#lb-overlayer").hover(function(){
      $("p", "#lb-overlayer").stop().animate({'opacity' : '1'}, 400);
      }, function(){
        $("p", "#lb-overlayer").stop().animate({'opacity' : '0'}, 400);
    });
    $("#lb-whitelayer").click(function () {
      $(this).hide();
    });
    $("#lb-overlayer").css({
      "margin-top": ($(window).height() - $("img", "#lb-overlayer").height()) / 2,
      "margin-left": ($(window).width() - $("img", "#lb-overlayer").width()) / 2
    });
  }).hover(function(){
    $(this).stop().animate({'opacity' : '0.5'}, 200);
  }, function(){
    $(this).stop().animate({'opacity' : '1'}, 600);
  });
});
