/*2、网页换肤*/
/*点击相应颜色的按钮，网页会切换成对应的颜色，并且会保存到注册表中，即使刷新也不会更改*/
$(document).ready(function () {
  var $li = $("#skin>li")
  $li.click(function () {
    switchSkin(this.id)
  })
  var cookie_skin = $.cookie("MyCssSkin")
  if(cookie_skin){
    switchSkin(cookie_skin)
  }
})
function switchSkin(skinName) {
  $("#"+skinName).addClass("selected")
    .siblings().removeClass("selected")
  $("#cssfile").attr("href","styles/skin/"+skinName+".css")//根据点击来设置对应的皮肤
  $.cookie("MyCssSkin",skinName,{path:'/',expires:10})
}