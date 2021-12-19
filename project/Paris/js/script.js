$(function(){
	var visual =$("#img_bn_area>ul>li");
	var leftBtn=$(".btnImg .prev");
	var rightBtn=$(".btnImg .next");
	var button=$(".buttonList>li");
	var current=0;
	var setIntervalId;
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index();
		button.removeClass("on");
		tg.addClass("on");
		move(i)
		}
	});
	/* 원형 버튼눌렀을때 사진이동 */
	function move(i){
		if(current==i){
			return;
		}
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:"-100%"});
		nextEl.css({left:"100%"}).stop().animate({left:0});
		
		current=i;
	}
	// 이미지 슬라이드
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move1(prev,0,"-100%");
			pn.removeClass("on");
			current++;
			if(current==visual.size()){
				current=0;
			}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move1(next,"100%",0);
			pnn.addClass("on");
		},3500);
	}
	function move1(tg,start,end){
		tg.css("left",start).stop().animate({left:end},
			{duration:500,ease:"easeOutCubic"});
	}
	timer();

	/* 화살표 */
	rightBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move1(prev,0,"-100%");
		pn.removeClass("on");
		current++;
		if(current==visual.size()){
			current=0;
		}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move1(next,"100%",0);
		pnn.addClass("on");
		return false;
	});
	leftBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move1(prev,0,"100%");
		pn.removeClass("on");
		current--;
		if(current==-visual.size()){
			current=0;
		}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move1(next,"-100%",0);
		pnn.addClass("on");
		return false;
	});
	
	/* 마우스 올리면 멈춤 */
	$("#banner").hover(function(){
		clearInterval(setIntervalId);
	},function(){
		timer();
	})
});