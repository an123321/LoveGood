jQuery(function(){
//选项卡滑动切换通用
jQuery(function(){jQuery(".hoverTag .chgBtn").hover(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).fadeIn(200).siblings(".chgCon").hide()})})

//选项卡点击切换通用
jQuery(function(){jQuery(".clickTag .chgBtn").click(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).fadeIn(200).siblings(".chgCon").hide()})})

jQuery(".keAutoFocus").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});

//导航
$(".navBox li").hover(function(){
	$(this).addClass("on");
	if($(this).find(".subMenu").size()>0){
		$(".nav").animate({"height":"95px"},300);
		$(".subMenu").css("left",$(this).offset().left-171);
		$(this).find(".subMenu").stop(false,true).fadeIn(300);
		}
    },function(){
		$(this).removeClass("on");
		$(".nav").animate({"height":"38px"},300);
		$(this).find(".subMenu").stop(false,true).fadeOut(300);
		}
	);
	
jQuery(".hmc1_change").slide({effect:"fold"});

//百度分享
_bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "css/share.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];

})
//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});