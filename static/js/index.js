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
        footer = $("#footer");

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
                var rh = util.clientView.height - topBar.outerHeight() - footer.outerHeight();
                var setHeigh = rh > 200 ? rh : 200;
                content.css("height", setHeigh);
            }
        },
        event : function(){
            var _this = this;
        }
    }
});