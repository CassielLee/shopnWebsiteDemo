/*9、右侧放入购物车*/
/*商品加入购物车后，需要将用户选择的产品的名称、尺寸、颜色、数量和总价告诉用户，以便用户进行确认是否选择正确*/
$(document).ready(function () {
  var $product = $("#jnDetails .jnProDetail")
  $("#cart a").click(function () {
    var pro_name = $product.find("h4:first").text()
    var pro_size = $product.find(".pro_size strong").text()
    var pro_color = $product.find(".color_change strong").text()
    var pro_num = $product.find("#num_sort").val()
    var pro_price = $product.find(".pro_price strong").text()
    var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+
      "尺寸是："+pro_size+"；"+
      "颜色是："+pro_color+"；"+
      "数量是："+pro_num+"；"+
      "总价是："+pro_price +"元。</div>";
   /* alert(dialog)*/
    $("#jnDialogContent").html(dialog);
    $('#basic-dialog-ok').modal();
    return false
  })
})