(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";/*!
 * fitColumns layout mode for Isotope
 * v1.1.4
 * https://isotope.metafizzy.co/layout-modes/fitcolumns.html
 */(function(s,r){typeof define=="function"&&define.amd?define(["isotope-layout/js/layout-mode"],r):typeof exports=="object"?module.exports=r(require("isotope-layout/js/layout-mode")):r(s.Isotope.LayoutMode)})(window,function(r){var l=r.create("fitColumns"),h=l.prototype;return h._resetLayout=function(){this.x=0,this.y=0,this.maxX=0},h._getItemLayoutPosition=function(d){d.getSize(),this.y!==0&&d.size.outerHeight+this.y>this.isotope.size.innerHeight&&(this.y=0,this.x=this.maxX);var o={x:this.x,y:this.y};return this.maxX=Math.max(this.maxX,this.x+d.size.outerWidth),this.y+=d.size.outerHeight,o},h._getContainerSize=function(){return{width:this.maxX}},h.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},l});/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */(function(s,r){typeof define=="function"&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(l){return r(s,l)}):typeof module=="object"&&module.exports?module.exports=r(s,require("jquery")):s.jQueryBridget=r(s,s.jQuery)})(window,function(s,r){function l(f,v,g){function p(_,a,i){var t,e="$()."+f+'("'+a+'")';return _.each(function(n,c){var y=g.data(c,f);if(!y)return void u(f+" not initialized. Cannot call methods, i.e. "+e);var I=y[a];if(!I||a.charAt(0)=="_")return void u(e+" is not a valid method");var z=I.apply(y,i);t=t===void 0?z:t}),t!==void 0?t:_}function m(_,a){_.each(function(i,t){var e=g.data(t,f);e?(e.option(a),e._init()):(e=new v(t,a),g.data(t,f,e))})}g=g||r||s.jQuery,g&&(v.prototype.option||(v.prototype.option=function(_){g.isPlainObject(_)&&(this.options=g.extend(!0,this.options,_))}),g.fn[f]=function(_){if(typeof _=="string"){var a=d.call(arguments,1);return p(this,_,a)}return m(this,_),this},h(g))}function h(f){!f||f&&f.bridget||(f.bridget=l)}var d=Array.prototype.slice,o=s.console,u=typeof o>"u"?function(){}:function(f){o.error(f)};return h(r||s.jQuery),l}),function(s,r){typeof define=="function"&&define.amd?define("ev-emitter/ev-emitter",r):typeof module=="object"&&module.exports?module.exports=r():s.EvEmitter=r()}(typeof window<"u"?window:void 0,function(){function s(){}var r=s.prototype;return r.on=function(l,h){if(l&&h){var d=this._events=this._events||{},o=d[l]=d[l]||[];return o.indexOf(h)==-1&&o.push(h),this}},r.once=function(l,h){if(l&&h){this.on(l,h);var d=this._onceEvents=this._onceEvents||{},o=d[l]=d[l]||{};return o[h]=!0,this}},r.off=function(l,h){var d=this._events&&this._events[l];if(d&&d.length){var o=d.indexOf(h);return o!=-1&&d.splice(o,1),this}},r.emitEvent=function(l,h){var d=this._events&&this._events[l];if(d&&d.length){d=d.slice(0),h=h||[];for(var o=this._onceEvents&&this._onceEvents[l],u=0;u<d.length;u++){var f=d[u],v=o&&o[f];v&&(this.off(l,f),delete o[f]),f.apply(this,h)}return this}},r.allOff=function(){delete this._events,delete this._onceEvents},s}),function(s,r){typeof define=="function"&&define.amd?define("get-size/get-size",r):typeof module=="object"&&module.exports?module.exports=r():s.getSize=r()}(window,function(){function s(m){var _=parseFloat(m),a=m.indexOf("%")==-1&&!isNaN(_);return a&&_}function r(){}function l(){for(var m={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},_=0;_<g;_++){var a=v[_];m[a]=0}return m}function h(m){var _=getComputedStyle(m);return _||f("Style returned "+_+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),_}function d(){if(!p){p=!0;var m=document.createElement("div");m.style.width="200px",m.style.padding="1px 2px 3px 4px",m.style.borderStyle="solid",m.style.borderWidth="1px 2px 3px 4px",m.style.boxSizing="border-box";var _=document.body||document.documentElement;_.appendChild(m);var a=h(m);u=Math.round(s(a.width))==200,o.isBoxSizeOuter=u,_.removeChild(m)}}function o(m){if(d(),typeof m=="string"&&(m=document.querySelector(m)),m&&typeof m=="object"&&m.nodeType){var _=h(m);if(_.display=="none")return l();var a={};a.width=m.offsetWidth,a.height=m.offsetHeight;for(var i=a.isBorderBox=_.boxSizing=="border-box",t=0;t<g;t++){var e=v[t],n=_[e],c=parseFloat(n);a[e]=isNaN(c)?0:c}var y=a.paddingLeft+a.paddingRight,I=a.paddingTop+a.paddingBottom,z=a.marginLeft+a.marginRight,x=a.marginTop+a.marginBottom,S=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,L=i&&u,T=s(_.width);T!==!1&&(a.width=T+(L?0:y+S));var C=s(_.height);return C!==!1&&(a.height=C+(L?0:I+E)),a.innerWidth=a.width-(y+S),a.innerHeight=a.height-(I+E),a.outerWidth=a.width+z,a.outerHeight=a.height+x,a}}var u,f=typeof console>"u"?r:function(m){console.error(m)},v=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],g=v.length,p=!1;return o}),function(s,r){typeof define=="function"&&define.amd?define("desandro-matches-selector/matches-selector",r):typeof module=="object"&&module.exports?module.exports=r():s.matchesSelector=r()}(window,function(){var s=function(){var r=window.Element.prototype;if(r.matches)return"matches";if(r.matchesSelector)return"matchesSelector";for(var l=["webkit","moz","ms","o"],h=0;h<l.length;h++){var d=l[h],o=d+"MatchesSelector";if(r[o])return o}}();return function(r,l){return r[s](l)}}),function(s,r){typeof define=="function"&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(l){return r(s,l)}):typeof module=="object"&&module.exports?module.exports=r(s,require("desandro-matches-selector")):s.fizzyUIUtils=r(s,s.matchesSelector)}(window,function(s,r){var l={};l.extend=function(o,u){for(var f in u)o[f]=u[f];return o},l.modulo=function(o,u){return(o%u+u)%u};var h=Array.prototype.slice;l.makeArray=function(o){if(Array.isArray(o))return o;if(o==null)return[];var u=typeof o=="object"&&typeof o.length=="number";return u?h.call(o):[o]},l.removeFrom=function(o,u){var f=o.indexOf(u);f!=-1&&o.splice(f,1)},l.getParent=function(o,u){for(;o.parentNode&&o!=document.body;)if(o=o.parentNode,r(o,u))return o},l.getQueryElement=function(o){return typeof o=="string"?document.querySelector(o):o},l.handleEvent=function(o){var u="on"+o.type;this[u]&&this[u](o)},l.filterFindElements=function(o,u){o=l.makeArray(o);var f=[];return o.forEach(function(v){if(v instanceof HTMLElement){if(!u)return void f.push(v);r(v,u)&&f.push(v);for(var g=v.querySelectorAll(u),p=0;p<g.length;p++)f.push(g[p])}}),f},l.debounceMethod=function(o,u,f){f=f||100;var v=o.prototype[u],g=u+"Timeout";o.prototype[u]=function(){var p=this[g];clearTimeout(p);var m=arguments,_=this;this[g]=setTimeout(function(){v.apply(_,m),delete _[g]},f)}},l.docReady=function(o){var u=document.readyState;u=="complete"||u=="interactive"?setTimeout(o):document.addEventListener("DOMContentLoaded",o)},l.toDashed=function(o){return o.replace(/(.)([A-Z])/g,function(u,f,v){return f+"-"+v}).toLowerCase()};var d=s.console;return l.htmlInit=function(o,u){l.docReady(function(){var f=l.toDashed(u),v="data-"+f,g=document.querySelectorAll("["+v+"]"),p=document.querySelectorAll(".js-"+f),m=l.makeArray(g).concat(l.makeArray(p)),_=v+"-options",a=s.jQuery;m.forEach(function(i){var t,e=i.getAttribute(v)||i.getAttribute(_);try{t=e&&JSON.parse(e)}catch(c){return void(d&&d.error("Error parsing "+v+" on "+i.className+": "+c))}var n=new o(i,t);a&&a.data(i,u,n)})})},l}),function(s,r){typeof define=="function"&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],r):typeof module=="object"&&module.exports?module.exports=r(require("ev-emitter"),require("get-size")):(s.Outlayer={},s.Outlayer.Item=r(s.EvEmitter,s.getSize))}(window,function(s,r){function l(i){for(var t in i)return!1;return t=null,!0}function h(i,t){i&&(this.element=i,this.layout=t,this.position={x:0,y:0},this._create())}function d(i){return i.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var o=document.documentElement.style,u=typeof o.transition=="string"?"transition":"WebkitTransition",f=typeof o.transform=="string"?"transform":"WebkitTransform",v={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[u],g={transform:f,transition:u,transitionDuration:u+"Duration",transitionProperty:u+"Property",transitionDelay:u+"Delay"},p=h.prototype=Object.create(s.prototype);p.constructor=h,p._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},p.handleEvent=function(i){var t="on"+i.type;this[t]&&this[t](i)},p.getSize=function(){this.size=r(this.element)},p.css=function(i){var t=this.element.style;for(var e in i){var n=g[e]||e;t[n]=i[e]}},p.getPosition=function(){var i=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),e=this.layout._getOption("originTop"),n=i[t?"left":"right"],c=i[e?"top":"bottom"],y=parseFloat(n),I=parseFloat(c),z=this.layout.size;n.indexOf("%")!=-1&&(y=y/100*z.width),c.indexOf("%")!=-1&&(I=I/100*z.height),y=isNaN(y)?0:y,I=isNaN(I)?0:I,y-=t?z.paddingLeft:z.paddingRight,I-=e?z.paddingTop:z.paddingBottom,this.position.x=y,this.position.y=I},p.layoutPosition=function(){var i=this.layout.size,t={},e=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),c=e?"paddingLeft":"paddingRight",y=e?"left":"right",I=e?"right":"left",z=this.position.x+i[c];t[y]=this.getXValue(z),t[I]="";var x=n?"paddingTop":"paddingBottom",S=n?"top":"bottom",E=n?"bottom":"top",L=this.position.y+i[x];t[S]=this.getYValue(L),t[E]="",this.css(t),this.emitEvent("layout",[this])},p.getXValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?i/this.layout.size.width*100+"%":i+"px"},p.getYValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?i/this.layout.size.height*100+"%":i+"px"},p._transitionTo=function(i,t){this.getPosition();var e=this.position.x,n=this.position.y,c=i==this.position.x&&t==this.position.y;if(this.setPosition(i,t),c&&!this.isTransitioning)return void this.layoutPosition();var y=i-e,I=t-n,z={};z.transform=this.getTranslate(y,I),this.transition({to:z,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},p.getTranslate=function(i,t){var e=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return i=e?i:-i,t=n?t:-t,"translate3d("+i+"px, "+t+"px, 0)"},p.goTo=function(i,t){this.setPosition(i,t),this.layoutPosition()},p.moveTo=p._transitionTo,p.setPosition=function(i,t){this.position.x=parseFloat(i),this.position.y=parseFloat(t)},p._nonTransition=function(i){this.css(i.to),i.isCleaning&&this._removeStyles(i.to);for(var t in i.onTransitionEnd)i.onTransitionEnd[t].call(this)},p.transition=function(i){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(i);var t=this._transn;for(var e in i.onTransitionEnd)t.onEnd[e]=i.onTransitionEnd[e];for(e in i.to)t.ingProperties[e]=!0,i.isCleaning&&(t.clean[e]=!0);i.from&&(this.css(i.from),this.element.offsetHeight),this.enableTransition(i.to),this.css(i.to),this.isTransitioning=!0};var m="opacity,"+d(f);p.enableTransition=function(){if(!this.isTransitioning){var i=this.layout.options.transitionDuration;i=typeof i=="number"?i+"ms":i,this.css({transitionProperty:m,transitionDuration:i,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(v,this,!1)}},p.onwebkitTransitionEnd=function(i){this.ontransitionend(i)},p.onotransitionend=function(i){this.ontransitionend(i)};var _={"-webkit-transform":"transform"};p.ontransitionend=function(i){if(i.target===this.element){var t=this._transn,e=_[i.propertyName]||i.propertyName;if(delete t.ingProperties[e],l(t.ingProperties)&&this.disableTransition(),e in t.clean&&(this.element.style[i.propertyName]="",delete t.clean[e]),e in t.onEnd){var n=t.onEnd[e];n.call(this),delete t.onEnd[e]}this.emitEvent("transitionEnd",[this])}},p.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(v,this,!1),this.isTransitioning=!1},p._removeStyles=function(i){var t={};for(var e in i)t[e]="";this.css(t)};var a={transitionProperty:"",transitionDuration:"",transitionDelay:""};return p.removeTransitionStyles=function(){this.css(a)},p.stagger=function(i){i=isNaN(i)?0:i,this.staggerDelay=i+"ms"},p.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},p.remove=function(){return u&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},p.reveal=function(){delete this.isHidden,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("visibleStyle");t[e]=this.onRevealTransitionEnd,this.transition({from:i.hiddenStyle,to:i.visibleStyle,isCleaning:!0,onTransitionEnd:t})},p.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},p.getHideRevealTransitionEndProperty=function(i){var t=this.layout.options[i];if(t.opacity)return"opacity";for(var e in t)return e},p.hide=function(){this.isHidden=!0,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("hiddenStyle");t[e]=this.onHideTransitionEnd,this.transition({from:i.visibleStyle,to:i.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},p.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},p.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}),function(s,r){typeof define=="function"&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(l,h,d,o){return r(s,l,h,d,o)}):typeof module=="object"&&module.exports?module.exports=r(s,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):s.Outlayer=r(s,s.EvEmitter,s.getSize,s.fizzyUIUtils,s.Outlayer.Item)}(window,function(s,r,l,h,d){function o(t,e){var n=h.getQueryElement(t);if(!n)return void(v&&v.error("Bad element for "+this.constructor.namespace+": "+(n||t)));this.element=n,g&&(this.$element=g(this.element)),this.options=h.extend({},this.constructor.defaults),this.option(e);var c=++m;this.element.outlayerGUID=c,_[c]=this,this._create();var y=this._getOption("initLayout");y&&this.layout()}function u(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function f(t){if(typeof t=="number")return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),n=e&&e[1],c=e&&e[2];if(!n.length)return 0;n=parseFloat(n);var y=i[c]||1;return n*y}var v=s.console,g=s.jQuery,p=function(){},m=0,_={};o.namespace="outlayer",o.Item=d,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var a=o.prototype;h.extend(a,r.prototype),a.option=function(t){h.extend(this.options,t)},a._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&this.options[e]!==void 0?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},a._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),h.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},a.reloadItems=function(){this.items=this._itemize(this.element.children)},a._itemize=function(t){for(var e=this._filterFindItemElements(t),n=this.constructor.Item,c=[],y=0;y<e.length;y++){var I=e[y],z=new n(I,this);c.push(z)}return c},a._filterFindItemElements=function(t){return h.filterFindElements(t,this.options.itemSelector)},a.getItemElements=function(){return this.items.map(function(t){return t.element})},a.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},a._init=a.layout,a._resetLayout=function(){this.getSize()},a.getSize=function(){this.size=l(this.element)},a._getMeasurement=function(t,e){var n,c=this.options[t];c?(typeof c=="string"?n=this.element.querySelector(c):c instanceof HTMLElement&&(n=c),this[t]=n?l(n)[e]:c):this[t]=0},a.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},a._getItemsForLayout=function(t){return t.filter(function(e){return!e.isIgnored})},a._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var n=[];t.forEach(function(c){var y=this._getItemLayoutPosition(c);y.item=c,y.isInstant=e||c.isLayoutInstant,n.push(y)},this),this._processLayoutQueue(n)}},a._getItemLayoutPosition=function(){return{x:0,y:0}},a._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(e,n){this._positionItem(e.item,e.x,e.y,e.isInstant,n)},this)},a.updateStagger=function(){var t=this.options.stagger;return t==null?void(this.stagger=0):(this.stagger=f(t),this.stagger)},a._positionItem=function(t,e,n,c,y){c?t.goTo(e,n):(t.stagger(y*this.stagger),t.moveTo(e,n))},a._postLayout=function(){this.resizeContainer()},a.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},a._getContainerSize=p,a._setContainerMeasure=function(t,e){if(t!==void 0){var n=this.size;n.isBorderBox&&(t+=e?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},a._emitCompleteOnItems=function(t,e){function n(){y.dispatchEvent(t+"Complete",null,[e])}function c(){z++,z==I&&n()}var y=this,I=e.length;if(!e||!I)return void n();var z=0;e.forEach(function(x){x.once(t,c)})},a.dispatchEvent=function(t,e,n){var c=e?[e].concat(n):n;if(this.emitEvent(t,c),g)if(this.$element=this.$element||g(this.element),e){var y=g.Event(e);y.type=t,this.$element.trigger(y,n)}else this.$element.trigger(t,n)},a.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},a.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},a.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},a.unstamp=function(t){t=this._find(t),t&&t.forEach(function(e){h.removeFrom(this.stamps,e),this.unignore(e)},this)},a._find=function(t){if(t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=h.makeArray(t)},a._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},a._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},a._manageStamp=p,a._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,c=l(t),y={left:e.left-n.left-c.marginLeft,top:e.top-n.top-c.marginTop,right:n.right-e.right-c.marginRight,bottom:n.bottom-e.bottom-c.marginBottom};return y},a.handleEvent=h.handleEvent,a.bindResize=function(){s.addEventListener("resize",this),this.isResizeBound=!0},a.unbindResize=function(){s.removeEventListener("resize",this),this.isResizeBound=!1},a.onresize=function(){this.resize()},h.debounceMethod(o,"onresize",100),a.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},a.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},a.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},a.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},a.prepended=function(t){var e=this._itemize(t);if(e.length){var n=this.items.slice(0);this.items=e.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(n)}},a.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(n,c){n.stagger(c*e),n.reveal()})}},a.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(n,c){n.stagger(c*e),n.hide()})}},a.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},a.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},a.getItem=function(t){for(var e=0;e<this.items.length;e++){var n=this.items[e];if(n.element==t)return n}},a.getItems=function(t){t=h.makeArray(t);var e=[];return t.forEach(function(n){var c=this.getItem(n);c&&e.push(c)},this),e},a.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(n){n.remove(),h.removeFrom(this.items,n)},this)},a.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(n){n.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete _[e],delete this.element.outlayerGUID,g&&g.removeData(this.element,this.constructor.namespace)},o.data=function(t){t=h.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&_[e]},o.create=function(t,e){var n=u(o);return n.defaults=h.extend({},o.defaults),h.extend(n.defaults,e),n.compatOptions=h.extend({},o.compatOptions),n.namespace=t,n.data=o.data,n.Item=u(d),h.htmlInit(n,t),g&&g.bridget&&g.bridget(t,n),n};var i={ms:1,s:1e3};return o.Item=d,o}),function(s,r){typeof define=="function"&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],r):typeof module=="object"&&module.exports?module.exports=r(require("outlayer")):(s.Isotope=s.Isotope||{},s.Isotope.Item=r(s.Outlayer))}(window,function(s){function r(){s.Item.apply(this,arguments)}var l=r.prototype=Object.create(s.Item.prototype),h=l._create;l._create=function(){this.id=this.layout.itemGUID++,h.call(this),this.sortData={}},l.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var o=this.layout.options.getSortData,u=this.layout._sorters;for(var f in o){var v=u[f];this.sortData[f]=v(this.element,this)}}};var d=l.destroy;return l.destroy=function(){d.apply(this,arguments),this.css({display:""})},r}),function(s,r){typeof define=="function"&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],r):typeof module=="object"&&module.exports?module.exports=r(require("get-size"),require("outlayer")):(s.Isotope=s.Isotope||{},s.Isotope.LayoutMode=r(s.getSize,s.Outlayer))}(window,function(s,r){function l(o){this.isotope=o,o&&(this.options=o.options[this.namespace],this.element=o.element,this.items=o.filteredItems,this.size=o.size)}var h=l.prototype,d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return d.forEach(function(o){h[o]=function(){return r.prototype[o].apply(this.isotope,arguments)}}),h.needsVerticalResizeLayout=function(){var o=s(this.isotope.element),u=this.isotope.size&&o;return u&&o.innerHeight!=this.isotope.size.innerHeight},h._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},h.getColumnWidth=function(){this.getSegmentSize("column","Width")},h.getRowHeight=function(){this.getSegmentSize("row","Height")},h.getSegmentSize=function(o,u){var f=o+u,v="outer"+u;if(this._getMeasurement(f,v),!this[f]){var g=this.getFirstItemSize();this[f]=g&&g[v]||this.isotope.size["inner"+u]}},h.getFirstItemSize=function(){var o=this.isotope.filteredItems[0];return o&&o.element&&s(o.element)},h.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},h.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},l.modes={},l.create=function(o,u){function f(){l.apply(this,arguments)}return f.prototype=Object.create(h),f.prototype.constructor=f,u&&(f.options=u),f.prototype.namespace=o,l.modes[o]=f,f},l}),function(s,r){typeof define=="function"&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],r):typeof module=="object"&&module.exports?module.exports=r(require("outlayer"),require("get-size")):s.Masonry=r(s.Outlayer,s.getSize)}(window,function(s,r){var l=s.create("masonry");l.compatOptions.fitWidth="isFitWidth";var h=l.prototype;return h._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var d=0;d<this.cols;d++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},h.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var d=this.items[0],o=d&&d.element;this.columnWidth=o&&r(o).outerWidth||this.containerWidth}var u=this.columnWidth+=this.gutter,f=this.containerWidth+this.gutter,v=f/u,g=u-f%u,p=g&&g<1?"round":"floor";v=Math[p](v),this.cols=Math.max(v,1)},h.getContainerWidth=function(){var d=this._getOption("fitWidth"),o=d?this.element.parentNode:this.element,u=r(o);this.containerWidth=u&&u.innerWidth},h._getItemLayoutPosition=function(d){d.getSize();var o=d.size.outerWidth%this.columnWidth,u=o&&o<1?"round":"ceil",f=Math[u](d.size.outerWidth/this.columnWidth);f=Math.min(f,this.cols);for(var v=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",g=this[v](f,d),p={x:this.columnWidth*g.col,y:g.y},m=g.y+d.size.outerHeight,_=f+g.col,a=g.col;a<_;a++)this.colYs[a]=m;return p},h._getTopColPosition=function(d){var o=this._getTopColGroup(d),u=Math.min.apply(Math,o);return{col:o.indexOf(u),y:u}},h._getTopColGroup=function(d){if(d<2)return this.colYs;for(var o=[],u=this.cols+1-d,f=0;f<u;f++)o[f]=this._getColGroupY(f,d);return o},h._getColGroupY=function(d,o){if(o<2)return this.colYs[d];var u=this.colYs.slice(d,d+o);return Math.max.apply(Math,u)},h._getHorizontalColPosition=function(d,o){var u=this.horizontalColIndex%this.cols,f=d>1&&u+d>this.cols;u=f?0:u;var v=o.size.outerWidth&&o.size.outerHeight;return this.horizontalColIndex=v?u+d:this.horizontalColIndex,{col:u,y:this._getColGroupY(u,d)}},h._manageStamp=function(d){var o=r(d),u=this._getElementOffset(d),f=this._getOption("originLeft"),v=f?u.left:u.right,g=v+o.outerWidth,p=Math.floor(v/this.columnWidth);p=Math.max(0,p);var m=Math.floor(g/this.columnWidth);m-=g%this.columnWidth?0:1,m=Math.min(this.cols-1,m);for(var _=this._getOption("originTop"),a=(_?u.top:u.bottom)+o.outerHeight,i=p;i<=m;i++)this.colYs[i]=Math.max(a,this.colYs[i])},h._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var d={height:this.maxY};return this._getOption("fitWidth")&&(d.width=this._getContainerFitWidth()),d},h._getContainerFitWidth=function(){for(var d=0,o=this.cols;--o&&this.colYs[o]===0;)d++;return(this.cols-d)*this.columnWidth-this.gutter},h.needsResizeLayout=function(){var d=this.containerWidth;return this.getContainerWidth(),d!=this.containerWidth},l}),function(s,r){typeof define=="function"&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],r):typeof module=="object"&&module.exports?module.exports=r(require("../layout-mode"),require("masonry-layout")):r(s.Isotope.LayoutMode,s.Masonry)}(window,function(s,r){var l=s.create("masonry"),h=l.prototype,d={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var o in r.prototype)d[o]||(h[o]=r.prototype[o]);var u=h.measureColumns;h.measureColumns=function(){this.items=this.isotope.filteredItems,u.call(this)};var f=h._getOption;return h._getOption=function(v){return v=="fitWidth"?this.options.isFitWidth!==void 0?this.options.isFitWidth:this.options.fitWidth:f.apply(this.isotope,arguments)},l}),function(s,r){typeof define=="function"&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],r):typeof exports=="object"?module.exports=r(require("../layout-mode")):r(s.Isotope.LayoutMode)}(window,function(s){var r=s.create("fitRows"),l=r.prototype;return l._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},l._getItemLayoutPosition=function(h){h.getSize();var d=h.size.outerWidth+this.gutter,o=this.isotope.size.innerWidth+this.gutter;this.x!==0&&d+this.x>o&&(this.x=0,this.y=this.maxY);var u={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+h.size.outerHeight),this.x+=d,u},l._getContainerSize=function(){return{height:this.maxY}},r}),function(s,r){typeof define=="function"&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],r):typeof module=="object"&&module.exports?module.exports=r(require("../layout-mode")):r(s.Isotope.LayoutMode)}(window,function(s){var r=s.create("vertical",{horizontalAlignment:0}),l=r.prototype;return l._resetLayout=function(){this.y=0},l._getItemLayoutPosition=function(h){h.getSize();var d=(this.isotope.size.innerWidth-h.size.outerWidth)*this.options.horizontalAlignment,o=this.y;return this.y+=h.size.outerHeight,{x:d,y:o}},l._getContainerSize=function(){return{height:this.y}},r}),function(s,r){typeof define=="function"&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(l,h,d,o,u,f){return r(s,l,h,d,o,u,f)}):typeof module=="object"&&module.exports?module.exports=r(s,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):s.Isotope=r(s,s.Outlayer,s.getSize,s.matchesSelector,s.fizzyUIUtils,s.Isotope.Item,s.Isotope.LayoutMode)}(window,function(s,r,l,h,d,o,u){function f(i,t){return function(e,n){for(var c=0;c<i.length;c++){var y=i[c],I=e.sortData[y],z=n.sortData[y];if(I>z||I<z){var x=t[y]!==void 0?t[y]:t,S=x?1:-1;return(I>z?1:-1)*S}}return 0}}var v=s.jQuery,g=String.prototype.trim?function(i){return i.trim()}:function(i){return i.replace(/^\s+|\s+$/g,"")},p=r.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});p.Item=o,p.LayoutMode=u;var m=p.prototype;m._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),r.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var i in u.modes)this._initLayoutMode(i)},m.reloadItems=function(){this.itemGUID=0,r.prototype.reloadItems.call(this)},m._itemize=function(){for(var i=r.prototype._itemize.apply(this,arguments),t=0;t<i.length;t++){var e=i[t];e.id=this.itemGUID++}return this._updateItemsSortData(i),i},m._initLayoutMode=function(i){var t=u.modes[i],e=this.options[i]||{};this.options[i]=t.options?d.extend(t.options,e):e,this.modes[i]=new t(this)},m.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},m._layout=function(){var i=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,i),this._isLayoutInited=!0},m.arrange=function(i){this.option(i),this._getIsInstant();var t=this._filter(this.items);this.filteredItems=t.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[t]):this._hideReveal(t),this._sort(),this._layout()},m._init=m.arrange,m._hideReveal=function(i){this.reveal(i.needReveal),this.hide(i.needHide)},m._getIsInstant=function(){var i=this._getOption("layoutInstant"),t=i!==void 0?i:!this._isLayoutInited;return this._isInstant=t,t},m._bindArrangeComplete=function(){function i(){t&&e&&n&&c.dispatchEvent("arrangeComplete",null,[c.filteredItems])}var t,e,n,c=this;this.once("layoutComplete",function(){t=!0,i()}),this.once("hideComplete",function(){e=!0,i()}),this.once("revealComplete",function(){n=!0,i()})},m._filter=function(i){var t=this.options.filter;t=t||"*";for(var e=[],n=[],c=[],y=this._getFilterTest(t),I=0;I<i.length;I++){var z=i[I];if(!z.isIgnored){var x=y(z);x&&e.push(z),x&&z.isHidden?n.push(z):x||z.isHidden||c.push(z)}}return{matches:e,needReveal:n,needHide:c}},m._getFilterTest=function(i){return v&&this.options.isJQueryFiltering?function(t){return v(t.element).is(i)}:typeof i=="function"?function(t){return i(t.element)}:function(t){return h(t.element,i)}},m.updateSortData=function(i){var t;i?(i=d.makeArray(i),t=this.getItems(i)):t=this.items,this._getSorters(),this._updateItemsSortData(t)},m._getSorters=function(){var i=this.options.getSortData;for(var t in i){var e=i[t];this._sorters[t]=_(e)}},m._updateItemsSortData=function(i){for(var t=i&&i.length,e=0;t&&e<t;e++){var n=i[e];n.updateSortData()}};var _=function(){function i(e){if(typeof e!="string")return e;var n=g(e).split(" "),c=n[0],y=c.match(/^\[(.+)\]$/),I=y&&y[1],z=t(I,c),x=p.sortDataParsers[n[1]];return e=x?function(S){return S&&x(z(S))}:function(S){return S&&z(S)}}function t(e,n){return e?function(c){return c.getAttribute(e)}:function(c){var y=c.querySelector(n);return y&&y.textContent}}return i}();p.sortDataParsers={parseInt:function(i){return parseInt(i,10)},parseFloat:function(i){return parseFloat(i)}},m._sort=function(){if(this.options.sortBy){var i=d.makeArray(this.options.sortBy);this._getIsSameSortBy(i)||(this.sortHistory=i.concat(this.sortHistory));var t=f(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(t)}},m._getIsSameSortBy=function(i){for(var t=0;t<i.length;t++)if(i[t]!=this.sortHistory[t])return!1;return!0},m._mode=function(){var i=this.options.layoutMode,t=this.modes[i];if(!t)throw new Error("No layout mode: "+i);return t.options=this.options[i],t},m._resetLayout=function(){r.prototype._resetLayout.call(this),this._mode()._resetLayout()},m._getItemLayoutPosition=function(i){return this._mode()._getItemLayoutPosition(i)},m._manageStamp=function(i){this._mode()._manageStamp(i)},m._getContainerSize=function(){return this._mode()._getContainerSize()},m.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.appended=function(i){var t=this.addItems(i);if(t.length){var e=this._filterRevealAdded(t);this.filteredItems=this.filteredItems.concat(e)}},m.prepended=function(i){var t=this._itemize(i);if(t.length){this._resetLayout(),this._manageStamps();var e=this._filterRevealAdded(t);this.layoutItems(this.filteredItems),this.filteredItems=e.concat(this.filteredItems),this.items=t.concat(this.items)}},m._filterRevealAdded=function(i){var t=this._filter(i);return this.hide(t.needHide),this.reveal(t.matches),this.layoutItems(t.matches,!0),t.matches},m.insert=function(i){var t=this.addItems(i);if(t.length){var e,n,c=t.length;for(e=0;e<c;e++)n=t[e],this.element.appendChild(n.element);var y=this._filter(t).matches;for(e=0;e<c;e++)t[e].isLayoutInstant=!0;for(this.arrange(),e=0;e<c;e++)delete t[e].isLayoutInstant;this.reveal(y)}};var a=m.remove;return m.remove=function(i){i=d.makeArray(i);var t=this.getItems(i);a.call(this,i);for(var e=t&&t.length,n=0;e&&n<e;n++){var c=t[n];d.removeFrom(this.filteredItems,c)}},m.shuffle=function(){for(var i=0;i<this.items.length;i++){var t=this.items[i];t.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m._noTransition=function(i,t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var n=i.apply(this,t);return this.options.transitionDuration=e,n},m.getFilteredItemElements=function(){return this.filteredItems.map(function(i){return i.element})},p});function b(){console.log("another js code from header module")}function W(){document.querySelector("body").classList.add("page--home")}const w=[b],O=[W];w.forEach(s=>s()),O.forEach(s=>s())});
(require("../layout-mode"), require("masonry-layout")) : r(s.Isotope.LayoutMode, s.Masonry);
  }(window, function(s, r) {
    var f = s.create("masonry"), u = f.prototype, d = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var n in r.prototype)
      d[n] || (u[n] = r.prototype[n]);
    var h = u.measureColumns;
    u.measureColumns = function() {
      this.items = this.isotope.filteredItems, h.call(this);
    };
    var l = u._getOption;
    return u._getOption = function(v) {
      return v == "fitWidth" ? this.options.isFitWidth !== void 0 ? this.options.isFitWidth : this.options.fitWidth : l.apply(this.isotope, arguments);
    }, f;
  }), function(s, r) {
    typeof define == "function" && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], r) : typeof T == "object" ? I.exports = r(require("../layout-mode")) : r(s.Isotope.LayoutMode);
  }(window, function(s) {
    var r = s.create("fitRows"), f = r.prototype;
    return f._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, f._getItemLayoutPosition = function(u) {
      u.getSize();
      var d = u.size.outerWidth + this.gutter, n = this.isotope.size.innerWidth + this.gutter;
      this.x !== 0 && d + this.x > n && (this.x = 0, this.y = this.maxY);
      var h = { x: this.x, y: this.y };
      return this.maxY = Math.max(this.maxY, this.y + u.size.outerHeight), this.x += d, h;
    }, f._getContainerSize = function() {
      return { height: this.maxY };
    }, r;
  }), function(s, r) {
    typeof define == "function" && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], r) : typeof I == "object" && I.exports ? I.exports = r(require("../layout-mode")) : r(s.Isotope.LayoutMode);
  }(window, function(s) {
    var r = s.create("vertical", { horizontalAlignment: 0 }), f = r.prototype;
    return f._resetLayout = function() {
      this.y = 0;
    }, f._getItemLayoutPosition = function(u) {
      u.getSize();
      var d = (this.isotope.size.innerWidth - u.size.outerWidth) * this.options.horizontalAlignment, n = this.y;
      return this.y += u.size.outerHeight, { x: d, y: n };
    }, f._getContainerSize = function() {
      return { height: this.y };
    }, r;
  }), function(s, r) {
    typeof define == "function" && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(f, u, d, n, h, l) {
      return r(s, f, u, d, n, h, l);
    }) : typeof I == "object" && I.exports ? I.exports = r(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : s.Isotope = r(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode);
  }(window, function(s, r, f, u, d, n, h) {
    function l(i, t) {
      return function(e, o) {
        for (var m = 0; m < i.length; m++) {
          var y = i[m], x = e.sortData[y], z = o.sortData[y];
          if (x > z || x < z) {
            var S = t[y] !== void 0 ? t[y] : t, b = S ? 1 : -1;
            return (x > z ? 1 : -1) * b;
          }
        }
        return 0;
      };
    }
    var v = s.jQuery, g = String.prototype.trim ? function(i) {
      return i.trim();
    } : function(i) {
      return i.replace(/^\s+|\s+$/g, "");
    }, p = r.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    p.Item = n, p.LayoutMode = h;
    var c = p.prototype;
    c._create = function() {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), r.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var i in h.modes)
        this._initLayoutMode(i);
    }, c.reloadItems = function() {
      this.itemGUID = 0, r.prototype.reloadItems.call(this);
    }, c._itemize = function() {
      for (var i = r.prototype._itemize.apply(this, arguments), t = 0; t < i.length; t++) {
        var e = i[t];
        e.id = this.itemGUID++;
      }
      return this._updateItemsSortData(i), i;
    }, c._initLayoutMode = function(i) {
      var t = h.modes[i], e = this.options[i] || {};
      this.options[i] = t.options ? d.extend(t.options, e) : e, this.modes[i] = new t(this);
    }, c.layout = function() {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    }, c._layout = function() {
      var i = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, i), this._isLayoutInited = !0;
    }, c.arrange = function(i) {
      this.option(i), this._getIsInstant();
      var t = this._filter(this.items);
      this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout();
    }, c._init = c.arrange, c._hideReveal = function(i) {
      this.reveal(i.needReveal), this.hide(i.needHide);
    }, c._getIsInstant = function() {
      var i = this._getOption("layoutInstant"), t = i !== void 0 ? i : !this._isLayoutInited;
      return this._isInstant = t, t;
    }, c._bindArrangeComplete = function() {
      function i() {
        t && e && o && m.dispatchEvent("arrangeComplete", null, [m.filteredItems]);
      }
      var t, e, o, m = this;
      this.once("layoutComplete", function() {
        t = !0, i();
      }), this.once("hideComplete", function() {
        e = !0, i();
      }), this.once("revealComplete", function() {
        o = !0, i();
      });
    }, c._filter = function(i) {
      var t = this.options.filter;
      t = t || "*";
      for (var e = [], o = [], m = [], y = this._getFilterTest(t), x = 0; x < i.length; x++) {
        var z = i[x];
        if (!z.isIgnored) {
          var S = y(z);
          S && e.push(z), S && z.isHidden ? o.push(z) : S || z.isHidden || m.push(z);
        }
      }
      return { matches: e, needReveal: o, needHide: m };
    }, c._getFilterTest = function(i) {
      return v && this.options.isJQueryFiltering ? function(t) {
        return v(t.element).is(i);
      } : typeof i == "function" ? function(t) {
        return i(t.element);
      } : function(t) {
        return u(t.element, i);
      };
    }, c.updateSortData = function(i) {
      var t;
      i ? (i = d.makeArray(i), t = this.getItems(i)) : t = this.items, this._getSorters(), this._updateItemsSortData(t);
    }, c._getSorters = function() {
      var i = this.options.getSortData;
      for (var t in i) {
        var e = i[t];
        this._sorters[t] = _(e);
      }
    }, c._updateItemsSortData = function(i) {
      for (var t = i && i.length, e = 0; t && e < t; e++) {
        var o = i[e];
        o.updateSortData();
      }
    };
    var _ = /* @__PURE__ */ function() {
      function i(e) {
        if (typeof e != "string")
          return e;
        var o = g(e).split(" "), m = o[0], y = m.match(/^\[(.+)\]$/), x = y && y[1], z = t(x, m), S = p.sortDataParsers[o[1]];
        return e = S ? function(b) {
          return b && S(z(b));
        } : function(b) {
          return b && z(b);
        };
      }
      function t(e, o) {
        return e ? function(m) {
          return m.getAttribute(e);
        } : function(m) {
          var y = m.querySelector(o);
          return y && y.textContent;
        };
      }
      return i;
    }();
    p.sortDataParsers = { parseInt: function(i) {
      return parseInt(i, 10);
    }, parseFloat: function(i) {
      return parseFloat(i);
    } }, c._sort = function() {
      if (this.options.sortBy) {
        var i = d.makeArray(this.options.sortBy);
        this._getIsSameSortBy(i) || (this.sortHistory = i.concat(this.sortHistory));
        var t = l(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(t);
      }
    }, c._getIsSameSortBy = function(i) {
      for (var t = 0; t < i.length; t++)
        if (i[t] != this.sortHistory[t])
          return !1;
      return !0;
    }, c._mode = function() {
      var i = this.options.layoutMode, t = this.modes[i];
      if (!t)
        throw new Error("No layout mode: " + i);
      return t.options = this.options[i], t;
    }, c._resetLayout = function() {
      r.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, c._getItemLayoutPosition = function(i) {
      return this._mode()._getItemLayoutPosition(i);
    }, c._manageStamp = function(i) {
      this._mode()._manageStamp(i);
    }, c._getContainerSize = function() {
      return this._mode()._getContainerSize();
    }, c.needsResizeLayout = function() {
      return this._mode().needsResizeLayout();
    }, c.appended = function(i) {
      var t = this.addItems(i);
      if (t.length) {
        var e = this._filterRevealAdded(t);
        this.filteredItems = this.filteredItems.concat(e);
      }
    }, c.prepended = function(i) {
      var t = this._itemize(i);
      if (t.length) {
        this._resetLayout(), this._manageStamps();
        var e = this._filterRevealAdded(t);
        this.layoutItems(this.filteredItems), this.filteredItems = e.concat(this.filteredItems), this.items = t.concat(this.items);
      }
    }, c._filterRevealAdded = function(i) {
      var t = this._filter(i);
      return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches;
    }, c.insert = function(i) {
      var t = this.addItems(i);
      if (t.length) {
        var e, o, m = t.length;
        for (e = 0; e < m; e++)
          o = t[e], this.element.appendChild(o.element);
        var y = this._filter(t).matches;
        for (e = 0; e < m; e++)
          t[e].isLayoutInstant = !0;
        for (this.arrange(), e = 0; e < m; e++)
          delete t[e].isLayoutInstant;
        this.reveal(y);
      }
    };
    var a = c.remove;
    return c.remove = function(i) {
      i = d.makeArray(i);
      var t = this.getItems(i);
      a.call(this, i);
      for (var e = t && t.length, o = 0; e && o < e; o++) {
        var m = t[o];
        d.removeFrom(this.filteredItems, m);
      }
    }, c.shuffle = function() {
      for (var i = 0; i < this.items.length; i++) {
        var t = this.items[i];
        t.sortData.random = Math.random();
      }
      this.options.sortBy = "random", this._sort(), this._layout();
    }, c._noTransition = function(i, t) {
      var e = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var o = i.apply(this, t);
      return this.options.transitionDuration = e, o;
    }, c.getFilteredItemElements = function() {
      return this.filteredItems.map(function(i) {
        return i.element;
      });
    }, p;
  });
  function O() {
    console.log("another js code from header module");
  }
  function R() {
    document.querySelector("body").classList.add("page--home");
  }
  const M = [O], D = [R];
  M.forEach((s) => s());
  D.forEach((s) => s());
});
export default j();
