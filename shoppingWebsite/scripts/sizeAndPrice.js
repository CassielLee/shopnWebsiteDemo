/*7、右侧产品数量和价格联动*/
/*当选择不同数量的产品时，商品总价也会随着变换*/
$(document).ready(function () {
  var $span = $(".pro_price strong")
  var price = $span.text()
 /* console.log(price)*/
  $(".pro_num #num_sort").change(function () {//只要下拉选择框的选择项变动则就会触发事件
    /*alert($(this).val())*/
    var num = $(this).val()
    var amount = num * price
    $span.text(amount)
  }).change()
})