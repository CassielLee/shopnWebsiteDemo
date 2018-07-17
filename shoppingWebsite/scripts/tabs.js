/*4、产品属性介绍之类的选项卡*/
$(document).ready(function () {
  $lis = $("div.tab_menu li ")
  $lis.click(function () {
    $(this).addClass("selected")
      .siblings().removeClass("selected")
     var index = $lis.index(this)
    $("div.tab_box > div").eq(index).show()
      .siblings().hide()
  }).hover(function () {
    $(this).addClass("hover")
  },function () {
    $(this).removeClass("hover")
  })
})