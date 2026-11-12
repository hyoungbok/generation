

document.addEventListener('DOMContentLoaded', function () {

	
	const scrollHeader = () => {
		const header = document.querySelector('header')
	window.scrollY >= 50 ? header.classList.add('color_header') : header.classList.remove('color_header');
	}

	window.addEventListener('scroll', scrollHeader)

	/* mixitup */
	const containerEl = document.querySelector('.work');
	var mixer = mixitup(containerEl);

	const btn = document.querySelectorAll('.filters li');
	btn.forEach(tabList => {
		tabList.addEventListener('click', () => {
			const activeBtn = document.querySelector('.filters li.wark_active');
			if (activeBtn) {
				activeBtn.classList.remove('wark_active')
			}
			tabList.classList.add('wark_active');
		})
	});
})


document.addEventListener('DOMContentLoaded', () => {

	// const menuLinks = document.querySelectorAll(".manu ul li a");

	// // 1. 메뉴 클릭 시 해당 id를 가진 위치로 부드럽게 이동
	// menuLinks.forEach((link) => {
	// 	link.addEventListener("click", (e) => {
	// 		e.preventDefault(); // 기본 링크 이동 막기

	// 		// 클릭한 링크의 href 값 가져오기 (예: '#about', '#skill')
	// 		const targetId = link.getAttribute("href");

	// 		// 만약 HOME 버튼의 href가 '#' 이라면 페이지 맨 위(0)로 이동 처리
	// 		if (targetId === "#") {
	// 			window.scrollTo({ top: 0, behavior: "smooth" });
	// 			return;
	// 		}

	// 		// href와 일치하는 id를 가진 섹션 선택
	// 		const targetSection = document.querySelector(targetId);
	// 		if (!targetSection) return;

	// 		// 해당 콘텐츠의 절대 위치(Y축) 계산
	// 		const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;

	// 		// 부드럽게 스크롤 이동
	// 		window.scrollTo({
	// 			top: targetTop,
	// 			behavior: "smooth"
	// 		});
	// 	});
	// });


	// 2. 스크롤 위치에 따라 메뉴 활성화 클래스(active) 변경
	// window.addEventListener("scroll", () => {
	// 	const sct = window.scrollY; // 현재 스크롤 위치

	// 	// HOME(맨 위) 상태 처리: 스크롤이 약 200px 미만일 때는 HOME 메뉴 활성화
	// 	if (sct < 200) {
	// 		menuLinks.forEach(link => link.classList.remove("active"));
	// 		menuLinks[0].classList.add("active"); // HOME 메뉴
	// 		return;
	// 	}

	// 	// 각 메뉴의 href 값을 돌면서 화면에 해당 섹션이 보이는지 체크
	// 	menuLinks.forEach((link) => {
	// 		const targetId = link.getAttribute("href");
	// 		if (targetId === "#") return; // HOME은 패스

	// 		const section = document.querySelector(targetId);
	// 		if (!section) return;

	// 		const targetTop = section.getBoundingClientRect().top + sct;

	// 		// 스크롤이 해당 섹션 영역에 도달했을 때 (여유값 +50px 적용)
	// 		if (targetTop <= sct + 50) {
	// 			menuLinks.forEach(item => item.classList.remove("active"));
	// 			link.classList.add("active");
	// 		}
	// 	});
	// });




	/* active    메뉴 클릭시 위치 이동과 active를 이용해 메뉴 변경 */
	const sections = document.querySelectorAll('#home, section[id]')
	const scrollActive = () => {
		const scrollY = window.pageYOffset

		sections.forEach(current => {
			const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id'),
				sectionClass = document.querySelector('nav ul li a[href*="' + sectionId + '"]');
			
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				sectionClass.classList.add('active')
			} else {
				sectionClass.classList.remove('active')
			}
		})
	}

	window.addEventListener('scroll', scrollActive)





	/* modal */
	const aboutBox = document.querySelectorAll('.about_data .about_box');
	aboutBox.forEach((box) => {
		const btn = box.querySelector('.about_btn');
		const modal = box.querySelector('.about_modal');
		const closeBtn = box.querySelector('.close');
		const dimmed = box.querySelector('.dimmed');

		if (btn && modal) {
			btn.addEventListener('click', () => {
				modal.classList.add('active_modal');
				document.body.classList.add('scroll_hidden');
			})
		}

		if (closeBtn && modal) {
			closeBtn.addEventListener('click', () => {
				modal.classList.remove('active_modal')
				document.body.classList.remove('scroll_hidden');
			})
		}
		if (dimmed && modal) {
			dimmed.addEventListener('click', () => {
				modal.classList.remove('active_modal')
				document.body.classList.remove('scroll_hidden');
			})
		}

	})
	
	/* acodion */
	const skillTitle = document.querySelectorAll('.skill_content li h3');

	function toggleAccordion(titleElement) {
		const isExpanded = titleElement.getAttribute('aria-expanded') === 'true';
		
		if (isExpanded) {
			return;
		}

		skillTitle.forEach((other) => {
			other.setAttribute('aria-expanded', 'false');

			
			const otherList = other.closest('li');
			if (otherList) {
				otherList.classList.remove('skill_active');
			}
		});

		titleElement.setAttribute('aria-expanded', 'true');

		const listItem = titleElement.closest('li');
		if (listItem) {
			listItem.classList.add('skill_active')
		}
	}

	skillTitle.forEach((title) => {
		title.addEventListener('click', () => {
			toggleAccordion(title);
		})
	})



	/* scroll reveal */
	// const sr = ScrollReveal({
	// 	origin: 'top',
	// 	distance: '60px',
	// 	duration: 2500,
	// 	delay: 400,
	// })
	// sr.reveal(`.visual, .footer_logo, .footer_description, .footer_content`)
	// sr.reveal(`.home_tree1`, { origin: 'left',delay:800 })
	// sr.reveal(`.home_tree2`, { origin: 'right',delay:800 })
	// sr.reveal(`.home_img`, { delay:800 })
	// sr.reveal(`.category_card, .items_card`, { interval:100 })
	// sr.reveal(`.about_img, .about_data, .footer_tree2`, { origin: 'left' })
	// sr.reveal(`.party_images, .party_data, .footer_tree1`, { origin: 'right' })

});