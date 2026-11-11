const brandLi = document.querySelectorAll('.main_goods > ul > li');
			const boxImages = document.querySelectorAll('section.s01 .box_img');

			brandLi.forEach((li, idx) => {
				const brandImg = li.querySelector('a .goods_info');

				// 현재 li와 매칭되는 n번째 box_img 안의 좌우 이미지 찾기
				const targetBox = boxImages[idx];
				const gLeft = targetBox ? targetBox.querySelector('.g_left') : null;
				const gRight = targetBox ? targetBox.querySelector('.g_right') : null;

				// [마우스 진입]
				li.addEventListener('mouseenter', () => {
					// 기존 li 내 이미지 표시
					brandImg.style.display = 'block';
					brandImg.style.position = 'absolute';
					brandImg.style.zIndex = '2';

					// 매칭되는 box_img 내부 이미지 애니메이션 진행
					if (gLeft && gRight) {
						gLeft.animate([
							{ left: '-450px' },
							{ left: '0px' }
						], { duration: 500, fill: 'forwards', easing: 'ease-out' });

						gRight.animate([
							{ right: '-550px' },
							{ right: '0px' }
						], { duration: 500, fill: 'forwards', easing: 'ease-out' });
					}
				});

				// [마우스 이탈]
				li.addEventListener('mouseleave', () => {
					// 기존 li 내 이미지 숨김
					brandImg.style.display = 'none';

					// 원래 위치로 부드럽게 되돌리기 (원치 않으시면 이 부분은 생략하거나 다르게 수정 가능)
					if (gLeft && gRight) {
						gLeft.animate([
							{ left: '0px' },
							{ left: '-450px' }
						], { duration: 400, fill: 'forwards', easing: 'ease-in' });

						gRight.animate([
							{ right: '0px' },
							{ right: '-550px' }
						], { duration: 400, fill: 'forwards', easing: 'ease-in' });
					}
				});
			});