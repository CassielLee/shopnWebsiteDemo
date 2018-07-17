/*1、搜索框文字效果*/
/*搜索框默认会有提示文字，当光标定位在搜索框上时，需要将提示文字去掉，当光标移开时，如果用户未填写任何内容，需要把提示文字恢复*/
$(document).ready(function () {
  $("#inputSearch").focus(function () {
    $(this).addClass("focus")
    if ($(this).val() == this.defaultValue){
      $(this).val("")
    }
  }).blur(function () {
    $(this).removeClass("focus")
    if($(this).val()==""){
      $(this).val(this.defaultValue)
    }
  }).keyup(function (event) {//判断哪个键被按下
    if(event.which == 13 ){
      alert("回车提交表单成功！")
    }
  })
  $("#submit").click(function () {
    var submit = document.getElementById('inputSearch')
    if(($("#inputSearch").val() != submit.defaultValue) || ($("#inputSearch").val() != " ")){
      alert("提交成功！")
    }
  })
})
