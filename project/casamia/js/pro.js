document.addEventListener('DOMContentLoaded', () => {




	const btn = document.querySelector('.button_box .like_btn');
	const btn_img = document.querySelector('.button_box .like_btn img')

	let liked = false;

	btn.addEventListener('click', () => {
		liked = !liked;

		if (liked) {
			btn_img.src = 'img/pro_img/heart_activ.png';
			btn_img.alt = '찜이 선택 됐습니다.';
		} else {
			btn_img.src = 'img/pro_img/heart.png';
			btn_img.alt = '찜이 취소 됐습니다.';
		}
	});

	const selectBox = document.querySelector('.select_button');
	const select_options = document.querySelector('.select_options');
	const arrow_icon = document.querySelector('.arrow_icon');

	// 클릭 시 목록 열기/닫기
	selectBox.addEventListener('click', () => {
		console.log('ok')
		if (select_options.classList.contains('toggle')) {
			select_options.classList.remove('toggle');
			selectBox.setAttribute('aria-expanded', 'false');
			selectBox.setAttribute('data-status', '닫혔다');
			arrow_icon.style.transform = 'rotate(0deg)';
		} else {
			select_options.classList.add('toggle');
			selectBox.setAttribute('aria-expanded', 'true');
			selectBox.setAttribute('data-status', '열렸다');
			arrow_icon.style.transform = 'rotate(180deg)';
		}
	});

})