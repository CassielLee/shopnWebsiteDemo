/*8、右侧下部鼠标滑过产品列表效果*/
$(function(){
  /*$("#jnBrandList li").each(function(index){
    var $img = $(this).find("img");
    var img_w = $img.width();
    var img_h = $img.height();
    var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
    $(spanHtml).appendTo(this);
  })*/
  $("#jnBrandList .imageMask").hover(function () {
    $(this).addClass("imageOver");
  },function () {
    $(this).removeClass("imageOver");
  })


  /*
  $("#jnBrandList").find(".imageMask").live("hover", function(){
    $(this).toggleClass("imageOver");
  });
  */
})

