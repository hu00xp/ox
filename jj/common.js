function classReg(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function toggleClass(t,c){var o=hasClass(t,c)?removeClass:addClass;o(t,c)}$(function(){var t=$("#js-header-search-go"),o=$("#js-header-search-text"),p=$("#js-header-search-ipt"),h=o.attr("data-show")||"header-search-text-show";p.val(""),t.on("click",function(t){$(this),""===p.val().trim()&&(o.toggleClass(h),t.preventDefault())});var m=$(".student-fix-header");if(m.length>0){var v=function(){$(window).scrollTop()>300?($(".header-wrap").hide(),$(".student-fix-header").show()):($(".header-wrap").show(),$(".student-fix-header").hide())};$(window).scroll(function(){v()}),v()}}),define("tool/slideModal",function(require,t){"use strict";function o(t){var o=this;this.options=$.extend(m,t),this.$modal=$(etpl.compile('<div class="slide-dark-bg"></div>\r\n<div class="slide-modal ${modalClass}">\r\n    <span class="slide-modal-close icon-godown"></span>\r\n    <div class="slide-modal-body">\r\n    	<div class="slide-modal-body-inner">${content | raw}</div>\r\n    </div>\r\n</div>\r\n\r\n')(this.options)),this.$modalBody=this.$modal.find(".slide-modal-body"),p.append(this.$modal),"function"==typeof t.afterOpen&&t.afterOpen(this.$modal),this.$modal.on("click",".slide-modal-close",function(){o.$modal.destory(),$("html").css({overflow:"auto"})}),this.destory=function(){"function"==typeof this.options.beforeClose&&o.options.beforeClose(this.$modal),o.$modal.off().removeData().remove()},this.$modal.destory=function(){o.$modal.animate({top:o.options.top+o.$modal.height()},function(){o.destory()})};var h=$(document).height();this.$modal.css("top",h).show(),this.baseHeight=h-this.options.top,this.$modalBody.css({"overflow-y":"scroll",height:$(window).height()-200}),$("html").css("overflow","hidden"),this.$modal.animate({top:"50"},function(){o.modalAdapt()}),this.modalAdapt=function(){var t=this.$modalBody.height()+100;t>this.baseHeight&&o.$modal.css("height",t),$(".slide-dark-bg").click(function(){$(".slide-modal-close").trigger("click")})}}var p=$("body"),h=null;t.modal=function(t){return"object"!=typeof t||"string"!=typeof t.content?!1:(h&&h.destory(),void(h=new o(t)))};var m={content:"",top:50}});var hasClass,addClass,removeClass;"classList"in document.documentElement?(hasClass=function(t,c){return t.classList.contains(c)},addClass=function(t,c){t.classList.add(c)},removeClass=function(t,c){t.classList.remove(c)}):(hasClass=function(t,c){return classReg(c).test(t.className)},addClass=function(t,c){hasClass(t,c)||(t.className=t.className+" "+c)},removeClass=function(t,c){t.className=t.className.replace(classReg(c)," ")});var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};window.classie=classie,window.Modernizr=function(a,t,c){function o(a){$.cssText=a}function p(a,t){return typeof a===t}function h(a,t){return!!~(""+a).indexOf(t)}function m(a,t){for(var d in a){var e=a[d];if(!h(e,"-")&&$[e]!==c)return"pfx"==t?e:!0}return!1}function v(a,t,d){for(var e in a){var f=t[a[e]];if(f!==c)return d===!1?a[e]:p(f,"function")?f.bind(d||t):f}return!1}function g(a,t,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return p(t,"string")||p(t,"undefined")?m(e,t):(e=(a+" "+x.join(d+" ")+d).split(" "),v(e,t,c))}var y,u,w,d="2.8.3",e={},f=!0,C=t.documentElement,b="modernizr",i=t.createElement(b),$=i.style,E=({}.toString,"Webkit Moz O ms"),n=E.split(" "),x=E.toLowerCase().split(" "),j={},s=[],N=s.slice,S={}.hasOwnProperty;w=p(S,"undefined")||p(S.call,"undefined")?function(a,t){return t in a&&p(a.constructor.prototype[t],"undefined")}:function(a,t){return S.call(a,t)},Function.prototype.bind||(Function.prototype.bind=function(t){var c=this;if("function"!=typeof c)throw new TypeError;var d=N.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,o=c.apply(f,d.concat(N.call(arguments)));return Object(o)===o?o:f}return c.apply(t,d.concat(N.call(arguments)))};return e}),j.cssanimations=function(){return g("animationName")};for(var k in j)w(j,k)&&(u=k.toLowerCase(),e[u]=j[k](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,t){if("object"==typeof a)for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(C.className+=" "+(t?"":"no-")+a),e[a]=t}return e},o(""),i=y=null,function(a,t){function l(a,t){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+t+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function o(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function n(a){var t=y[a[g]];return t||(t={},i++,a[g]=i,y[i]=t),t}function p(a,c,d){if(c||(c=t),v)return c.createElement(a);d||(d=n(c));var o;return o=d.cache[a]?d.cache[a].cloneNode():f.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!o.canHaveChildren||e.test(a)||o.tagUrn?o:d.frag.appendChild(o)}function h(a,c){if(a||(a=t),v)return a.createDocumentFragment();c=c||n(a);for(var d=c.frag.cloneNode(),e=0,f=o(),p=f.length;p>e;e++)d.createElement(f[e]);return d}function q(a,t){t.cache||(t.cache={},t.createElem=a.createElement,t.createFrag=a.createDocumentFragment,t.frag=t.createFrag()),a.createElement=function(c){return s.shivMethods?p(c,a,t):t.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(a){return t.createElem(a),t.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,t.frag)}function r(a){a||(a=t);var c=n(a);return s.shivCSS&&!m&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||q(a,c),a}var m,v,c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",i=0,y={};!function(){try{var a=t.createElement("a");a.innerHTML="<xyz></xyz>",m="hidden"in a,v=1==a.childNodes.length||function(){t.createElement("a");var a=t.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){m=!0,v=!0}}();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:v,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:p,createDocumentFragment:h};a.html5=s,r(t)}(this,t),e._version=d,e._domPrefixes=x,e._cssomPrefixes=n,e.testProp=function(a){return m([a])},e.testAllProps=g,e.prefixed=function(a,t,c){return t?g(a,t,c):g(a,"pfx")},C.className=C.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,t,c){function d(a){return"[object Function]"==w.call(a)}function e(a){return"string"==typeof a}function f(){}function o(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function p(){var a=C.shift();q=1,a?a.t?y(function(){("c"==a.t?g.injectCss:g.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),p()):q=0}function i(a,c,d,e,f,i,h){function m(t){if(!v&&o(l.readyState)&&(u.r=v=1,!q&&p(),l.onload=l.onreadystatechange=null,t)){"img"!=a&&y(function(){b.removeChild(l)},50);for(var d in j[c])j[c].hasOwnProperty(d)&&j[c][d].onload()}}var h=h||g.errorTimeout,l=t.createElement(a),v=0,r=0,u={t:d,s:c,e:f,a:i,x:h};1===j[c]&&(r=1,j[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){m.call(this,r)},C.splice(e,0,u),"img"!=a&&(r||2===j[c]?(b.insertBefore(l,s?null:n),y(m,h)):j[c].push(l))}function h(a,t,c,d,f){return q=0,t=t||"j",e(a)?i("c"==t?$:u,a,t,this.i++,c,d,f):(C.splice(this.i++,0,a),1==C.length&&p()),this}function m(){var a=g;return a.loader={load:h,i:0},a}var v,g,l=t.documentElement,y=a.setTimeout,n=t.getElementsByTagName("script")[0],w={}.toString,C=[],q=0,r="MozAppearance"in l.style,s=r&&!!t.createRange().compareNode,b=s?l:n.parentNode,l=a.opera&&"[object Opera]"==w.call(a.opera),l=!!t.attachEvent&&!l,u=r?"object":l?"script":"img",$=l?"script":u,E=Array.isArray||function(a){return"[object Array]"==w.call(a)},x=[],j={},N={timeout:function(a,t){return t.length&&(a.timeout=t[0]),a}};g=function(a){function t(a){var e,f,t,a=a.split("!"),o=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;d>f;f++)t=a[f].split("="),(e=N[t.shift()])&&(c=e(c,t));for(f=0;o>f;f++)c=x[f](c);return c}function o(a,e,f,o,p){var i=t(a),h=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[o]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,o,p):(j[i.url]?i.noexec=!0:j[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(h))&&f.load(function(){m(),e&&e(i.origUrl,p,o),h&&h(i.origUrl,p,o),j[i.url]=2})))}function p(a,t){function c(a,c){if(a){if(e(a))c||(m=function(){var a=[].slice.call(arguments);v.apply(this,a),l()}),o(a,m,t,0,h);else if(Object(a)===a)for(n in p=function(){var c,t=0;for(c in a)a.hasOwnProperty(c)&&t++;return t}(),a)a.hasOwnProperty(n)&&(!c&&!--p&&(d(m)?m=function(){var a=[].slice.call(arguments);v.apply(this,a),l()}:m[n]=function(a){return function(){var t=[].slice.call(arguments);a&&a.apply(this,t),l()}}(v[n])),o(a[n],m,t,n,h))}else!c&&l()}var p,n,h=!!a.test,i=a.load||a.both,m=a.callback||f,v=m,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,h,l=this.yepnope.loader;if(e(a))o(a,0,l,0);else if(E(a))for(i=0;i<a.length;i++)h=a[i],e(h)?o(h,0,l,0):E(h)?g(h):Object(h)===h&&p(h,l);else Object(a)===a&&p(a,l)},g.addPrefix=function(a,t){N[a]=t},g.addFilter=function(a){x.push(a)},g.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",v=function(){t.removeEventListener("DOMContentLoaded",v,0),t.readyState="complete"},0)),a.yepnope=m(),a.yepnope.executeStack=p,a.yepnope.injectJs=function(a,c,d,e,i,h){var l,m,v=t.createElement("script"),e=e||g.errorTimeout;v.src=a;for(m in d)v.setAttribute(m,d[m]);c=h?p:c||f,v.onreadystatechange=v.onload=function(){!l&&o(v.readyState)&&(l=1,c(),v.onload=v.onreadystatechange=null)},y(function(){l||(l=1,c(1))},e),i?v.onload():n.parentNode.insertBefore(v,n)},a.yepnope.injectCss=function(a,c,d,e,o,i){var h,e=t.createElement("link"),c=i?p:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(h in d)e.setAttribute(h,d[h]);o||(n.parentNode.insertBefore(e,n),y(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},!function(t){"use strict";function o(a,t){for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o]);return a}function p(t){this.options=o({},this.options),o(this.options,t),this._init()}var h=(t.document.documentElement,{animations:Modernizr.cssanimations}),m={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},v=m[Modernizr.prefixed("animation")];p.prototype.options={wrapper:document.body,message:"yo!",layout:"growl",effect:"slide",type:"error",ttl:6e3,onClose:function(){return!1},onOpen:function(){return!1}},p.prototype._init=function(){this.ntf=document.createElement("div"),this.ntf.className="ns-box ns-"+this.options.layout+" ns-effect-"+this.options.effect+" ns-type-"+this.options.type;var t='<div class="ns-box-inner">';t+=this.options.message,t+="</div>",t+='<span class="ns-close"></span></div>',this.ntf.innerHTML=t,this.options.wrapper.insertBefore(this.ntf,this.options.wrapper.firstChild);var o=this;this.dismissttl=setTimeout(function(){o.active&&o.dismiss()},this.options.ttl),this._initEvents()},p.prototype._initEvents=function(){var t=this;this.ntf.querySelector(".ns-close").addEventListener("click",function(){t.dismiss()})},p.prototype.show=function(){this.active=!0,classie.remove(this.ntf,"ns-hide"),classie.add(this.ntf,"ns-show"),this.options.onOpen()},p.prototype.dismiss=function(){var t=this;this.active=!1,clearTimeout(this.dismissttl),classie.remove(this.ntf,"ns-show"),setTimeout(function(){classie.add(t.ntf,"ns-hide"),t.options.onClose()},25);var o=function(p){if(h.animations){if(p.target!==t.ntf)return!1;this.removeEventListener(v,o)}t.options.wrapper.removeChild(this)};h.animations?this.ntf.addEventListener(v,o):o()},t.NotificationFx=p}(window),window.salert=function(t,o){var o=o||function(){},p=new NotificationFx({message:t,layout:"growl",effect:"scale",type:"error",onClose:function(){o()}});p.show()};
/*****/
function tips_show(action,tips)
{
	var t_success="<div class='tips_success'><div class='tips_info'></div></div>";
	var t_zan="<div class='tips_zan'><div class='tips_info'></div></div>";
	
	var left=$(window).width()/2-130;
	var top1=$(window).height()/2-80;
	
	switch(action)
	{
		case 'success':
			var o=$(t_success);
			o.find('.tips_info').html(tips);
			o.css({"top":top1,"left":left}).show(100);
			$("body").append(o);
			setTimeout("hide_tips()",500);
		break;
		case 'zan':
			var o=$(t_zan);
			o.find('.tips_info').html(tips);
			o.css({"top":top1,"left":left}).show(100);
			$("body").append(o);
			setTimeout("hide_tips()",500);
		break;
             default:break;
	}
}
function hide_tips()
{
	$(".tips_success,.tips_zan").hide(700);
}
function btn_cancle_publish(el){
	$(el).parents(".del_box_wrap").hide();
}

// app download hover 
$('.app_download').hover(function() {
	$('.client-layer').css('display', 'block');
}, function() {
	$('.client-layer').css('display', 'none');
});
$('.client-layer').hover(function() {
	$('.client-layer').css('display', 'block');
}, function() {
	$('.client-layer').css('display', 'none');
});
//头像连接后加时间戳
(function (){
	var timenow = new Date().getTime();
	var str = document.getElementById('head-pho').src;
	document.getElementById('head-pho').src=str+"?d="+timenow;
})()
/*课后作业 添加作业*/
/*问号 随机选项提示*/
$(document).on("mouseover",".x-ml-30-mend",function(){
	$(this).siblings(".x-ml-30-mend-layer").show();
}).on("mouseout",".x-ml-30-mend",function(){
	$(this).siblings(".x-ml-30-mend-layer").hide();
});


