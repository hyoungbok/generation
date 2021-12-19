 
function mouseHover(){
  const menus = $(".sub_nav > ul > li")  
  menus.hover(function(){
    const tg = $(this);
    const contents = tg.find(">div");
    tg.css({color:"#00b050",height:"50px",backgroundColor:"#2c2a29" })
    contents.css({display:"block", marginTop:"10px"});
  },function(){
    const tg = $(this);
    const contents = tg.find(">div");
    tg.css({
      "color": "#000000",
      "height":"50px",
      "backgroundColor":""
  })
    contents.css("display","none");

  })
}

function displayNone(){
  const mainLogo = $(".main_visual_logo>img")
  const mainImg = $(".main_visual_set>.visual_set>img")
  const mainBtn = $(".main_visual_btn")
  mainImg.css("display", "none")
  mainLogo.css("display", "none")
  mainBtn.css("display", "none")
}

function MainShowImg(){
  setTimeout(() => {
        $(".main_visual_logo>img").fadeIn(500)
  }, 500);
  setTimeout(() => {    
    $(".main_visual_set>.visual_set01>img").fadeIn(500)
  }, 1200);
  setTimeout(() => {    
  $(".main_visual_set>.visual_set02>img").fadeIn(500)
  }, 1900);
  setTimeout(() => {
    $(".main_visual_set>.visual_set03>img").fadeIn(500)    
  }, 2600);
  setTimeout(() => {
    $(".main_visual_btn").fadeIn(500)
  }, 3000);
}

function noticeSlide(){
  const banner=$(".line_notice_left li");
	let current=0;
	
	setInterval(function(){ 
		const prev=banner.eq(current);
		move(prev,0,"-100%");
		current++;
		if(current==banner.size()){
			current=0;
		}
		let next=banner.eq(current);
		move(next,"100%",0);
	},1500);
	
	function move(tg,start,end){
		tg.css("top",start).stop().animate({top:end},{duration:500,ease:"easeOutCubic"});
		
	}
}


function slideShowBtn(){
    const notice_btn = $(".line_notice_right > a");
    const slide_contents = $(".line_notice_slide");
    let state = 0;
    notice_btn.on("click", function(e){
        e.preventDefault();
        if(state == 0){
            state = 1;
            $(this).find("img").addClass("on");
            slide_contents.slideToggle(500);
        } else {
            state = 0;
            $(this).find("img").removeClass("on");
            slide_contents.slideToggle(500);            
        }
    })
}

function slideImg(){
  let visual = $(".notice_slide_img>ul>li")
  let leftBtn = $(".notice_slide_arrow .left")
  let rightBtn = $(".notice_slide_arrow .right")
  let button = $(".notice_slide_num > ul > li")
  let current = 0;
  let setIntervalId;
    
  
    
	// 이미지 슬라이드
	function timer(){
		setIntervalId=setInterval(function(){
			let prev=visual.eq(current);
			let pn=button.eq(current);
            
			move1(prev,"-140px","-150%");
			pn.removeClass("on");
			current++;
			if(current==visual.size()){
				current=0;
			}
			let next=visual.eq(current);
			let pnn=button.eq(current);
			move1(next,"150%","140px");
			pnn.addClass("on");
		},2500);
        
	}
    
    
    
	function move1(tg,start,end){
		tg.css("left",start).stop().animate({left:end},
			{duration:500,ease:"easeOutCubic"});
	};
	timer();

	/* 화살표 */
	rightBtn.click(function(){
		let prev=visual.eq(current);
		let pn=button.eq(current);
		move1(prev,"-140px","-150%");
		pn.removeClass("on");
		current++;
		if(current==visual.size()){
			current=0;
		}
		let next=visual.eq(current);
		let pnn=button.eq(current);
		move1(next,"150%","140px");
		pnn.addClass("on");
		return false;
	});
	leftBtn.click(function(){
        
		let prev=visual.eq(current);
		let pn=button.eq(current);
		move1(prev,"-140px","150%");
		pn.removeClass("on");
		current--;
		if(current==-visual.size()){
			current=0;
		}
        
		let next=visual.eq(current);
		let pnn=button.eq(current);
		move1(next,"-150%","140px");
		pnn.addClass("on");
		return false;
	});
	
    button.on({click:function(e){
    e.preventDefault();
    let tg=$(this);
    let i=tg.index();
    button.removeClass("on");
    tg.addClass("on");
    move(i)
    }});
	/* 원형 버튼눌렀을때 사진이동 */
	function move(i){
		if(current==i){
			return;
		}
		let currentEl=visual.eq(current);
		let nextEl=visual.eq(i);
		currentEl.css({left:"-140px"}).stop().animate({left:"-100%"});
		nextEl.css({left:"100%"}).stop().animate({left:"140px"});
		current=i;
	}
    
	/* 마우스 올리면 멈춤 */
	$(".notice_slide_img").hover(function(){
		clearInterval(setIntervalId);
	},function(){
		timer();
	});


}



function scroll_beans(){
    const beanImg = $(".bean_img");
    const beanText = $(".bean_text");

    beanImg.css({opacity:"0", left:"-800px"});    
    beanText.css({opacity:"0", left:"800px", position:"relative"});
    
    $(window).on("scroll", function(){
      const win = $(window).scrollTop()
      const contentsBean = $(".bean_wrap");
      const beanOffset = contentsBean.offset().top;


      if(win > beanOffset-400){
        beanImg.css({left:"100px", opacity:"1", transition:"2s"})
        beanText.css({left:"0px", opacity:"1", transition:"2s"})
      } else {
        beanImg.css({opacity:"0", left:"-800px", transition:"1s"});    
        beanText.css({opacity:"0", left:"800px", transition:"1s"});
      }
    })
    
}

function scroll_fav(){
  const favImg01 = $(".fav_text_img01");
  const favImg02 = $(".fav_text_img02");
  const favBtn = $(".fav_btn");
  favImg01.css({opacity:"0", left:"-200px"});    
  favImg02.css({opacity:"0", left:"-500px"});    
  favBtn.css({opacity:"0"});    

  $(window).on("scroll", function(){
    const win = $(window).scrollTop()
    const contentsFav = $(".fav_wrap");
    const favOffset = contentsFav.offset().top;
    if(win > favOffset-200){
      favImg01.css({left:"120px", opacity:"1", transition:"2s"})     
      favImg02.css({left:"0px", opacity:"1", transition:"2s"})
      setTimeout(() => {
        favBtn.css({opacity:"1", transition:"2s"})
      }, 500); 
    } else {
      favImg01.css({opacity:"0", left:"-200px", transition:"1s"});    
      favImg02.css({opacity:"0", left:"-500px", transition:"1s"});    
      favBtn.css({opacity:"0"});    
    }

  })
}

function scroll_reserve(){
    const reRight = $(".reserve_right");
    const reBtn = $(".reserve_btn");
    reRight.css({opacity:"0", right:"-100%"}); 
    reBtn.css({opacity:"0", right:"-100%"});
    $(window).on("scroll", function(){
        const win = $(window).scrollTop();
        const reContents = $(".reserve_wrap");
        const reOffset = reContents.offset().top;
        if(win > reOffset-300){
            reRight.css({opacity:"1", right:"0", transition:"2s"}); 
            reBtn.css({opacity:"1", right:"260px", transition:"1.5s"}); 
            reBtn.hover(function(){
                reBtn.find(">a").css("backgroundPosition","0 -17px")
            },function(){
                reBtn.find(">a").css({backgroundPosition:"0 0"})
            })
        } else {
            reRight.css({opacity:"0", right:"-100%", transition:"2s"});
            reBtn.css({opacity:"0", right:"-100%", transition:"2s"});
        }
    })

}

$(function(){
  mouseHover();
  displayNone();
  MainShowImg();
  noticeSlide();
  slideShowBtn();
  slideImg();
  scroll_beans();
  scroll_fav();
  scroll_reserve();
})