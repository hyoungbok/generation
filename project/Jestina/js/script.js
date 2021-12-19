$(function(){
    var tab = $("#content .content_sub > ul li");
    tab.click(function(e){
        e.preventDefault();
        var tg = $(this);
		var tc = tg.find(">a");
		tab.find(">a").removeClass("on");
		tc.addClass("on");
    });
    
    var tab2 = $("#content .content_main > ul li");
    tab2.click(function(e){
        e.preventDefault();
        var tg1 = $(this);
		var tc1 = tg1.find(">a");
		tab2.find(">a").removeClass("on");
		tc1.addClass("on");
    });
    
    var tab3 = $("#content .c_main_menu > ul li");
	var content=$(".content_banner>.Cmain>div");
    tab3.click(function(e){
        content.fadeIn(500);
        e.preventDefault();
        var tg2 = $(this);
		var tc2 = tg2.find(">a");
		tab3.find(">a").removeClass("on");
		tc2.addClass("on");
        i=tg2.index();
		
		content.css("display","none");
		content.eq(i).css("display","block");
        
    });
    $(".sub_menu > ul > li.login > a").on("click",function(){
        $("#login_f").animate({top:"10px"},500);
        $(".login").css({fontWeight:"bold"});
        return false;
    });
    $(".login_close_btn, input[alt='login']").on("click",function(){
        $("#login_f").animate({top:"-500px"},500);
         $(".login").css({fontWeight:"normal"});
		return false;
    });
    var btn = $(".content_main ul a").click(function(){
        $(".content_shop ul li").hide();
        if(this.id=="all"){
            $(".content_shop ul li").fadeIn(200);
        } else {
            var el = $("."+this.id).fadeIn(200);
            $(".content_shop ul li").not(el).hide(200);
        }
        btn.removeClass("on");
        $(this).addClass("on");
        return false;
    });
    
    
    
    
  
    if (matchMedia("screen and (max-width: 880px)").matches)  {
        var mySlider1 = $('.review_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 800,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 300,  // 하나의 이미지 폭
		minSlides: 2, // 노출 최소 슬라이드 수
		maxSlides: 2, // 최대 노출 슬라이드 수
		slideMargin: 30,  // 슬라이드 이미지 간격
		auto: false, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".review_left").on("click",function(){
		mySlider1.goToPrevSlide();
		return false;
	});
	$(".review_right").on("click",function(){
		mySlider1.goToNextSlide();
		return false;
	});
    
    
     var mySlider = $('.magazin_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 400,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 400,  // 하나의 이미지 폭
		minSlides: 2, // 노출 최소 슬라이드 수
		maxSlides: 2, // 최대 노출 슬라이드 수
		slideMargin: 50,  // 슬라이드 이미지 간격
		auto: true, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".magazin_left").on("click",function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$(".magazin_right").on("click",function(){
		mySlider.goToNextSlide();
		return false;
	});
        
    } else if (matchMedia("screen and (max-width: 1100px)").matches) {
        var mySlider1 = $('.review_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 800,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 240,  // 하나의 이미지 폭
		minSlides: 3, // 노출 최소 슬라이드 수
		maxSlides: 3, // 최대 노출 슬라이드 수
		slideMargin: 30,  // 슬라이드 이미지 간격
		auto: true, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".review_left").on("click",function(){
		mySlider1.goToPrevSlide();
		return false;
	});
	$(".review_right").on("click",function(){
		mySlider1.goToNextSlide();
		return false;
	});
    
    
     var mySlider = $('.magazin_img ul').bxSlider({
		mode : 'horizontal', // 수평방향으로 이동
		speed : 400,  // 이동속도
		pager:false, // 페이지표시 
		moveSlides: 1,  // 이동 슬라이드 한개씩
		slideWidth: 350,  // 하나의 이미지 폭
		minSlides: 3, // 노출 최소 슬라이드 수
		maxSlides: 3, // 최대 노출 슬라이드 수
		slideMargin: 20,  // 슬라이드 이미지 간격
		auto: true, // 마우스 오버시 자동 정지
		controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
	});
	$(".magazin_left").on("click",function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$(".magazin_right").on("click",function(){
		mySlider.goToNextSlide();
		return false;
	});
        
    } else {
        
        var mySlider1 = $('.review_img ul').bxSlider({
            mode : 'horizontal', // 수평방향으로 이동
            speed : 800,  // 이동속도
            pager:false, // 페이지표시 
            moveSlides: 1,  // 이동 슬라이드 한개씩
            slideWidth: 280,  // 하나의 이미지 폭
            minSlides: 4, // 노출 최소 슬라이드 수
            maxSlides: 4, // 최대 노출 슬라이드 수
            slideMargin: 20,  // 슬라이드 이미지 간격
            auto: true, // 마우스 오버시 자동 정지
            controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
        });
        $(".review_left").on("click",function(){
            mySlider1.goToPrevSlide();
            return false;
        });
        $(".review_right").on("click",function(){
            mySlider1.goToNextSlide();
            return false;
        });


         var mySlider = $('.magazin_img ul').bxSlider({
            mode : 'horizontal', // 수평방향으로 이동
            speed : 400,  // 이동속도
            pager:false, // 페이지표시 
            moveSlides: 1,  // 이동 슬라이드 한개씩
            slideWidth: 305,  // 하나의 이미지 폭
            minSlides: 4, // 노출 최소 슬라이드 수
            maxSlides: 4, // 최대 노출 슬라이드 수
            slideMargin: 20,  // 슬라이드 이미지 간격
            auto: true, // 마우스 오버시 자동 정지
            controls : false // 이전 다음 버튼 숨김(아래 따로 코딩)
        });
        $(".magazin_left").on("click",function(){
            mySlider.goToPrevSlide();
            return false;
        });
        $(".magazin_right").on("click",function(){
            mySlider.goToNextSlide();
            return false;
        });

    }
    
    
    
});