document.addEventListener('DOMContentLoaded', () => {

    // 1. 제어할 대상(마이너스 버튼, 플러스 버튼, 입력창)을 선택합니다.
    const minusBtn = document.querySelector('.quantity_box button:nth-of-type(1)');
    const plusBtn = document.querySelector('.quantity_box button:nth-of-type(2)');
    const quantityInput = document.querySelector('.quantity_box input');

    // 2. 플러스(+) 버튼을 클릭했을 때 실행할 코드
    plusBtn.addEventListener('click', () => {
        // input 창에 적힌 문자("1")를 진짜 연산이 가능한 숫자(1)로 바꿉니다.
        let currentNumber = parseInt(quantityInput.value);
        
				if(currentNumber < 4){
					// 숫자를 1 증가시킵니다.
					currentNumber++;
					// 새로 계산된 숫자를 다시 input 창 안에 집어넣습니다.
					quantityInput.value = currentNumber;

				}else{
					alert("최대 4개 까지만")
				}
        
    });

    // 3. 마이너스(-) 버튼을 클릭했을 때 실행할 코드
    minusBtn.addEventListener('click', () => {
        let currentNumber = parseInt(quantityInput.value);
        
        // 수량이 0이나 마이너스로 내려가지 않도록, '1보다 클 때만' 줄어들게 제한합니다.
        if (currentNumber > 1) {
            currentNumber--; // 숫자를 1 감소시킵니다.
            quantityInput.value = currentNumber; // 값을 input 창에 반영합니다.
        }
    });
		


		
     
});