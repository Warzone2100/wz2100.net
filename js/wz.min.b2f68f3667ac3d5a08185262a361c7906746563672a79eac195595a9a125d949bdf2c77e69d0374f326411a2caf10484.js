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
{$('.scrollToTop').removeClass('showScrollTop');}};;$(window).on('load',function(){scrollFX()});$(window).scroll(function(){scrollFX();});var lastScrollTop=0;function scrollFX()
{var docHeight=$(document).height();var windowHeight=$(window).height();if(docHeight!=windowHeight)
{var currentScrollTop=window.pageYOffset||document.documentElement.scrollTop;var scrollUp=(lastScrollTop>currentScrollTop);lastScrollTop=currentScrollTop<=0?0:currentScrollTop;$('[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"], [class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"], [class*="scroll-fx-zoom-"]').each(function(i)
{var targetObj=$(this);var windowH=$(window).height();var windowMax=$(window).scrollTop()+(windowH*3);if(targetObj.offset().top<windowMax)
{if(!targetObj.hasClass('scroll-fx-in-range')&&targetObj.is('[class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"]'))
{targetObj.addClass('scroll-fx-in-range');}
var centerPoint=(windowH/2)-(targetObj.outerHeight()/2);var exitPoint=(windowH/2)-targetObj.outerHeight();var scrollVal=$(window).scrollTop()-targetObj.offset().top+(targetObj.outerHeight()/100)+centerPoint;var scrollZoomIn=window.scrollY/(targetObj.offset().top-centerPoint);var scrollZoomOut=(targetObj.offset().top-centerPoint)/window.scrollY;var offSetVal=(scrollVal/10);var leftVal=offSetVal+"%";var rightVal=-offSetVal+"%";var opacity=1+(scrollVal/250);var FXState='in';if(offSetVal>0||!targetObj.is('[class*="-in"]'))
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