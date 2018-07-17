/*3、导航效果*/
/*实现导航效果,即导航条二级菜单的显示*/
$(document).ready(function () {
  $(".nav > li").hover(function () {
    $(this).find(".jnNav").show()
  },function () {
    $(this).find(".jnNav").hide()
  })
})