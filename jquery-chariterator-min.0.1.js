/**
 * jQuery charIterator plugin
 * Loops through all characters in a string in a element and optionally applies an animation (or function) to it
 *
 * jQuery 1.7 (jQuery UI 1.8 is needed optionally for animations)
 *
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @website    https://github.com/PeeHaa/charIterator-jQuery-plugin
 * @copyright  Copyright (c) 2012 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    1.0.0
 */
(function(a){a.fn.charIterator=function(d){var g={skipSpaces:true,insertBefore:"",insertAfter:"",animation:function(){},loop:true,timeout:200};var f=a.extend({},g,d);var b=function(h){return h.replace(/^\s+/g,"").replace(/\s+$/g,"")};var e=function(h){a(h).contents().each(function(){if(this.nodeType===1){e(this)}else{if(this.nodeType===3){a(this).replaceWith(a.map(this.nodeValue.split(""),function(i){if(b(i)!=""||!f.skipSpaces){return f.insertBefore+'<span class="charIterator-wrap">'+i+"</span>"+f.insertAfter}return i}).join(""))}}})};var c=function(h){var i=f.timeout;a(".charIterator-wrap",h).each(function(){var j=this;setTimeout(function(){f.animation(j)},i);i+=f.timeout});if(f.loop===true||(f.loop!==false&&f.loop>1)){if(f.loop!==true){f.loop=f.loop-1}setTimeout(function(){c(h)},i)}};return this.each(function(){e(this);c(this)})}})(jQuery);