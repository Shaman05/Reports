/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 9/24/12
 * Time: 3:46 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var clientObj = document.compatMode == "BackCompat" ? document.body : document.documentElement;

    module.exports = {
        getClientView : function(){
            return {
                width : clientObj.clientWidth,
                height : clientObj.clientHeight
            };
        }
    }
});