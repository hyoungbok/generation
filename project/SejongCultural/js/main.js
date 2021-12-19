$(function(){
    var mySlider = $('.social_img > ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 2000,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 300,  // 하나의 이미지 폭
		minSlides: 1, // 노출 최소 슬라이드 수
		maxSlides: 1, // 최대 노출 슬라이드 수
		slideMargin: 0,  // 슬라이드 이미지 간격
		auto: true, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".btn_so_left").on("click",function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$(".btn_so_right").on("click",function(){
		mySlider.goToNextSlide();
		return false;
	});
});


$(function(){
    /*family_site*/
    var mySlider = $('.family_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 300,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 230,  // 하나의 이미지 폭
		minSlides: 4, // 노출 최소 슬라이드 수
		maxSlides: 4, // 최대 노출 슬라이드 수
		slideMargin: 30,  // 슬라이드 이미지 간격
		auto: false, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".btn_fa_left").on("click",function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$(".btn_fa_right").on("click",function(){
		mySlider.goToNextSlide();
		return false;
	}); 
    
});

$(function(){
     /*related_site*/
     var mySlider = $('.related_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 300,  // 이동속도
		pager: false, // 페이지표시 
		moveSlides: 2,  // 이동 슬라이드 한개씩
		slideWidth: 230,  // 하나의 이미지 폭
		minSlides: 2, // 노출 최소 슬라이드 수
		maxSlides: 2, // 최대 노출 슬라이드 수
		slideMargin: 0,  // 슬라이드 이미지 간격
		auto: true, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".btn_rela_left").on("click",function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$(".btn_rela_right").on("click",function(){
		mySlider.goToNextSlide();
		return false;
	});
	
});

$(function(){
    $(".info").hide();
    $(".recomm_img> li").hover(function(){
        $(this).find(".info").css({"display":"block"},2000);
    },function(){
        $(this).find(".info").css({"display":"none"});
    });
    
});



$(function(){
	var tab=$("#contents_box01 .season_text > li");
	var content=$(".season_img>ul>li");
	tab.click(function(e){
		e.preventDefault();
		var tg=$(this);
		var tc=tg.find(">a");
		tab.find(">a").removeClass("on");
		tc.addClass("on");
		i=tg.index();
		
		content.css("display","none");
		content.eq(i).css("display","block");
	});
});






















