(function(e,t){// Copyright (c) 2011-2013 Felix Gnass
"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.IubSpinner=t()})(this,function(){"use strict";function e(e,t){var i,n=document.createElement(e||"div");for(i in t)n[i]=t[i];return n}function t(e){for(var t=1,i=arguments.length;i>t;t++)e.appendChild(arguments[t]);return e}function i(e,t,i,n){var r=["opacity",t,~~(100*e),i,n].join("-"),a=.01+100*(i/n),o=Math.max(1-(1-e)/t*(100-a),e),l=u.substring(0,u.indexOf("Animation")).toLowerCase(),s=l&&"-"+l+"-"||"";return p[r]||(f.insertRule("@"+s+"keyframes "+r+"{"+"0%{opacity:"+o+"}"+a+"%{opacity:"+e+"}"+(a+.01)+"%{opacity:1}"+(a+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+o+"}"+"}",f.cssRules.length),p[r]=1),r}function n(e,t){var i,n,r=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<c.length;n++)if(i=c[n]+t,r[i]!==void 0)return i;return r[t]!==void 0?t:void 0}function r(e,t){for(var i in t)e.style[n(e,i)||i]=t[i];return e}function a(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]===void 0&&(e[n]=i[n])}return e}function o(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function l(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){return"undefined"==typeof this?new s(e):(this.opts=a(e||{},s.defaults,h),void 0)}function d(){function i(t,i){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}f.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,n){function a(){return r(i("group",{coordsize:u+" "+u,coordorigin:-d+" "+-d}),{width:u,height:u})}function o(e,o,s){t(p,t(r(a(),{rotation:360/n.lines*e+"deg",left:~~o}),t(r(i("roundrect",{arcsize:n.corners}),{width:d,height:n.width,left:n.radius,top:-n.width>>1,filter:s}),i("fill",{color:l(n.color,e),opacity:n.opacity}),i("stroke",{opacity:0}))))}var s,d=n.length+n.width,u=2*d,c=-(n.width+n.length)*2+"px",p=r(a(),{position:"absolute",top:c,left:c});if(n.shadow)for(s=1;s<=n.lines;s++)o(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=n.lines;s++)o(s);return t(e,p)},s.prototype.opacity=function(e,t,i,n){var r=e.firstChild;n=n.shadow&&n.lines||0,r&&t+n<r.childNodes.length&&(r=r.childNodes[t+n],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}}var u,c=["webkit","Moz","ms","O"],p={},f=function(){var i=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};s.defaults={},a(s.prototype,{spin:function(t){this.stop();var i,n,a=this,l=a.opts,s=a.el=r(e(0,{className:l.className}),{position:l.position,width:0,zIndex:l.zIndex}),d=l.radius+l.length+l.width;if(t&&(t.insertBefore(s,t.firstChild||null),n=o(t),i=o(s),r(s,{left:(l.left=="auto"?n.x-i.x+(t.offsetWidth>>1):parseInt(l.left,10)+d)+"px",top:(l.top=="auto"?n.y-i.y+(t.offsetHeight>>1):parseInt(l.top,10)+d)+"px"})),s.setAttribute("role","progressbar"),a.lines(s,a.opts),!u){var c,p=0,f=(l.lines-1)*(1-l.direction)/2,h=l.fps,b=h/l.speed,g=(1-l.opacity)/(b*l.trail/100),m=b/l.lines;(function y(){p++;for(var e=0;e<l.lines;e++)c=Math.max(1-(p+(l.lines-e)*m)%b*g,l.opacity),a.opacity(s,e*l.direction+f,c,l);a.timeout=a.el&&setTimeout(y,~~(1e3/h))})()}return a},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(n,a){function o(t,i){return r(e(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px"+",0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var s,d=0,c=(a.lines-1)*(1-a.direction)/2;d<a.lines;d++)s=r(e(),{position:"absolute",top:1+~(a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:u&&i(a.opacity,a.trail,c+d*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&t(s,r(o("#000","0 0 4px #000"),{top:"2px"})),t(n,t(s,o(l(a.color,d),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(e,t,i){t<e.childNodes.length&&(e.childNodes[t].style.opacity=i)}});var b=r(e("group"),{behavior:"url(#default#VML)"});return!n(b,"transform")&&b.adj?d():u=n(b,"animation"),s}),function(){typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}();var _iub=_iub||[];_iub.badges=_iub.badges||[],_iub.embedBs=_iub.embedBs||[],function(e,t){function i(){return _}function n(){var e=x("iubenda-embed",t);if(e.length==0){var i=t.getElementById("iubenda-embed");i&&r(i)}else for(var n=0;n<e.length;n++){var a=e[n],o={ppId:A(a.getAttribute("href")),isLegal:k(a)};m(a.className.split(" "),"iub-body-embed")!=-1?B({linkA:a,embedB:!0})||(o.index=Math.floor(Math.random()*1e10),o.linkA=r(a,o.index),_iub.embedBs.push(o)):B({linkA:a})||(o.linkA=r(a),_iub.badges.push(o))}}function r(e,i){var n=e,r=!1,d=!1,u=!1,c=!1,p=!1,f=!1,h="iubenda-white",g=e.getAttribute("href"),x=A(g),N="//",k=parseInt(e.getAttribute("data-iub-z-index"))||null,B=e.getAttribute("data-iub-overflow")||"html",_=e.className.split(" ");v(_,"no-brand")&&(r=!0),v(_,"skip-track")&&(d=!0),v(_,"iub-body-embed")&&(u=!0),v(_,"iub-legal-only")&&(c=!0),v(_,"iub-anchor")&&(p=!0),v(_,"iub-no-markup")&&(f=!0),e.getAttribute("href").indexOf("http://")!=-1?N="http://":e.getAttribute("href").indexOf("https://")!=-1&&(N="https://");var M=w(I,N),T=w(C,N),S=w(E,N),O=w(L,N);if(m(_,"iubenda-no-icon")!=-1?h="iubenda-nostyle":(h=y(["iubenda-green","iubenda-green-m","iubenda-green-s","iubenda-green-xs","iubenda-lowgray","iubenda-lowgray-m","iubenda-lowgray-s","iubenda-lowgray-xs","iubenda-midgray","iubenda-midgray-m","iubenda-midgray-s","iubenda-midgray-xs","iubenda-darkgray","iubenda-darkgray-m","iubenda-darkgray-s","iubenda-darkgray-xs","iubenda-white","iubenda-black","iubenda-nostyle"],_),-1==h&&(h="iubenda-white")),"iubenda-nostyle"!=h&&(e.style.outline="0px",e.style.border="0px",e.style.textDecoration="none",e.style.display="inline-block",e.style.background="none"),u)n=s(e,O,c,f,N,i);else if(m(["iubenda-white","iubenda-black"],h)!=-1)n=l(e,h,null,null,x,r,M,T,S,d,c,p,N,k,B);else{if(c&&(e.href=e.href+"/full-legal"),"iubenda-nostyle"!=h){var P=116,j=25,z=".gif";(h.indexOf("-m")!=-1&&h.indexOf("-mid")==-1||h.indexOf("midgray-m")!=-1)&&(P=81,j=21),(h.indexOf("-s")!=-1||h.indexOf("-xs")!=-1)&&(P=82,j=17,z=".png"),e.style.width=P+"px",e.style.height=j+"px",h+=z,a(e,M+h,P,j)}b(T,e,{onLoadCallB:function(){_iub.ifr.iubendaStartBadge({linkA:e,embedP:t.getElementsByTagName("body")[0],iFrUrl:e.href,cdnBaseUrl:M,useProtocol:N,zIndex:k,overflow:B})}}),d||o(e,x),n=e}return"undefined"!=typeof editLinkA&&null!=editLinkA&&(editLinkA=null),n}function a(e,t,i,n){f(e.id,t,100,i,n)}function o(){}function l(e,i,n,r,a,l,s,d,u,c,f,h,b,g,m){e.style.display="none";var y=e.innerHTML.trim()||"Privacy Policy",v=e.getAttribute("title")||"Privacy Policy",b=b||"//",x={"Informativa Privacy":136,"Datenschutzerklärung":154,"Política de privacidad":146,"Politique de confidentialité":178},N=n||x[y]||105,A=r||22,k=t.createElement("IFRAME"),B=h?"iubenda-ibadge iubenda-iframe-anchor":"iubenda-ibadge";k.setAttribute("class",B),k.setAttribute("scrolling","no"),k.setAttribute("frameBorder","0"),k.setAttribute("allowtransparency","true");var _="width:"+N+"px; height:"+A+"px;";h&&(_+=" z-index:9998; position:fixed; bottom:0px; right:0px;"),p(k,_),e.parentNode.insertBefore(k,e.nextSibling),e.parentNode.removeChild(e);var I=k.contentWindow.document;I.open(),I.write();var C=f?e.href+"/full-legal":e.href;C=w(C,b);var E=null,L='<html><head><title>iubenda badge</title><meta name="viewport" content="width=device-width"><link type="text/css" rel="stylesheet" href="'+u+'" media="screen" />'+'<script type="text/javascript" src="'+d+'"></script></head>'+'<body onload="try{_iub.ifr.iubendaStartBadge({'+(E?"iFrUrl:'"+E+"',":"")+"useProtocol:'"+b+"',zIndex:'"+g+"',overflow:'"+m+"'});}catch(exc){console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.')}\"><a href=\""+C+'" class="'+i+" "+(l?"no-brand":"")+" "+(h?"iub-anchor":"")+'" id="i_badge-link" title="'+v+'" target="_parent" >'+y+"</a></body></html>";return I.write(L),I.close(),c||o(k,a),k}function s(e,t,i,n,r,a){var r=r||"//";n||d(t);var o=e.href+(n?"/embed-no-markup.json":i?"/embed-legal.json":"/embed.json")+"?i="+a;if(o=w(o,r),"undefined"!=typeof IubSpinner){var l={lines:8,length:2,width:2,radius:2,color:"#696969",speed:1.2,trail:60,shadow:!1},s=new IubSpinner(l).spin();s.el.className="_iub-pp-loading-alert",p(s.el,"position:relative; display:inline-block; padding: 6px;"),e.parentNode.insertBefore(s.el,e)}return e.style.display="none",b(o,e,{tries:1}),e}function d(e){var i=t.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,t.getElementsByTagName("head")[0].appendChild(i)}function u(e){try{var i=null;if(e.i&&e.i!=null?(i=B({index:parseInt(e.i),embedB:!0,inDom:!0}),i||(i=B({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}))):i=B({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}),i&&i.linkA){var n=i.linkA,r=t.createElement("div");r.setAttribute("id","iub-pp-container"),r.innerHTML=e.content,n.parentNode.insertBefore(r,n.nextSibling);var a=n.previousSibling;a.className=="_iub-pp-loading-alert"&&a.parentNode.removeChild(a),n.parentNode.removeChild(n),c(r)}}catch(o){console.log("IUBENDA: Error while loading [ "+o.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}}function c(e){function i(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()}function n(e){var i=e.text||e.textContent||e.innerHTML||"",n=t.getElementsByTagName("head")[0]||t.documentElement,r=t.createElement("script");r.type="text/javascript";try{r.appendChild(t.createTextNode(i))}catch(a){r.text=i}n.insertBefore(r,n.firstChild),n.removeChild(r)}function r(e,t,i){var n=i+1;if(n<=Math.max(1,d)){t.push(e);for(var a=e.childNodes,o=0;o<a.length;o++)a[o].nodeType==1&&r(a[o],t,n)}}for(var a,o,l=[],s=[],d=8,u=e.childNodes,c=0;c<u.length;c++)u[c].nodeType==1&&r(u[c],s,1);for(var c=0;s[c];c++)o=s[c],!i(o,"script")||o.type&&o.type.toLowerCase()!=="text/javascript"||l.push(o);for(var c=0;l[c];c++)a=l[c],a.parentNode&&a.parentNode.removeChild(a),n(l[c])}function p(e,t){var i=h();-1!=i&&8>i?e.style.cssText=t:e.setAttribute("style",t)}function f(e,i,n,r,a){if(!(0>=n)){var o=t.getElementById(e),l=t.createElement("img");l.src=i,l.style.width=r+"px",l.style.height=a+"px",l.style.border="0px",o&&l.width?(l.alt=o.firstChild.nodeValue,l.title=o.firstChild.nodeValue,o.replaceChild(l,o.firstChild)):setTimeout("_iub.imageFastReplace('"+e+"','"+i+"',"+--n+","+r+","+a+");",150)}}function h(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");i.exec(t)!=null&&(e=parseFloat(RegExp.$1))}return e}function b(e,i,n){var n=n||{},r=e,a=i,o=n.onLoadCallB,l=n.tries,s=t.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("src",e),i.parentNode.insertBefore(s,i.nextSibling),"function"==typeof o&&g(s,o),s.onerror=function(){l>0&&b(N(r,"t",l),a,{onLoadCallB:o,tries:l-1})}}function g(e,t){var i=h();-1!=i&&9>i?e.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&t()}:e.onload=function(){t()}}function m(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=n)return-1;for(var a=r>=0?r:Math.max(n-Math.abs(r),0);n>a;a++)if(a in i&&i[a]===t)return a;return-1}function y(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;for(var r=0;r<t.length;r++)if(m(i,t[r])!=-1)return t[r];return-1}function v(e,t){return m(e,t)!=-1?(e.splice(m(e,t),1),!0):!1}function x(e,i){i||(i=t.getElementsByTagName("body")[0]);for(var n=[],r=new RegExp("\\b"+e+"\\b"),a=i.getElementsByTagName("*"),o=0,l=a.length;l>o;o++)r.test(a[o].className)&&n.push(a[o]);return n}function w(e,t){var i=e.indexOf("//")!=-1?e.split("//")[1]:e;return t.concat(i)}function N(e,t,i){if(i){var n=e.split("#")[0],r=e.split("#")[1];return n+=(n.indexOf("?")!=-1?"&":"?")+t+"="+i,r?n+"#"+r:n}return e}function A(e){for(var t=e.split("/"),i=t.length-1;i>-1;i--)if(!isNaN(parseInt(t[i])))return parseInt(t[i]);return null}function k(e){return e.getAttribute("href").indexOf("/legal")!=-1||e.getAttribute("href").indexOf("/full-legal")!=-1||m(e.className.split(" "),"iub-legal-only")!=-1||m(e.className.split(" "),"iub-no-markup")!=-1}function B(e){for(var e=e||{},i=e.embedB?_iub.embedBs:_iub.badges,n=e.inDom==1,r=0;r<i.length;r++)if(e.index){if(i[r].index==e.index&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(e.linkA){if(i[r].linkA==e.linkA&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(i[r].ppId==e.ppId&&i[r].isLegal===e.isLegal&&(!n||t.body.contains(i[r].linkA)))return i[r];return null}var _="1.0.3",I="https://cdn.iubenda.com/",C="https://cdn.iubenda.com/iubenda_i_badge.js",E="https://cdn.iubenda.com/iubenda_i_badge.css",L="https://www.iubenda.com/assets/privacy_policy.css";(function(){try{n()}catch(e){console.log("IUBENDA: Error while loading [ "+e.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}})(),e._iub.setStyle=function(e,t){p(e,t)},e._iub.onLoadCall=function(e,t){g(e,t)},e._iub.imageFastReplace=function(e,t,i,n,r){f(e,t,i,n,r)},e._iub.getElementsByClassName=function(e,t){return x(e,t)},e._iub.loadPPContent=function(e){u(e)},e._iub.version=function(){return i()}}(window,document);