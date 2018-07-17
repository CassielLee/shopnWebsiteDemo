/*6、右侧产品尺寸切换*/
$(document).ready(function () {
  $("#jnDetails .jnProDetailList .pro_size li").click(function () {
    var size = $(this).text()
    $(this).addClass("cur")
            .siblings().removeClass("cur")
    $(this).parent().siblings("strong").text(size)
  })
})