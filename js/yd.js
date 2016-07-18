var nowIndex = 0;
var theTimer = 0;
var length =0;
var partners=0;
$(function(){
	//显示大图
	$('.cases_list li').click(function(){
		//var background_img =$(this).css("background");
		//var big_img_path =background_img.substring(background_img.indexOf('images/'),background_img.indexOf('.png'))+'_big.jpg';
		var big_img_path =$(this).find('img').attr('src').replace('.png','_big.jpg');
		$('.big_img img').attr('src',big_img_path);
		$('.big_img').fadeIn(500);
	});
	//关闭大图
	$('.big_img a').click(function(){
		$('.big_img').fadeOut(200);
	});
	//轮播效果
	length =$(".banner li").length;//轮播图片数量
	ad_show();

	//上一张
	$('.banenr_left a').click(function(){
		nowIndex -=1;
		if(nowIndex*1<0){
			nowIndex =length-1;
		}
		$('.banner li').eq(nowIndex).show().siblings().hide();
	});

	//下一张
	$('.banenr_right a').click(function(){
		nowIndex +=1;
		if(nowIndex*1==length*1){
			nowIndex =0;
		}
		$('.banner li').eq(nowIndex).show().siblings().hide();
	});



	//经典案例切换
	$('.casemenu li').click(function(){
		$(this).parent().parent().find('ul').hide();
		$(this).parent().parent().find('ul').eq(0).show();
		$(this).parent().parent().find('ul').eq($(this).index()+1).show();
	});
	//点击返回顶部
	$('.goto_top img').click(function(){
		$("html,body").animate({scrollTop:$("#rerewrwe").offset().top},1000);
	});
	//合作企业
	partners =$(".partner_mian li").length;
	//合作企业右边滚
	$('.arrowright').click(function(){
		var partners_html='';
		partners_html +='<li>'+$('.partner_mian li').eq(partners-1).html()+'</li>';
		for(var i=0;i<partners-1;i++){
			partners_html +='<li>'+$('.partner_mian li').eq(i).html()+'</li>';
		}
		$('.partner_mian ul').empty().append(partners_html);
	});
	//合作企业左边滚
	$('.arrowleft').click(function(){
		var partners_html='';
		for(var i=1;i<partners;i++){
			partners_html +='<li>'+$('.partner_mian li').eq(i).html()+'</li>';
		}
		partners_html +='<li>'+$('.partner_mian li').eq(0).html()+'</li>';
		$('.partner_mian ul').empty().append(partners_html);
	});
	//站内描点
	$('.menu li').click(function(){
		if($(this).index() ==0){
			$("html,body").animate({scrollTop:$("#rerewrwe").offset().top},1000);
		}
		if($(this).index() ==1){
			$("html,body").animate({scrollTop:$("#rerewrwe").offset().top},1000);
		}
		if($(this).index() ==2){
			$("html,body").animate({scrollTop:$("#cases").offset().top},1000);
		}
		if($(this).index() ==3){
			$("html,body").animate({scrollTop:$("#server").offset().top},1000);
		}
		if($(this).index() ==4){
			$("html,body").animate({scrollTop:$("#footer").offset().top},1000);
		}
	});


});

//定时轮播广告图
function ad_show() {
	clearTimeout(theTimer);
	if(nowIndex*1==length*1){
		nowIndex =0;
	}
	$('.banner li').eq(nowIndex).show().siblings().hide();
	nowIndex +=1;
    theTimer = setTimeout('ad_show()', 3000);
}


