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

    $(".goods li").click(function(){
        $(".mask").height($(document).height());
        $(".mask").show();
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

