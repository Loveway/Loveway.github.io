NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not(":hidden").each(function(){var t=$(this),e=t.attr("title")||t.attr("alt"),i=t.parent("a");if(i.length<1){var a=t.attr("data-original")||t.attr("src");i=t.wrap('<a class="fancybox fancybox.image" href="'+a+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a"),t.is(".post-gallery img")?(i.addClass("post-gallery-img"),i.attr("data-fancybox","gallery").attr("rel","gallery")):t.is(".group-picture img")?i.attr("data-fancybox","group").attr("rel","group"):i.attr("data-fancybox","default").attr("rel","default")}e&&(i.append('<p class="image-caption">'+e+"</p>"),i.attr("title",e).attr("data-caption",e))}),$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var e=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var t=location.hash;""===t||t.match(/%\S{2}/)||($(e+'li:has(a[href="'+t+'"])').addClass("active").siblings().removeClass("active"),$(t).addClass("active").siblings().removeClass("active"))}).trigger("hashchange")}),$(e+".tab").on("click",function(t){if(t.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active"),""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}})},registerESCKeyEvent:function(){$(document).on("keyup",function(t){27===t.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var a=$(".back-to-top");function t(){a.toggleClass("back-to-top-on",50<window.pageYOffset);var t=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),e=Math.round(100*t),i=100<e?100:e;$("#scrollpercent>span").html(i)}$(window).on("load",function(){t()}),$(window).on("scroll",function(){t()}),a.on("click",function(){$.isFunction($("html").velocity)?$("body").velocity("scroll"):$("html, body").animate({scrollTop:0})})},embeddedVideoTransformer:function(){var t=$("iframe"),s=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function r(t){return{width:t.width(),height:t.height()}}function c(t,e){return e/t*100}t.each(function(){var t,e=this,i=$(this),a=r(i);if(0<this.src.search(s)){var n=c(a.width,a.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var o=document.createElement("div");if(o.className="fluid-vids",o.style.position="relative",o.style.marginBottom="20px",o.style.width="100%",o.style.paddingTop=n+"%",""===o.style.paddingTop&&(o.style.paddingTop="50%"),e.parentNode.insertBefore(o,e),o.appendChild(e),0<this.src.search("music.163.com"))((t=r(i)).width>a.width||t.height<a.height)&&(o.style.paddingTop=c(t.width,a.height)+"%")}})},hasMobileUA:function(){var t=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(t){return t.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMuse:function(){return"Muse"===CONFIG.scheme},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var t=$("<div />").addClass("scrollbar-measure").prependTo("body"),e=t[0],i=e.offsetWidth-e.clientWidth;return t.remove(),i},getContentVisibilityHeight:function(){var t=$(".container").height(),e=$(window).height();return e<t?t-e:$(document).height()-e},getSidebarb2tHeight:function(){return CONFIG.back2top&&CONFIG.back2top_sidebar?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var t="block"===$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,e=$(".sidebar-inner"),i=e.innerWidth()-e.width(),a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;return this.isPisces()||this.isGemini()?2*i+t+a+this.getSidebarb2tHeight():2*i+t/2}},$(document).ready(function(){function i(t){t=t||"auto",$(".site-overview, .post-toc").css("max-height",t)}!function(){var t;$(window).on("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){i(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())},0)});var e=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+e+"px)"),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+e+"px)"),i(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}(),$("table").not(".gist table").wrap('<div class="table-container"></div>')});