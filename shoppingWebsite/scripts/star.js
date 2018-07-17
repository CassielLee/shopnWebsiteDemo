/*8、右侧给产品评分的效果*/
$(document).ready(function () {
  $(".pro_rating .rating li a").click(function () {
    var title = $(this).attr("title")
    alert("您给此商品的评分是:" + title)
    var cl = $(this).parent().attr("class")
    $(this).parent().parent().removeClass().addClass("rating "+cl+"star")
    return false
  })
})