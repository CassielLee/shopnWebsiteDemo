/*5、中间大屏广告效果*/
/*(和轮播图一样)
*1、图片会自动播放，并且下方的广告文字也会是相应的选中状态
*2、当光标在广告下方的文字上滑过时，上方要显示成相应的图片
*/
$(document).ready(function () {
  var $imgrolls = $("#jnImageroll>div>a")
  var len = $imgrolls.length
  var index = 0
  var adTimer = null
  $imgrolls.css("opacity","0.7")
  $imgrolls.mouseover(function () {
    index = $(this).index()
    showImg(index)
  }).eq(0).mouseover()
  /*自动播放，但是当鼠标在文字上时，停止自动播放，移开后继续自动播放*/
  $("#jnImageroll").hover(function () {
    if(adTimer){
      clearInterval(adTimer)
    }
  },function () {
    adTimer = setInterval(function () {
      showImg(index)
      index++
      if(index == len){index=0}
    },5000)
  }).trigger("mouseleave")
})
//显示不同的图片
function showImg(index) {
  var $rollobj = $("#jnImageroll")
  var $rolllist = $rollobj.find("div a")
  var newhref = $rolllist.eq(index).attr("href")
  $("#JS_imgWrap").attr("href",newhref)
    .find("img").eq(index).stop(true,true).fadeIn()
    .siblings().fadeOut()
  $rolllist.removeClass("chos").css("opacity","0.7")
    .eq(index).addClass("chos").css("opacity","1")
}