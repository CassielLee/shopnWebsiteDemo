/*3、单击产品小图片切换大图*/
/*当三级产品的小图片时，上面对应的大图需要切换，并且大图的放大镜效果和遮罩也必须同时切换*/
$(document).ready(function () {
  $("#jnProitem ul.imgList li a").click(function () {
    var imgSrc = $(this).find("img").attr("src")
    var i = imgSrc.lastIndexOf(".")
    var unit = imgSrc.substring(i)
    imgSrc = imgSrc.substring(0,i)
    var imgSrc_big = imgSrc + "_big" + unit
    $("#thickImg").attr("href",imgSrc_big)
    $(".jqzoomWrap .jqzoom ").attr("href",imgSrc_big)
  })
})