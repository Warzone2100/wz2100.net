$(function(){extraNavFuncs();setUpSpecialNavs();setUpDropdownSubs();$('a[onclick^="scrollToTarget"]').click(function(e){e.preventDefault()});$('.nav-item [data-active-page]').addClass($('.nav-item [data-active-page]').attr('data-active-page'));$('[data-toggle="tooltip"]').tooltip();});$(window).on('load',function()
{animateWhenVisible();$('#page-loading-blocs-notifaction').remove();})
function setUpSpecialNavs()
{$('.navbar-toggler').click(function(e)
{var targetNav=$(this).closest('nav');var targetMenu=targetNav.find('ul.site-navigation');var newMenu=targetMenu.clone();if(targetMenu.parent().is('.fullscreen-nav, .sidebar-nav'))
{e.stopPropagation();targetMenu.parent().addClass('nav-special');if(!$(this).hasClass('selected-nav'))
{$(this).addClass('selected-nav');var navClasses=targetNav.attr('class').replace('navbar','').replace('row','');var menuClasses=targetMenu.parent().attr('class').replace('navbar-collapse','').replace('collapse','');if($('.content-tint').length=-1)
{$('body').append('<div class="content-tint"></div>');}
newMenu.insertBefore('.page-container').wrap('<div class="blocsapp-special-menu '+navClasses+'"><blocsnav class="'+menuClasses+'">');$('blocsnav').prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>');animateNavItems();setTimeout(function(){$('.blocsapp-special-menu blocsnav').addClass('open');$('.content-tint').addClass('on');$('body').addClass('lock-scroll');},10);}
else
{$('.blocsapp-special-menu blocsnav').removeClass('open');$('.selected-nav').removeClass('selected-nav');setTimeout(function(){$('.blocsapp-special-menu').remove();$('body').removeClass('lock-scroll');$('.nav-special').removeClass('nav-special');},300);}}});$('body').on("mousedown touchstart",".content-tint, .close-special-menu",function(e)
{$('.content-tint').removeClass('on');$('.selected-nav').click();setTimeout(function(){$('.content-tint').remove();},10);}).on("click",".blocsapp-special-menu a",function(e)
{if(!$(e.target).closest('.dropdown-toggle').length)
{$('.close-special-menu').mousedown();}});function animateNavItems()
{var animationStyle='fadeInRight';var delay=0;var increaseVal=60;if($('.blocsapp-special-menu blocsnav').hasClass('fullscreen-nav'))
{animationStyle='fadeIn';increaseVal=100;}
else if($('.blocsapp-special-menu').hasClass('nav-invert'))
{animationStyle='fadeInLeft';}
$('.blocsapp-special-menu blocsnav li').each(function()
{if($(this).parent().hasClass('dropdown-menu'))
{$(this).addClass('animated fadeIn');}
else
{delay+=increaseVal;$(this).attr('style','animation-delay:'+delay+'ms').addClass('animated '+animationStyle);}});}}
function extraNavFuncs()
{$(".site-navigation a").click(function(e)
{if(!$(e.target).closest('.dropdown-toggle').length)
{$(".navbar-collapse").collapse('hide');}});$("a.dropdown-toggle").click(function(e)
{$(this).parent().addClass('target-open-menu');$(this).closest('.dropdown-menu').find('.dropdown.open').each(function(i)
{if(!$(this).hasClass('target-open-menu'))
{$(this).removeClass('open');}});$('.target-open-menu').removeClass('target-open-menu');});$('.dropdown-menu a.dropdown-toggle').on('click',function(e)
{return openSubDropdown($(this));});$('body').on("click",".dropdown-menu a.dropdown-toggle",function(e)
{return openSubDropdown($(this));});function openSubDropdown(target)
{var $el=target;var $parent=target.offsetParent(".dropdown-menu");if(!target.next().hasClass('show')){target.parents('.dropdown-menu').first().find('.show').removeClass("show");}
var $subMenu=target.next(".dropdown-menu");$subMenu.toggleClass('show');target.parent("li").toggleClass('show');target.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown',function(e){$('.dropdown-menu .show').removeClass("show");});if(!$parent.parent().hasClass('navbar-nav'))
{if(!target.closest('.nav-special').length)
{$el.next().css({"top":$el[0].offsetTop,"left":$parent.outerWidth()-4});}}
return false;}}
function scrollToTarget(D,T)
{var speed='slow';if(D==0)
{D=$(T).closest('.bloc').height();}
else if(D==1)
{D=0;}
else if(D==2)
{D=$(document).height();}
else
{D=$(D).offset().top;if($('.sticky-nav').length)
{D-=$('.sticky-nav').outerHeight();}}
if($(T).is("[data-scroll-speed]"))
{speed=$(T).attr('data-scroll-speed');if(parseInt(speed))
{speed=parseInt(speed);}}
$('html,body').animate({scrollTop:D},speed);$(".navbar-collapse").collapse('hide');}
function animateWhenVisible()
{hideAll();inViewCheck();$(window).scroll(function()
{inViewCheck();scrollToTopView();stickyNavToggle();});};function setUpDropdownSubs()
{$('ul.dropdown-menu [data-toggle=dropdown]').on('click',function(event)
{event.preventDefault();event.stopPropagation();$(this).parent().siblings().removeClass('open');$(this).parent().toggleClass('open');var targetMenu=$(this).parent().children('.dropdown-menu');var leftVal=targetMenu.offset().left+targetMenu.width();if(leftVal>$(window).width())
{targetMenu.addClass('dropmenu-flow-right');}});}
function stickyNavToggle()
{var offsetVal=0;var classes="sticky";var targetContainer=$('.page-container');var isFillScreenSticky=$('.sticky-nav').hasClass('fill-bloc-top-edge');if(isFillScreenSticky)
{console.log('fill screen');targetContainer=$('.fill-bloc-top-edge.sticky-nav').parent();offsetVal=$('.sticky-nav').height();classes="sticky animated fadeInDown";}
if($(window).scrollTop()>offsetVal)
{if(!$('.sticky-nav').hasClass('sticky'))
{$('.sticky-nav').addClass(classes);offsetVal=$('.sticky-nav').height();if(isFillScreenSticky)
{var bgColor=targetContainer.css('background-color');if(bgColor=="rgba(0, 0, 0, 0)")bgColor='#FFFFFF';$('.sticky-nav').css('background',bgColor);offsetVal+=parseInt(targetContainer.css('padding-top'));}
targetContainer.css('padding-top',offsetVal);}}
else if($('.sticky-nav').hasClass('sticky'))
{$('.sticky-nav').removeClass(classes).removeAttr('style');targetContainer.removeAttr('style');}}
function hideAll()
{$('.animated').each(function(i)
{if(!$(this).closest('.hero').length)
{$(this).removeClass('animated').addClass('hideMe');}});}
function inViewCheck()
{$($(".hideMe").get().reverse()).each(function(i)
{var target=jQuery(this);var a=target.offset().top+target.height();var b=$(window).scrollTop()+$(window).height();if(target.height()>$(window).height())
{a=target.offset().top;}
if(a<b)
{var objectClass=target.attr('class').replace('hideMe','animated');target.css('visibility','hidden').removeAttr('class');setTimeout(function(){target.attr('class',objectClass).css('visibility','visible');},0.01);target.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd",function(event){$(this).removeClass($(this).attr('data-appear-anim-style'))});}});};function scrollToTopView()
{if($(window).scrollTop()>$(window).height()/3)
{if(!$('.scrollToTop').hasClass('showScrollTop'))
{$('.scrollToTop').addClass('showScrollTop');}}
else
{$('.scrollToTop').removeClass('showScrollTop');}};;/*!
* clipboard.js v2.0.6
* https://clipboardjs.com/
*
* Licensed MIT © Zeno Rocha
*/(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')
module.exports=factory();else if(typeof define==='function'&&define.amd)
define([],factory);else if(typeof exports==='object')
exports["ClipboardJS"]=factory();else
root["ClipboardJS"]=factory();})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=6);})
([(function(module,exports){function select(element){var selectedText;if(element.nodeName==='SELECT'){element.focus();selectedText=element.value;}
else if(element.nodeName==='INPUT'||element.nodeName==='TEXTAREA'){var isReadOnly=element.hasAttribute('readonly');if(!isReadOnly){element.setAttribute('readonly','');}
element.select();element.setSelectionRange(0,element.value.length);if(!isReadOnly){element.removeAttribute('readonly');}
selectedText=element.value;}
else{if(element.hasAttribute('contenteditable')){element.focus();}
var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);selectedText=selection.toString();}
return selectedText;}
module.exports=select;}),(function(module,exports){function E(){}
E.prototype={on:function(name,callback,ctx){var e=this.e||(this.e={});(e[name]||(e[name]=[])).push({fn:callback,ctx:ctx});return this;},once:function(name,callback,ctx){var self=this;function listener(){self.off(name,listener);callback.apply(ctx,arguments);};listener._=callback
return this.on(name,listener,ctx);},emit:function(name){var data=[].slice.call(arguments,1);var evtArr=((this.e||(this.e={}))[name]||[]).slice();var i=0;var len=evtArr.length;for(i;i<len;i++){evtArr[i].fn.apply(evtArr[i].ctx,data);}
return this;},off:function(name,callback){var e=this.e||(this.e={});var evts=e[name];var liveEvents=[];if(evts&&callback){for(var i=0,len=evts.length;i<len;i++){if(evts[i].fn!==callback&&evts[i].fn._!==callback)
liveEvents.push(evts[i]);}}
(liveEvents.length)?e[name]=liveEvents:delete e[name];return this;}};module.exports=E;module.exports.TinyEmitter=E;}),(function(module,exports,__webpack_require__){var is=__webpack_require__(3);var delegate=__webpack_require__(4);function listen(target,type,callback){if(!target&&!type&&!callback){throw new Error('Missing required arguments');}
if(!is.string(type)){throw new TypeError('Second argument must be a String');}
if(!is.fn(callback)){throw new TypeError('Third argument must be a Function');}
if(is.node(target)){return listenNode(target,type,callback);}
else if(is.nodeList(target)){return listenNodeList(target,type,callback);}
else if(is.string(target)){return listenSelector(target,type,callback);}
else{throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');}}
function listenNode(node,type,callback){node.addEventListener(type,callback);return{destroy:function(){node.removeEventListener(type,callback);}}}
function listenNodeList(nodeList,type,callback){Array.prototype.forEach.call(nodeList,function(node){node.addEventListener(type,callback);});return{destroy:function(){Array.prototype.forEach.call(nodeList,function(node){node.removeEventListener(type,callback);});}}}
function listenSelector(selector,type,callback){return delegate(document.body,selector,type,callback);}
module.exports=listen;}),(function(module,exports){exports.node=function(value){return value!==undefined&&value instanceof HTMLElement&&value.nodeType===1;};exports.nodeList=function(value){var type=Object.prototype.toString.call(value);return value!==undefined&&(type==='[object NodeList]'||type==='[object HTMLCollection]')&&('length'in value)&&(value.length===0||exports.node(value[0]));};exports.string=function(value){return typeof value==='string'||value instanceof String;};exports.fn=function(value){var type=Object.prototype.toString.call(value);return type==='[object Function]';};}),(function(module,exports,__webpack_require__){var closest=__webpack_require__(5);function _delegate(element,selector,type,callback,useCapture){var listenerFn=listener.apply(this,arguments);element.addEventListener(type,listenerFn,useCapture);return{destroy:function(){element.removeEventListener(type,listenerFn,useCapture);}}}
function delegate(elements,selector,type,callback,useCapture){if(typeof elements.addEventListener==='function'){return _delegate.apply(null,arguments);}
if(typeof type==='function'){return _delegate.bind(null,document).apply(null,arguments);}
if(typeof elements==='string'){elements=document.querySelectorAll(elements);}
return Array.prototype.map.call(elements,function(element){return _delegate(element,selector,type,callback,useCapture);});}
function listener(element,selector,type,callback){return function(e){e.delegateTarget=closest(e.target,selector);if(e.delegateTarget){callback.call(element,e);}}}
module.exports=delegate;}),(function(module,exports){var DOCUMENT_NODE_TYPE=9;if(typeof Element!=='undefined'&&!Element.prototype.matches){var proto=Element.prototype;proto.matches=proto.matchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector||proto.webkitMatchesSelector;}
function closest(element,selector){while(element&&element.nodeType!==DOCUMENT_NODE_TYPE){if(typeof element.matches==='function'&&element.matches(selector)){return element;}
element=element.parentNode;}}
module.exports=closest;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var src_select=__webpack_require__(0);var select_default=__webpack_require__.n(src_select);var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var clipboard_action_ClipboardAction=function(){function ClipboardAction(options){_classCallCheck(this,ClipboardAction);this.resolveOptions(options);this.initSelection();}
_createClass(ClipboardAction,[{key:'resolveOptions',value:function resolveOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=options.action;this.container=options.container;this.emitter=options.emitter;this.target=options.target;this.text=options.text;this.trigger=options.trigger;this.selectedText='';}},{key:'initSelection',value:function initSelection(){if(this.text){this.selectFake();}else if(this.target){this.selectTarget();}}},{key:'selectFake',value:function selectFake(){var _this=this;var isRTL=document.documentElement.getAttribute('dir')=='rtl';this.removeFake();this.fakeHandlerCallback=function(){return _this.removeFake();};this.fakeHandler=this.container.addEventListener('click',this.fakeHandlerCallback)||true;this.fakeElem=document.createElement('textarea');this.fakeElem.style.fontSize='12pt';this.fakeElem.style.border='0';this.fakeElem.style.padding='0';this.fakeElem.style.margin='0';this.fakeElem.style.position='absolute';this.fakeElem.style[isRTL?'right':'left']='-9999px';var yPosition=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=yPosition+'px';this.fakeElem.setAttribute('readonly','');this.fakeElem.value=this.text;this.container.appendChild(this.fakeElem);this.selectedText=select_default()(this.fakeElem);this.copyText();}},{key:'removeFake',value:function removeFake(){if(this.fakeHandler){this.container.removeEventListener('click',this.fakeHandlerCallback);this.fakeHandler=null;this.fakeHandlerCallback=null;}
if(this.fakeElem){this.container.removeChild(this.fakeElem);this.fakeElem=null;}}},{key:'selectTarget',value:function selectTarget(){this.selectedText=select_default()(this.target);this.copyText();}},{key:'copyText',value:function copyText(){var succeeded=void 0;try{succeeded=document.execCommand(this.action);}catch(err){succeeded=false;}
this.handleResult(succeeded);}},{key:'handleResult',value:function handleResult(succeeded){this.emitter.emit(succeeded?'success':'error',{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)});}},{key:'clearSelection',value:function clearSelection(){if(this.trigger){this.trigger.focus();}
document.activeElement.blur();window.getSelection().removeAllRanges();}},{key:'destroy',value:function destroy(){this.removeFake();}},{key:'action',set:function set(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'copy';this._action=action;if(this._action!=='copy'&&this._action!=='cut'){throw new Error('Invalid "action" value, use either "copy" or "cut"');}},get:function get(){return this._action;}},{key:'target',set:function set(target){if(target!==undefined){if(target&&(typeof target==='undefined'?'undefined':_typeof(target))==='object'&&target.nodeType===1){if(this.action==='copy'&&target.hasAttribute('disabled')){throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');}
if(this.action==='cut'&&(target.hasAttribute('readonly')||target.hasAttribute('disabled'))){throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');}
this._target=target;}else{throw new Error('Invalid "target" value, use a valid Element');}}},get:function get(){return this._target;}}]);return ClipboardAction;}();var clipboard_action=(clipboard_action_ClipboardAction);var tiny_emitter=__webpack_require__(1);var tiny_emitter_default=__webpack_require__.n(tiny_emitter);var listen=__webpack_require__(2);var listen_default=__webpack_require__.n(listen);var clipboard_typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var clipboard_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function clipboard_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var clipboard_Clipboard=function(_Emitter){_inherits(Clipboard,_Emitter);function Clipboard(trigger,options){clipboard_classCallCheck(this,Clipboard);var _this=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));_this.resolveOptions(options);_this.listenClick(trigger);return _this;}
clipboard_createClass(Clipboard,[{key:'resolveOptions',value:function resolveOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=typeof options.action==='function'?options.action:this.defaultAction;this.target=typeof options.target==='function'?options.target:this.defaultTarget;this.text=typeof options.text==='function'?options.text:this.defaultText;this.container=clipboard_typeof(options.container)==='object'?options.container:document.body;}},{key:'listenClick',value:function listenClick(trigger){var _this2=this;this.listener=listen_default()(trigger,'click',function(e){return _this2.onClick(e);});}},{key:'onClick',value:function onClick(e){var trigger=e.delegateTarget||e.currentTarget;if(this.clipboardAction){this.clipboardAction=null;}
this.clipboardAction=new clipboard_action({action:this.action(trigger),target:this.target(trigger),text:this.text(trigger),container:this.container,trigger:trigger,emitter:this});}},{key:'defaultAction',value:function defaultAction(trigger){return getAttributeValue('action',trigger);}},{key:'defaultTarget',value:function defaultTarget(trigger){var selector=getAttributeValue('target',trigger);if(selector){return document.querySelector(selector);}}},{key:'defaultText',value:function defaultText(trigger){return getAttributeValue('text',trigger);}},{key:'destroy',value:function destroy(){this.listener.destroy();if(this.clipboardAction){this.clipboardAction.destroy();this.clipboardAction=null;}}}],[{key:'isSupported',value:function isSupported(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:['copy','cut'];var actions=typeof action==='string'?[action]:action;var support=!!document.queryCommandSupported;actions.forEach(function(action){support=support&&!!document.queryCommandSupported(action);});return support;}}]);return Clipboard;}(tiny_emitter_default.a);function getAttributeValue(suffix,element){var attribute='data-clipboard-'+suffix;if(!element.hasAttribute(attribute)){return;}
return element.getAttribute(attribute);}
var clipboard=__webpack_exports__["default"]=(clipboard_Clipboard);})])["default"];});;$(window).on('load',function(){scrollFX()});$(window).scroll(function(){scrollFX();});var lastScrollTop=0;function scrollFX()
{var docHeight=$(document).height();var windowHeight=$(window).height();if(docHeight!=windowHeight)
{var currentScrollTop=window.pageYOffset||document.documentElement.scrollTop;var scrollUp=(lastScrollTop>currentScrollTop);lastScrollTop=currentScrollTop<=0?0:currentScrollTop;$('[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"], [class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"], [class*="scroll-fx-zoom-"]').each(function(i)
{var targetObj=$(this);var windowH=$(window).height();var windowMax=$(window).scrollTop()+(windowH*3);if(targetObj.offset().top<windowMax)
{if(!targetObj.hasClass('scroll-fx-in-range')&&targetObj.is('[class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"]'))
{targetObj.addClass('scroll-fx-in-range');}
var centerPoint=(windowH/1.5)-(targetObj.outerHeight()/2);var exitPoint=(windowH/1.5)-targetObj.outerHeight();var scrollVal=$(window).scrollTop()-targetObj.offset().top+(targetObj.outerHeight()/100)+centerPoint;var scrollZoomIn=window.scrollY/(targetObj.offset().top-centerPoint);var scrollZoomOut=(targetObj.offset().top-centerPoint)/window.scrollY;var offSetVal=(scrollVal/10);var leftVal=offSetVal+"%";var rightVal=-offSetVal+"%";var opacity=1+(scrollVal/250);var FXState='in';if(offSetVal>0||!targetObj.is('[class*="-in"]'))
{leftVal=0;rightVal=0;if(offSetVal>0)
{scrollZoomIn=1;scrollZoomOut=1;}
if(targetObj.is('[class*="-in-fade"],[class*="-out-fade"]')){targetObj.css({'opacity':'1.0'});}}
if(offSetVal>30)
{if(targetObj.is('[class*="-out"]'))
{FXState='out';leftVal=-Math.abs(offSetVal-30)+"%";rightVal=Math.abs(offSetVal-30)+"%";opacity=(1-(scrollVal/250)+0.8);}}
var transform="";if(targetObj.is('[class*="scroll-fx-left-'+FXState+'"]'))
{transform="translate3d("+leftVal+",0,0)";}
if(targetObj.is('[class*="scroll-fx-right-'+FXState+'"]'))
{transform="translate3d("+rightVal+",0,0)";}
else if(targetObj.is('[class*="scroll-fx-up-'+FXState+'"]'))
{transform="translate3d(0,"+rightVal+",0)";}
else if(targetObj.is('[class*="scroll-fx-down-'+FXState+'"]'))
{transform="translate3d(0,"+leftVal+",0)";}
if(targetObj.is('[class*="scroll-fx-zoom-push"], [class*="scroll-fx-zoom-pull"]'))
{var scrollZoomVal=scrollZoomIn;if(targetObj.is('[class*="scroll-fx-zoom-push"]'))
{scrollZoomVal=scrollZoomOut
if(scrollZoomVal>2)
{scrollZoomVal=2;}
else
{var lastScaleVal=targetObj.attr('scroll-fx-last-scale');if(scrollUp)
{if(lastScaleVal>scrollZoomVal)
{scrollZoomVal=lastScaleVal;}}
else if(scrollZoomVal>lastScaleVal)
{scrollZoomVal=lastScaleVal;}}
targetObj.attr('scroll-fx-last-scale',scrollZoomVal);}
if(!targetObj.is('[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"]'))
{transform="scale("+scrollZoomVal+")";}
else
{transform+="scale("+scrollZoomVal+")";}}
if(!targetObj.hasClass('scroll-fx-'+FXState+'-fade')||targetObj.is('[class*="scroll-fx-zoom-"]')){targetObj.css({"-webkit-transform":transform});}
if(targetObj.is('[class*="-'+FXState+'-fade"]')){targetObj.css({'opacity':opacity});}}});}};/*! modernizr 3.6.0 (Custom Build) | MIT *
* https://modernizr.com/download/?-webp-setclasses !*/!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);