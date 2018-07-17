/*6、右侧最新动态模块内容添加超链接提示*/
/*当鼠标放在最新活动模块的相应超链接上，则会出现相应的提示框*/
$(document).ready(function () {
  var x = 10
  var y = 20
  $("a.tooltip").mouseover(function (e) {
    this.myTitle = this.title
    this.title = ""
    var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>"//创建div提示框
    $("body").append(tooltip)
    $("#tooltip").css({
      "top":(e.pageY+y) + "px",
      "left":(e.pageX+x) + "px"
    }).show("fast")
  }).mouseout(function () {
    this.title = this.myTitle
    $("#tooltip").remove()
  }).mousemove(function (e) {
    $("#tooltip").css({
      "top":(e.pageY+y) +"px",
      "left":(e.pageX+x) + "px"
    })
  })
})