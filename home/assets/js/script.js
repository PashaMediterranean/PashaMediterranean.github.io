 /*--------------------------------------------------------------------- 
   West Park Bistro 
   Website designed by Flexible Web Design - http://www.flexiblewebdesign.com
 
   Copyright (C) 2013 FLEXIBLE WEB DESIGN
   http://flexiblewebdesign.com/
--------------------------------------------------------------------- */   

(function(h){var l=h("<img />").addClass("flexible-background"),m=h("<div />").addClass("flexible-loading"),a=h(),p=null,j=[],d=0,i=5000,o=function(){},b,e={init:function(r){var q={src:k(),align:"center",valign:"center",fade:0,loading:true,load:function(){},complete:function(){}};h.extend(q,h.flexible.defaults.background,r);if(q.loading){f()}var s=l.clone();s.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){if(s==a){return}h(window).bind("load resize.flexible",function(t){c(s,q)});if(a.is("img")){a.stop();s.hide().insertAfter(a).fadeIn(q.fade,function(){h(".flexible-background").not(this).remove();h("body").trigger("flexiblecomplete",[this,d-1]);q.complete.apply(s,[d-1])})}else{s.hide().prependTo("body").fadeIn(q.fade,function(){h("body").trigger("flexiblecomplete",[this,d-1]);q.complete.apply(this,[d-1])})}a=s;c(a,q);if(q.loading){g()}h("body").trigger("flexibleload",[a.get(0),d-1]);q.load.apply(a.get(0),[d-1]);if(d){h("body").trigger("flexiblewalk",[a.get(0),d-1]);q.walk.apply(a.get(0),[d-1])}}).attr("src",q.src);return h.flexible},destroy:function(q){if(!q||q=="background"){h(".flexible-background, .flexible-loading").remove();h(window).unbind("*.flexible");a=h()}clearInterval(b);return h.flexible},slideshow:function(s,q){var r={step:d,delay:i,preload:false,backgrounds:j,walk:o};h.extend(r,h.flexible.defaults.slideshow,s);if(r.backgrounds!=j){if(!s.step){r.step=0}if(!s.walk){r.walk=function(){}}if(r.preload){h.flexible("preload",r.backgrounds)}}j=r.backgrounds;i=r.delay;d=r.step;o=r.walk;clearInterval(b);if(!j.length){return h.flexible}var t=function(){if(d<0){d=j.length-1}if(d>=j.length||!j[d-1]){d=0}var u=j[d++];u.walk=r.walk;if(typeof u.fade=="undefined"){u.fade=r.fade}if(u.fade>r.delay){u.fade=r.delay}h.flexible(u)};t();if(!q){p=false;h("body").trigger("flexiblestart",[a.get(0),d-1])}if(!p){b=setInterval(t,r.delay)}return h.flexible},next:function(){var q=d;if(d){h.flexible("slideshow",{step:d},true);h("body").trigger("flexiblenext",[a.get(0),d-1,q-1])}return h.flexible},previous:function(){var q=d;if(d){h.flexible("slideshow",{step:d-2},true);h("body").trigger("flexibleprevious",[a.get(0),d-1,q-1])}return h.flexible},jump:function(q){var r=d;if(d){h.flexible("slideshow",{step:q},true);h("body").trigger("flexiblejump",[a.get(0),d-1,r-1])}return h.flexible},stop:function(){var q=d;d=0;p=null;clearInterval(b);h("body").trigger("flexiblestop",[a.get(0),q-1]);return h.flexible},pause:function(){p=true;clearInterval(b);h("body").trigger("flexiblepause",[a.get(0),d-1]);return h.flexible},get:function(q){if(q===null||q=="background"){return a.get(0)}if(q=="step"){return d-1}if(q=="paused"){return p}},preload:function(t){var r=[];for(var s in t){if(t[s].src){var q=document.createElement("img");q.src=t[s].src;r.push(q)}}return h.flexible}};function c(r,v){var E={align:"center",valign:"center"};h.extend(E,v);if(r.height()===0){r.load(function(){c(h(this),v)});return}var s=n(),y=s.width,t=s.height,w=r.width(),D=r.height(),u=t/y,B=D/w,x,q,C,A,z;if(u>B){x=t/B;q=t}else{x=y;q=y*B}z={width:x+"px",height:q+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"};if(!isNaN(parseInt(E.valign,10))){z.top=0-(q-t)/100*parseInt(E.valign,10)+"px"}else{if(E.valign=="top"){z.top=0}else{if(E.valign=="bottom"){z.bottom=0}else{z.top=(t-q)/2}}}if(!isNaN(parseInt(E.align,10))){z.left=0-(x-y)/100*parseInt(E.align,10)+"px"}else{if(E.align=="left"){z.left=0}else{if(E.align=="right"){z.right=0}else{z.left=(y-x)/2}}}r.css(z)}function f(){m.prependTo("body").fadeIn()}function g(){m.fadeOut("fast",function(){h(this).remove()})}function k(){if(h("body").css("backgroundImage")){return h("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1")}}function n(){var q=window,r="inner";if(!("innerWidth" in window)){q=document.documentElement||document.body;r="client"}return{width:q[r+"Width"],height:q[r+"Height"]}}h.flexible=function(q){if(e[q]){return e[q].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof q==="object"||!q){return e.init.apply(this,arguments)}else{h.error("Method "+q+" does not exist")}}};h.flexible.defaults={background:{},slideshow:{}}})(jQuery);

function slideSwitch() {
	if ($('.flexible-slideshow img.active').attr("rel") !== "single") {
    var $active = $('.flexible-slideshow img.active');
    if ( $active.length == 0 ) $active = $('.flexible-slideshow img:last');
    var $next =  $active.next().length ? $active.next()
        : $('.flexible-slideshow img:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
	}
}
$(function() {
    var int = setInterval( "slideSwitch()", 3000 );
	$("#menu li a.item").click(function() {
			clearInterval(int);
  			setTimeout(function() {
  				int = setInterval( "slideSwitch()", 3000 );
  			});
	});
});

jQuery(function($) {
$(document).ready(function() {  
    $(function() {
    	$.flexible( 'slideshow', {
		delay: 8000,
		backgrounds: [
			{ src: 'assets/images/background_1.jpg', fade: 2000 },
			{ src: 'assets/images/background_2.jpg', fade: 2000 },
			{ src: 'assets/images/background_3.jpg', fade: 2000 },
			{ src: 'assets/images/background_4.jpg', fade: 2000 },
			{ src: 'assets/images/background_5.jpg', fade: 2000 },
			{ src: 'assets/images/background_6.jpg', fade: 2000 }
		]
		});
    });
	var content = $('#content-right');
	var rightContent = $('.right-content');
	$("#menu li a.item").not($("#menu li a.item.virtual")).click(function() {
		var ClickedLink = $(this).attr("rel");
		$("#menu li a.item").removeClass("active");
		$(this).addClass("active");
		if (!(content.hasClass("scrolled")) && ClickedLink != "#menus") {
		 $(".article").fadeOut(200)
		 rightContent.animate({
			opacity:1,
			width: "400",
			}, 1000, function() {
				
				$(ClickedLink).fadeIn("fast");
			});
			content.addClass("scrolled");
			$(".notification").fadeOut("fast");
		} else if (ClickedLink == "#menus") {
			$(".article").fadeOut(0);
			$(".notification").fadeOut("fast");
			rightContent.animate({
			opacity:1,
			width: "400",
			}, 1000, function() {
				$(ClickedLink).delay(100).fadeIn("fast");
			});
			content.removeClass("scrolled");
			
		} else {
			$(".article").fadeOut(200);
			$(ClickedLink).delay(200).fadeIn(500);	
		}
		
	});
	$(".right-close").click(function() {
		content.removeClass("scrolled");
		$('.right-content .article').fadeOut(200);
		setTimeout(function () {
			rightContent.animate({
				opacity:0,
				width: "0",
				}, 1000);
				
		}, 201);
		$(".notification").delay(1000).fadeIn("fast");
	});
	$(".notification-close").click(function() {
		$(".notification").fadeOut("fast");
	});
	$("#menu li a.item.privatedining").click(function() {
		 	$(".flexible-slideshow img").remove();
			$(".flexible-slideshow").hide().append("<img src='assets/slideshow/privatedining/slide1.jpg' rel='single' class='active' />").fadeIn(1500);
	});
	$("#menu li a.item.menus").click(function() {
		 	$(".flexible-slideshow img").remove();
			$(".flexible-slideshow").hide().append("<img src='assets/slideshow/menus/slide1.jpg' class='active' />").fadeIn(1500);
			$(".flexible-slideshow").append("<img src='assets/slideshow/menus/slide2.jpg' />");
			$(".flexible-slideshow").append("<img src='assets/slideshow/menus/slide3.jpg' />");
	});
	$("#menu li a.item.therestaurant").click(function() {
		 	$(".flexible-slideshow img").remove();
			$(".flexible-slideshow").hide().append("<img src='assets/slideshow/frontpage/slide1.jpg' class='active' />").fadeIn(1500);
			$(".flexible-slideshow").append("<img src='assets/slideshow/frontpage/slide2.jpg' />");
			$(".flexible-slideshow").append("<img src='assets/slideshow/frontpage/slide3.jpg' />");
	});
	$(".fancybox").fancybox({
		prevEffect	: 'elastic',
		nextEffect	: 'elastic',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 150,
				height	: 84
			}
		}
	});	
	$( "#accordion" ).accordion({heightStyle: "content", active: false, collapsible: true });
});
});	

jQuery(function($) {
  $('.js-form-order form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url:$(this).attr('action'),
      data:$(this).serialize(),
      dataType:'json',
      method:'post',
      success:function(data){
        $('.js-input').removeClass('form__input--error');
        if (data.status==0){
          if (data.errors!=null)
            $.each(data.errors,function(d,i){
              $('[name="'+data.class+'['+d+']"').addClass('form__input--error');
            });
        } else {
          $('.js-form-order form').html('Your message successfully sent. You will be contacted asap.');
        }
      },
      error:function(data){
        if (confirm('Your order can not be send at the moment. Please retry after a while or please send your email via email'))
          window.location.reload();
      }
    })
  });
$(window).load(function() {  
var hash = window.location.hash.substring(1);
	if (hash) {
		$("#menu li a.item."+hash).trigger( "click" );	
	}
});
});