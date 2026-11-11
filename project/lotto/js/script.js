document.addEventListener('DOMContentLoaded', () => {

	//1단계 (HTML 요소) 준비하기
	// 1. HTML에서 조작할 요소들을 미리 찾아 변수에 저장합니다.
	const jsNumbers = document.querySelector('.js-numbers');
	const jsIng = document.querySelector('.js-ing');
	const resultDiv = document.querySelector('.result');
	const jsBtn = document.querySelector('.js-btn');
	const jsReset = document.querySelector('.js-reset');

	// 2. 프로그램 전체에서 사용할 상태(데이터) 변수들을 선언합니다.
	const lotto = []; 		// 뽑힌 로또 번호 6개를 담을 바구니
	let isCreate = false; // 현재 번호를 뽑고 있는지 체크 (중복 클릭 방지용)
	let step = 0;					// 6개 번호를 하나씩 순서대로 보여줄 때 쓸 번호표 (0~5)
	let intervalId = 0;		// 타이머(setInterval)를 멈추기 위해 저장해둘 ID

	const creatingCoent = ['생성중.', '생성중..', '생성중...', '생성중.', '생성중..', '생성중...']




	// 2단계 1~45 숫자판 만들기
	// 1부터 45까지 HTML 요소를 만들어 화면에 붙이는 함수
	function createWholeNumber() {
		for (let i = 1; i <= 45; i++) {
			const numDiv = document.createElement('div'); 		// <div> 생성
			numDiv.innerHTML = `<p class="number">${i}</p>`;	// 안에 <p>1</p> 넣기
			numDiv.setAttribute('id', `no-${i}`);							// 나중에 색칠하기 위해 id="no-1" 부여
			jsNumbers.appendChild(numDiv);										// .js-numbers 안에 자식으로 추가
		}
	}
	//(하단 실행함수)
	function init() {
		createWholeNumber();				// 1~45 숫자판 만들기
		jsIng.classList.remove("visible")		// '생성중.' 글자 숨기기
	}



	// 3단계  중복 없는 6개 숫자 추첨
	// 번호판에 칠해진 색상을 모두 지우는 함수
	function clearNumbers() {
		const selectedElements = document.querySelectorAll('.selected');
		selectedElements.forEach((el) => {
			el.classList.remove('selected');
		});
	}

	// *[생성하기] 버튼을 누르면 실행될 메인 함수
	function createNumbers() {		// (하단 실행함수)
		if (isCreate) return;		//이미 생성 중이면 버튼 클릭 무시
		isCreate = true;				// '지금 생성 시작한다' 표시
		clearNumbers();					// 이전에 칠해진 색상이 있다면 깨끗이 지우기

		// 기존에 뽑혀있던 로또 배열 비우기
		while (lotto.length > 0) {
			lotto.pop();
		}

		// 중복 없이 6개 숫자 뽑기
		while (lotto.length < 6) {
			let ran = Math.floor(Math.random() * 45) + 1;
			if (lotto.indexOf(ran) == -1) {   	//배열에 없는 숫자일 때만 추가
				lotto.push(ran)
			}
		}
		console.log('뽑힌 번호 :', lotto)

		//버튼 클릭히면서 4단계 내용 불러오기
		jsIng.classList.add("visible"); // '생성중.' 글자 다시 보이게 하기
		intervalId = setInterval(pointNumbers, 500); // 0.5초(500ms)마다 pointNumbers 실행
	}


	//4단계  0.5초마다 하나씩 색칠
	function pointNumbers() {
		// 1. 해당 번호의 div를 찾아 selected 클래스를 추가(색칠)
		document.querySelector(`#no-${lotto[step]}`).classList.add('selected');

		// 2. '생성중.'가 '생성중...'글자로 변경
		jsIng.textContent = creatingCoent[step];
		step++;

		// 3. 6개 다 칠했으면?
		if (step == 6) {
			clearInterval(intervalId);		// 0.5초 타이머 멈추기!
			step = 0;				// 다음 추첨을 위해 0으로 초기화
			isCreate = false;		// 이제 다시 버튼 누를 수 있게 잠금 해제
			jsIng.classList.remove('visible')  // '생성중.' 글자 숨기기
			displayNumbers();
		}
	}


	// 5단계 하단에 결과 당첨 번호 만들기
	// 추첨이 끝나면 하단 .result 영역에 번호 공 6개를 만들어 붙이는 함수
	function displayNumbers() {
		const numberContainer = document.createElement('div')	 // 한 줄(6개 묶음)을 담을 div

		for (let i = 0; i < 6; i++) {
			const number = document.createElement('div')  //div 공 하나 생성
			number.textContent = `${lotto[i]}`;  	// div에 숫자 적기
			numberContainer.appendChild(number); // 숫자를 담은div 부모div에 담기 (<div><div>[i]</div></div>)

			// 번호에 따라 공 배경색 변경
			if (lotto[i] < 10) {
				number.style.backgroundColor = "#fdba74";
			} else if (lotto[i] < 20) {
				number.style.backgroundColor = "#a8dadc";
			} else if (lotto[i] < 30) {
				number.style.backgroundColor = "#a5b4fc";
			} else if (lotto[i] < 40) {
				number.style.backgroundColor = "#fdba74";
			} else {
				number.style.backgroundColor = "#fda4cf";
			}
		}
		resultDiv.appendChild(numberContainer);	 // 완성된 한 줄을 화면에 추가
		jsReset.style.display = 'block'; // 숨겨뒀던 [초기화] 버튼 보이게 하기
	}

	// 6단계 초기화 기능
	function resetNumbers() {
		clearNumbers(); 			// 위쪽 1~45 숫자판 색칠 지우기
		resultDiv.innerHTML = '';   	// 아래쪽 결과 목록 싹 비우기
		jsReset.style.display = 'none'	 // [초기화] 버튼 다시 숨기기
	}


	// 실행 및 이벤트 연결!
	init();
	jsBtn.addEventListener('click', createNumbers);
	jsReset.addEventListener("click", resetNumbers);
});
