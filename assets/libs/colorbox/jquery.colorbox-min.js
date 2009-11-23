/*	ColorBox v1.3.3 - a full featured, light-weight, customizable lightbox based on jQuery 1.3 */
(function(c){var s="colorbox",B="hover",o=true,g=false,e,E=!c.support.opacity,N=E&&!window.XMLHttpRequest,O="click.colorbox",fa="cbox_open",J="cbox_load",P="cbox_complete",Q="cbox_cleanup",aa="cbox_closed",R="resize.cbox_resize",u,j,x,p,S,T,U,V,h,r,n,K,L,ba,W,y,F,G,M,C,D,z,A,m,k,a,H,I,X,Y={transition:"elastic",speed:350,width:g,height:g,innerWidth:g,innerHeight:g,initialWidth:"400",initialHeight:"400",maxWidth:g,maxHeight:g,scalePhotos:o,scrolling:o,inline:g,html:g,iframe:g,photo:g,href:g,title:g, rel:g,opacity:0.9,preloading:o,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:g,overlayClose:o,slideshow:g,slideshowAuto:o,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",preloadIMG:o};function v(b,d){d=d==="x"?document.documentElement.clientWidth:document.documentElement.clientHeight;return typeof b==="string"?Math.round(b.match(/%/)?d/100*parseInt(b,10):parseInt(b,10)):b}function Z(b){return a.photo||b.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i)} function ca(){for(var b in a)if(typeof a[b]==="function")a[b]=a[b].call(m)}e=c.fn.colorbox=function(b,d){this.length?this.each(function(){var i=c(this).data(s)?c.extend({},c(this).data(s),b):c.extend({},Y,b);c(this).data(s,i).addClass("cboxelement")}):c(this).data(s,c.extend({},Y,b));c(this).unbind(O).bind(O,function(i){m=this;a=c(m).data(s);ca();X=d||g;var l=a.rel||m.rel;if(l&&l!=="nofollow"){h=c(".cboxelement").filter(function(){var f=c(this).data(s).rel||this.rel;return f===l});k=h.index(m);if(k< 0){h=h.add(m);k=h.length-1}}else{h=c(m);k=0}if(!H){I=H=o;c().bind("keydown.cbox_close",function(f){if(f.keyCode===27){f.preventDefault();e.close()}}).bind("keydown.cbox_arrows",function(f){if(f.keyCode===37){f.preventDefault();G.click()}else if(f.keyCode===39){f.preventDefault();F.click()}});a.overlayClose&&u.css({cursor:"pointer"}).one("click",e.close);m.blur();c.event.trigger(fa);M.html(a.close);u.css({opacity:a.opacity}).show();a.w=v(a.initialWidth,"x");a.h=v(a.initialHeight,"y");e.position(0); N&&r.bind("resize.cboxie6 scroll.cboxie6",function(){u.css({width:r.width(),height:r.height(),top:r.scrollTop(),left:r.scrollLeft()})}).trigger("scroll.cboxie6")}e.slideshow();e.load();i.preventDefault()});b&&b.open&&c(this).triggerHandler(O);return this};e.init=function(){function b(d){return c('<div id="cbox'+d+'"/>')}r=c(window);j=c('<div id="colorbox"/>');u=b("Overlay").hide();x=b("Wrapper");p=b("Content").append(n=b("LoadedContent").css({width:0,height:0}),K=b("LoadingOverlay"),L=b("LoadingGraphic"), ba=b("Title"),W=b("Current"),y=b("Slideshow"),F=b("Next"),G=b("Previous"),M=b("Close"));x.append(c("<div/>").append(b("TopLeft"),S=b("TopCenter"),b("TopRight")),c("<div/>").append(T=b("MiddleLeft"),p,U=b("MiddleRight")),c("<div/>").append(b("BottomLeft"),V=b("BottomCenter"),b("BottomRight"))).children().children().css({"float":"left"});c("body").prepend(u,j.append(x));if(E){j.addClass("cboxIE");N&&u.css("position","absolute")}p.children().addClass(B).mouseover(function(){c(this).addClass(B)}).mouseout(function(){c(this).removeClass(B)}).hide(); C=S.height()+V.height()+p.outerHeight(o)-p.height();D=T.width()+U.width()+p.outerWidth(o)-p.width();z=n.outerHeight(o);A=n.outerWidth(o);j.css({"padding-bottom":C,"padding-right":D}).hide();F.click(e.next);G.click(e.prev);M.click(e.close);p.children().removeClass(B)};e.position=function(b,d){var i=document.documentElement.clientHeight;i=Math.max(i-a.h-z-C,0)/2+r.scrollTop();var l=Math.max(document.documentElement.clientWidth-a.w-A-D,0)/2+r.scrollLeft();b=j.width()===a.w+A&&j.height()===a.h+z?0:b; x[0].style.width=x[0].style.height="9999px";function f(q){S[0].style.width=V[0].style.width=p[0].style.width=q.style.width;L[0].style.height=K[0].style.height=p[0].style.height=T[0].style.height=U[0].style.height=q.style.height}j.dequeue().animate({width:a.w+A,height:a.h+z,top:i,left:l},{duration:b,complete:function(){f(this);I=g;x[0].style.width=a.w+A+D+"px";x[0].style.height=a.h+z+C+"px";d&&d()},step:function(){f(this)}})};e.resize=function(b){if(H){function d(w){e.position(w,function(){if(H){if(E){q&& n.fadeIn(100);j[0].style.removeAttribute("filter")}p.children().show();if(a.iframe)n.append("<iframe id='cboxIframe'"+(a.scrolling?" ":"scrolling='no'")+" name='iframe_"+(new Date).getTime()+"' frameborder=0 src='"+(a.href||m.href)+"' />");K.hide();L.hide();y.hide();if(h.length>1){W.html(a.current.replace(/\{current\}/,k+1).replace(/\{total\}/,h.length));F.html(a.next);G.html(a.previous);a.slideshow&&y.show()}else{W.hide();F.hide();G.hide()}ba.html(a.title||m.title);c.event.trigger(P);X&&X.call(m); a.transition==="fade"&&j.fadeTo(t,1,function(){E&&j[0].style.removeAttribute("filter")});r.bind(R,function(){e.position(0)})}})}function i(){a.h=a.h||n.height();return a.h}function l(){a.w=a.w||n.width();return a.w}var f,q,t=a.transition==="none"?0:a.speed;r.unbind(R);if(b){n.remove();n=c('<div id="cboxLoadedContent"/>').html(b);n.hide().appendTo(u).css({width:l(),overflow:a.scrolling?"auto":"hidden"}).css({height:i()}).prependTo(p);c("#cboxPhoto").css({cssFloat:"none"});N&&c("select:not(#colorbox select)").filter(function(){return this.style.visibility!== "hidden"}).css({visibility:"hidden"}).one(Q,function(){this.style.visibility="inherit"});a.transition==="fade"&&j.fadeTo(t,0,function(){d(0)})||d(t);if(a.preloading&&h.length>1){b=k>0?h[k-1]:h[h.length-1];f=k<h.length-1?h[k+1]:h[0];f=c(f).data(s).href||f.href;b=c(b).data(s).href||b.href;Z(f)&&c("<img />").attr("src",f);Z(b)&&c("<img />").attr("src",b)}}else b=setTimeout(function(){var w=n.wrapInner("<div style='overflow:auto'></div>").children();a.h=w.height();n.css({height:a.h});w.replaceWith(w.children()); e.position(t)},1)}};e.load=function(){var b,d,i,l=e.resize;I=o;function f(q){var t=c(q),w=t.find("img"),$=w.length;function da(){var ea=new Image;$-=1;if($>=0&&a.preloadIMG){ea.onload=da;ea.src=w[$].src}else l(t)}da()}m=h[k];a=c(m).data(s);ca();c.event.trigger(J);a.h=a.height?v(a.height,"y")-z-C:a.innerHeight?v(a.innerHeight,"y"):g;a.w=a.width?v(a.width,"x")-A-D:a.innerWidth?v(a.innerWidth,"x"):g;a.mw=a.w;a.mh=a.h;if(a.maxWidth){a.mw=v(a.maxWidth,"x")-A-D;a.mw=a.w&&a.w<a.mw?a.w:a.mw}if(a.maxHeight){a.mh= v(a.maxHeight,"y")-z-C;a.mh=a.h&&a.h<a.mh?a.h:a.mh}b=a.href||c(m).attr("href");K.show();L.show();M.show();if(a.inline){c('<div id="cboxInlineTemp" />').hide().insertBefore(c(b)[0]).bind(J+" "+Q,function(){c(this).replaceWith(n.children())});l(c(b))}else if(a.iframe)l(" ");else if(a.html)f(a.html);else if(Z(b)){d=new Image;d.onload=function(){var q;d.onload=null;d.id="cboxPhoto";c(d).css({margin:"auto",border:"none",display:"block",cssFloat:"left"});if(a.scalePhotos){i=function(){d.height-=d.height* q;d.width-=d.width*q};if(a.mw&&d.width>a.mw){q=(d.width-a.mw)/d.width;i()}if(a.mh&&d.height>a.mh){q=(d.height-a.mh)/d.height;i()}}if(a.h)d.style.marginTop=Math.max(a.h-d.height,0)/2+"px";l(d);h.length>1&&c(d).css({cursor:"pointer"}).click(e.next);if(E)d.style.msInterpolationMode="bicubic"};d.src=b}else c("<div />").load(b,function(q,t){t==="success"?f(this):l(c("<p>Request unsuccessful.</p>"))})};e.next=function(){if(!I){k=k<h.length-1?k+1:0;e.load()}};e.prev=function(){if(!I){k=k>0?k-1:h.length- 1;e.load()}};e.slideshow=function(){var b,d,i="cboxSlideshow_";y.bind(aa,function(){y.unbind();clearTimeout(d);j.removeClass(i+"off "+i+"on")});function l(){y.text(a.slideshowStop).bind(P,function(){d=setTimeout(e.next,a.slideshowSpeed)}).bind(J,function(){clearTimeout(d)}).one("click",function(){b();c(this).removeClass(B)});j.removeClass(i+"off").addClass(i+"on")}b=function(){clearTimeout(d);y.text(a.slideshowStart).unbind(P+" "+J).one("click",function(){l();d=setTimeout(e.next,a.slideshowSpeed); c(this).removeClass(B)});j.removeClass(i+"on").addClass(i+"off")};if(a.slideshow&&h.length>1)a.slideshowAuto?l():b()};e.close=function(){c.event.trigger(Q);H=g;c().unbind("keydown.cbox_close keydown.cbox_arrows");r.unbind(R+" resize.cboxie6 scroll.cboxie6");u.css({cursor:"auto"}).fadeOut("fast");j.stop(o,g).fadeOut("fast",function(){n.remove();j.css({opacity:1});p.children().hide();c.event.trigger(aa)})};e.element=function(){return c(m)};e.settings=Y;c(e.init)})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
jQuery(function($) {
	$("a[rel^='lightbox']").colorbox({photo:true,slideshow:true,slideshowSpeed:4000,
	slideshowStart:'\u0421\u043B\u0430\u0439\u0434\u0448\u043E\u0443',
	slideshowStop:'\u041F\u0430\u0443\u0437\u0430',
	current:'\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 {current} \u0438\u0437 {total}'
	});
	$(".iframe").colorbox({width:400, height:270, iframe:true,opacity:0.3});
});