/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 9/24/12
 * Time: 3:19 PM
 * To change this template use File | Settings | File Templates.
 */

seajs.config({
    base : './static/js/',
    alias : {
        'jquery' : 'jquery/jquery-1.7.2.min.js'
    },
    preload : ['jquery'],
    debug : true,
    charset : 'utf-8'
});

seajs.use('index', function(index){
    $(function(){
        index.init();
    })
});