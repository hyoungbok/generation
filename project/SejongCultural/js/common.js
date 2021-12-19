$(function(){
	var visual=$(".slider_img .main_img>ul>li");
	var button=$(".sub_img>ul>li");
	var leftBtn=$(".sub_img .sub_left");
	var rightBtn=$(".sub_img .sub_right");
	var current=0;
	var setIntervalId;
	
		
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index();
		button.removeClass("active");
		tg.addClass("active");
		move(i)
	}
	});
	
	/* 원형 버튼눌렀을때 사진이동 */
	function move(i){
		if(current==i){
			return false;
		}
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:"-100%"});
		nextEl.css({left:"100%"}).stop().animate({left:0});
		current=i;
	}
	
	/* 자동으로 움직임 */
	function timer(){
		
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move1(prev,0,"-100%");
			pn.removeClass("active");
			current++;
			if(current==visual.size()){
				current=0;
			}
			
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move1(next,"100%",0);
			pnn.addClass("active");
			
		},4000);
	}
	function move1(tg,start,end){
		tg.css("left",start).stop().animate({left:end},{duration:500,ease:"easeOutCubic"});
	}
	timer();
	/* 화살표 */
	rightBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move1(prev,0,"-100%");
		pn.removeClass("active");
		current++;
		if(current==visual.size()){
			current=0;
		}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move1(next,"100%",0);
		pnn.addClass("active");
		return false;
	});
	leftBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move1(prev,0,"100%");
		pn.removeClass("active");
		current--;
		if(current==-visual.size()){
			current=0;
		}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move1(next,"-100%",0);
		pnn.addClass("active");
		return false;
	});
	
	
	/* 마우스 올리면 멈춤 */
	$("#main_slider").hover(function(){
		clearInterval(setIntervalId);
	},function(){
		timer();
	});
});

