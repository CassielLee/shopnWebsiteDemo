/*5、右侧产品颜色切换*/
/*单击右侧商品颜色选项时，左侧商品的图片也会发生相应的变化*/
$(document).ready(function () {
  $(".jnProDetailList .color_change ul li").click(function () {
    var color = $(this).find("img").attr("alt")
    var imgSrc = $(this).find("img").attr("src")
    $(".jnProDetailList .color_change strong").text(color)
    $(this).addClass("hover")
            .siblings().removeClass("hover")
    var i = imgSrc.lastIndexOf(".")
    var unit = imgSrc.substring(i)
    imgSrc = imgSrc.substring(0,i)
    var imgSrc_small = imgSrc + "_one_small" + unit
    var imgSrc_big = imgSrc + "_one_big" + unit
    $("#bigImg").attr("src",imgSrc_small)
    $("#thickImg").attr("href",imgSrc_big)
    var newImgSrc = imgSrc.replace("images/pro_img/","")
    $("#jnProitem .imgList li").hide()
    $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show()
    /*$("#jnProitem .jqzoom").attr("href",imgSrc_big)*/
    $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("img").click()
  })
})