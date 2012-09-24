/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 9/24/12
 * Time: 3:46 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var isCompatMode = document.compatMode == "BackCompat" ? true : false;

    module.exports = {
        clientView : {
            width : isCompatMode ? document.body.clientWidth : document.documentElement.clientWidth,
            height : isCompatMode ? document.body.clientHeight : document.documentElement.clientHeight
        }
    }
});