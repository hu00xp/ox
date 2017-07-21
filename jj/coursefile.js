define(function(){$("[original-title]").tipsy({gravity:"s"}),$item=$(".main-item"),$item.on("click",function(){$detail=$(this).next(),$icon=$(this).find(".icon"),"off"!=$detail.data("fold")&&$detail.data("fold")?($detail.next(".padding").animate({height:"20px"}),$detail.data("fold","off").slideUp(),$icon.removeClass("icon-up").addClass("icon-down")):($detail.data("fold","on").slideDown(),$detail.next().animate({height:"0px"}),$icon.removeClass("icon-down").addClass("icon-up"))});
$(document).on('click',".item-detail ul li",function(){
    if($(this).find(".icon-spow-wrap a.video").length>0){
        window.window.open($(this).find(".icon-spow-wrap a.video").eq(0).attr("href"));
    }else{
        window.window.open($(this).find(".icon-spow-wrap a").eq(0).attr("href"));
    }
}).on("click",".item-detail .icon-spow-wrap a",function(){
    if(e && e.stopPropagation){
        e.stopPropagation()
    } else{
        window.event.cancelBubble=true
    }
});
});