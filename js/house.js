/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-5
 * Time: 上午11:40
 * To change this template use File | Settings | File Templates.
 */
function PageObj(){

}

PageObj.prototype.init = function(){
    $(window).scrollTop(3047);

    $(".goods li").click(function(){
        $(".mask").height($(document).height());
        $(".mask").show();
   /*     if($.browser.version == "6.0"){
            $(".modal").css("top",(($(window).scrollTop()+150)));
            $('body').height(3192);
            $(window).scroll(function(){

                if($(window).scrollTop() >= ($('body').height()-$(window).height())){
                    $(".modal").css("top",($('body').height()-150));
                }else{
                    $(".modal").css("top",(($(window).scrollTop()+150)));
                }

            })
        }*/
        $(".modal").show();
        var id = $(this).find("p").html();
        var price = $(this).find(".priceNow").html();
        $("#goodsId").val(id);
        $("#goodsPrice").val(price);
    })

    $(".close").click(function(){
        $(".mask").hide();
        $(".modal").hide();
    })



}

$(function(){
    var pageobj = new PageObj();
    pageobj.init();
})

