jQuery(document).ready(function(){

	/* 로그인버튼 */
	$(".login_wrap>a").on("click",function(){
		$("#login_f").animate({top:"20px"},500);
		return false;
	});
	$(".login_wrap .login_close_btn, input[alt='login']").on("click",function(){
		$("#login_f").animate({top:"-500px"},500);
		return false;
	});
	/* 로그인창 가이드테스트 */
	
	$("#user_id, #user_pw" ).on("focus",function(){
		$(this).prev().css("left","-9999px");
	});/* #user_id, #user_pw  를포커스하면 prev(바로위의 lable img)를 css작동 */
	
	$("#user_id, #user_pw" ).on("blur",function(){
		if($(this).val()==""){$(this).prev().css("left","2px");}
	});
	
	/* top 이벤트배너 */
	$("#top_event").find(".close_btn").on("click",function(){
		$("#top_event").slideUp();
	});
	
	/* zoom 버튼 */
	var base = 100;
	var mybody = $("body");
	$("#zoom a").on("click",function(){
		var zNum = $("#zoom a").index(this);
		if(zNum==0){
			base+= 10;
		}else if(zNum==1){
			base= 100;
		}else {
			base-= 10;
		}
		mybody.css("overflow-y","auto")
		.css("transform-origin","50% 0")
		.css("transform","scale("+base/100+")")
		.css("zoom",base+"%");
		return false;
	});
	
	/* 인쇄버튼 */
	$(".print_btn").on("click",function(){
		window.print();
		return false;
	});
	
	/* 검색 창 안내 가이드 */
	$("#keyword").on("focus",function(){
		$(this).css("background-position","0 -500px")
	}).on("blur",function(){
		if($(this).val()==""){$(this).css("background-position","0 0px");}
	});
	
	/* 전체메뉴 */
	$("#total_btn a").on("click",function(){
		$("#total_menu").slideDown();
		return false;
	});

	/* 전체 메뉴 닫기 버튼 */
	$("#total_close a").on("click",function(){
		$("#total_menu").stop().slideUp();
		return false;
	});
	
	/* 날짜표기 */
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	$("#date_wrap .year").text(y);
	$("#date_wrap .month").text(m+1);
	$("#date_wrap .date").text(d);
	
	/* 관련사이트 이동 *//* 	$("form[name=rem_f]") ===541라인 */
	$("form[name=rel_f]").on("submit",function(){
		var url = $("select",this).val();
		window.open(url);
		return false;
	}); 
	

	/* 퀵메뉴 */ /* parseInt 문자열을 숫차열로 만들어주는거 */
	var defaultTop = parseInt($("#quick_menu").css("top")); //defaultTop = 176px; (css안에 내용임.) 641=(456+176)
	$(window).on("scroll",function(){
		var scv = $(window).scrollTop();
		if(scv < 465){scv = 465} //퀵바의 높이
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);//641=(456+176)
	});
	$("#quick_menu").css({top:"641px"},1000);
});











































