// 스크롤하면 해더에 밑줄

$(function () {
	$(window).on("scroll",function(){
		let scr = $(window).scrollTop();
		let menu = $("#header");
		if(scr>=1){
			menu.css({borderBottom:"2px solid #ff8888"});
		}else{
			menu.css({borderBottom:"none"});
		}
	})
})


// 모바일 햄버거버튼 오픈 클로즈

$(function(){
	let isClick = false;
	$("#mo_btn>button").click(function(){
		if(!isClick){
			$("#menu").stop().slideToggle()
			$("#mo_btn>button").addClass("close")
			$("#menu>ul>li").click(()=>{
				$("#menu").stop().fadeOut()
				$("#mo_btn>button").removeClass("close")
				isClick =false;
			})
			isClick = true;
		}else{
			$("#menu").stop().fadeOut()
			$("#mo_btn>button").removeClass("close")
			isClick = false;
		}
	})
})


// 메뉴 클릭시 이동 & 사이드탭 클릭시 이동
$(function(){
	let options = { 
		'speed' : 500, 
		// 스피드
		'initTop': 250, 
		// 기본 top 위치
		'alwaysTop' : false, 
		// 항상고정 true , false 이동
		'default_x' : '#float_side' 
		//레어아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	$('#float_side').Floater(options);
	/* 퀵바버튼  */
	$("#btn01").click(function(){
		$("html, body").animate({scrollTop:$("#banner").offset().top-0},800);
	});
	$("#btn02").click(function(){
		$("html, body").animate({scrollTop:$("#about").offset().top-0},800);
	});
	$("#btn03").click(function(){
		$("html, body").animate({scrollTop:$("#skills").offset().top-0},800);
	});
	$("#btn04").click(function(){
		$("html, body").animate({scrollTop:$("#portfolio").offset().top-0},800);
	});
	$("#btn05").click(function(){
		$("html, body").animate({scrollTop:$("#contact").offset().top-0},800);
	});

	let menu = $("#menu > ul > li");
  let content = $("#container > div");
	let btn = $("#float_side ul li");
  menu.click(function(e){
		e.preventDefault();/* 휴레프 차단 */
		let tg=$(this);
		let i=tg.index();

		let section=content.eq(i);
		let tt=section.offset().top;
		$("html,body").stop().animate({scrollTop:tt},1000);
  });
  $(window).scroll(function(){
		let sct=$(window).scrollTop();		
		content.each(function(){
			let tg=$(this);
			let i=tg.index();
			if(tg.offset().top <= sct+50){
				menu.find(">a").removeClass("on");
				menu.find(">a").eq(i).addClass("on");
				btn.removeClass("active");
				btn.eq(i).addClass("active");
			}
		});
  })
});


// 오픈했을때 베너 텍스트 오파시티로 보임

$(function(){
	const text01 = $(".banner_text> .text01");
	const text02 = $(".banner_text> .text02");
	const text03 = $(".banner_text> .text03");
	const boxLine = $("#banner_wrap .banner_box");
	text01.css("display","none");
	text02.css("display","none");
	text03.css({position:"absolute", bottom:"-200px", opacity:"0"});
	boxLine.css("display","none");
	setTimeout(()=>{
		$(text01).fadeIn(500)
	}, 500)
	setTimeout(()=>{
		$(text02).fadeIn(800)
	}, 1200)
	setTimeout(()=>{
		$(boxLine).fadeIn(800)
	},1800)
	setTimeout(()=>{
		$(text03).css({opacity:"1", bottom:"-50px", transition:"2s"})
	}, 2800)
});


// 클리하시 밑으로 이동 버튼
$(function(){
	$(".scroll>.scroll_img>img").DB_springMove({
			key:"c65806",
			dir:"y",
			mirror:1,
			radius:6,
			motionSpeed:0.1
	});
	$(".scroll_img").on("click",function(){
			$("html,body").animate({
					scrollTop:$('#about').offset().top
			},1000);
	});
});


// 프로파일 구간 들어오면 이동해 내용 보임
$(function(){
	let aboutImg = $(".about_img")
	let aboutText = $(".about_menu")

	
	$(window).on("scroll", function(){
		let win = $(window).scrollTop()
		let aboutCont = $("#about")
		let aboutOffset = aboutCont.offset().top
		let winWidth = $(window).width()
		if(winWidth <= 660){
			aboutImg.css({left:"-100%", position:"relative"})
			aboutText.css({left:"-100%", position:"relative"})
			if(win >= aboutOffset-100){
				aboutImg.css({left:"0", transition:"2s", opacity:"1"})
			} else {
				aboutImg.css({left:"-100%", transition:"2s", opacity:"0"}); 
			}
			if(win >= aboutOffset+150){
				aboutText.css({left:"0", transition:"2s", opacity:"1"})	
			}else {
				aboutText.css({left:"-100%", transition:"2s", opacity:"0"}); 
			}
		} else {
			aboutImg.css({left:"-100%", position:"relative"})
			aboutText.css({left:"100%", position:"relative"})
			if(win >= aboutOffset-200){
				aboutImg.css({left:"0", transition:"2s", opacity:"1"})	
				aboutText.css({left:"0", transition:"2s", opacity:"1"})			
			} else {
				aboutImg.css({left:"-100%", transition:"2s", opacity:"0"}); 
				aboutText.css({left:"100%", transition:"2s", opacity:"0"});    
			}

		}
	})
})




// 프로필 클릭시 내용 이동

$(function(){
	let isCreate = false;
	let aboutTab = $(".about_tap > ul > li");
	let aboutContent = $(".about_panel > div");

	aboutTab.click(function(e){
		e.preventDefault();
		if (isCreate) return;

		let a_tg = $(this);
		let a_tc = a_tg.find(">a");
		aboutTab.find(">a").removeClass("on");
		a_tc.addClass("on");
		i = a_tg.index();
		aboutContent.css("top","800px");
		aboutContent.eq(i).animate({top:"0px"}, 1000);
	});
});


$(function(){	
  let win = $(window);
  let chartBool = true;

  win.on('scroll',$.throttle(1000/15,function(){
    let ts = $(this)
    let sct = ts.scrollTop();
    let s_content = $(".skills_graph");
    let charts = s_content.find(".skill");
    
		var skillOffsetTop=charts.offset().top;

    if(sct >= skillOffsetTop-800){
      if(chartBool){
        charts.each(function(i){
          let chart = $(this);
          let chartBar = chart.find(".graph_color").css({width:'0%'});
          let percentNumber = chart.find(".skill_p .num");
          let percentData = percentNumber.text();
          percentNumber.text(0);
          $({percent:0}).delay(150*i).animate({percent:percentData},{
            duration: 1000,
            progress: function(){
              let now = this.percent;
              chartBar.css({width:now+'%'});
              percentNumber.text(Math.floor(now));
            }
          })
        })
      }
      chartBool = false;
    
    } else {
      chartBool = true;
    }
  }))
});


$(function(){
	let portBtn = $(".portfolio_tab a").click(function(e){
    e.preventDefault();
    $(".portfolio_box ul li").hide();
    if(this.id=="all"){
      $(".portfolio_box ul li").fadeIn(1200);
    } else {
      let el = $("."+this.id).fadeIn(1200);
      $(".portfolio_box ul li").not(el).hide(1200)
    }
    portBtn.removeClass("on")
    $(this).addClass("on")
    return false
  })
})


$(function(){
	$(".float_type").typed({
		strings:["Lee Hyoung-bok", "010-6455-7159"],
		typeSpeed:100,
		backDelay:200, /**/
		loop:true  //반복안함-false
	})
	
	$(".typed-cursor").css({display:"none"})
});