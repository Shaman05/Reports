/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 9/24/12
 * Time: 3:26 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var util = require('util');

    //selector cache
    var topBar = $("#top-bar"),
        content = $("#content"),
        footer = $("#footer"),
        left = $("#left");

    module.exports = {
        init : function(){
            this.pageUi.init();
            this.event();
        },
        pageUi : {
            init : function(){
                this.layOutInit();
                console.log("index page!");
            },
            layOutInit : function(){
                var rh = util.getClientView().height - topBar.outerHeight() - footer.outerHeight();
                var setHeigh = rh > 200 ? rh : 200;
                content.css("height", setHeigh);
            }
        },
        event : function(){
            var _this = this;
            $(window).on("resize", function(){
                _this.pageUi.layOutInit();
            });
            $(".condition dt", left).find("a").on("click", function(){
                $(this).find("i").toggleClass("icon-close");
                $(this).parent().siblings("dd").toggle();
            });
        }
    }
});