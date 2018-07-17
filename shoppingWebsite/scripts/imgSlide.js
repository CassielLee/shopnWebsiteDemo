/*7、右侧下部品牌活动横向滚动效果*/
$(document).ready(function () {
  $("#jnBrandTab li a ").click(function () {
    $(this).parent().addClass("chos")
      .siblings().removeClass("chos")
    var idx = $("#jnBrandTab li a").index(this)
    showBrandList(idx)
    return false
  }).eq(0).click()
})

function showBrandList(index) {
  var $rollobj = $("#jnBrandList")
  var rollWidth = $rollobj.find("li").outerWidth()
  var showCount = 4
  rollWidth = rollWidth * showCount
  $rollobj.stop(true,false).animate({"left":-rollWidth * index},1000)
}