document.addEventListener('DOMContentLoaded', () => {

	const userAnswers = [];
	const startBtn = document.querySelector('.start_btn');
	const buttons = document.querySelectorAll('.answer_btn');

	
	const start = document.querySelector('#start');
	const question01 = document.querySelector('#question01');
	const question02 = document.querySelector('#question02');
	const question03 = document.querySelector('#question03');
	const question04 = document.querySelector('#question04');
	const result = document.querySelector('#result');
	const resultTitle = document.querySelector('#result h2');
	const resultSubText = document.querySelector('#result p');
	const resultImage = document.querySelector('#result img');
	const restartBtn = document.querySelector('.restart_btn');


	question01.style.display = 'none';
	question02.style.display = 'none';
	question03.style.display = 'none';
	question04.style.display = 'none';
	result.style.display = 'none';


	startBtn.addEventListener('click', () => {
		start.style.display = 'none';
		question01.style.display = 'flex';
	});

	restartBtn.addEventListener('click', () => {
		result.style.display = 'none';
		question01.style.display = 'none';
		question02.style.display = 'none';
		question03.style.display = 'none';
		question04.style.display = 'none';
		start.style.display = 'flex';
		userAnswers.splice(0);
		console.log(userAnswers);
	})

	buttons.forEach((button)=>{

		button.addEventListener('click',()=>{
			console.log(button.dataset.answer);

			userAnswers.push(button.dataset.answer);
			console.log(userAnswers);
			
			const currentQuestion = button.closest('section').id
			console.log(currentQuestion)
			
			if(currentQuestion === 'question01'){
				question01.style.display ='none';
				question02.style.display ='flex';
			} else if(currentQuestion === 'question02'){
				question02.style.display ='none';
				question03.style.display ='flex';
			} else if (currentQuestion === 'question03') {
				question03.style.display ='none';
				question04.style.display ='flex';
			} else if(currentQuestion === 'question04'){
				question04.style.display ='none';
				result.style.display = 'flex';
					
				const natureCount = userAnswers.filter((answer)=>{return answer === 'nature'}).length;
				const cityCount = userAnswers.filter((answer)=>{return answer === 'city'}).length;
				const relaxCount = userAnswers.filter((answer)=>{return answer === 'relax'}).length;
				const foodCount = userAnswers.filter((answer)=>{return answer === 'food'}).length;


				if(natureCount > cityCount && natureCount > relaxCount && natureCount > foodCount){
					console.log('nature가 많습니다.');
					resultTitle.textContent = '자연을 좋아하는 여행 스타일입니다.';
					resultSubText.textContent = '아름다운 자연 속에서 여유롭게 여행하는 것을 좋아하는 당신입니다.';
					resultImage.src = 'img/nature.jpg';
				} else if(cityCount > relaxCount && cityCount > natureCount && cityCount > foodCount){
					console.log('city가 많습니다.')
					resultTitle.textContent = '새로운 도시를 즐기는 여행 스타일입니다.';
					resultSubText.textContent = '처음 가는 도시 속에서 새로운 것을 발견하는 여행을 좋아하는 당신입니다.';
					resultImage.src = 'img/city.jpg';
				} else if(foodCount > relaxCount && foodCount > cityCount && foodCount > natureCount){
					console.log('food가 많습니다.')
					resultTitle.textContent = '음식을 탐구하는 여행 스타일입니다.';
					resultSubText.textContent = '여행 속에서 새로운 음식을 발견하는 여행을 좋아하는 당신입니다.';
					resultImage.src = 'img/food.jpg';
				} else if(relaxCount > foodCount && relaxCount > cityCount && relaxCount > natureCount){
					console.log('relax가 많습니다.')
					resultTitle.textContent = '호캉스를 즐기는 여행 스타일입니다.';
					resultSubText.textContent = '호캉스를 즐기며 여유롭고 느긋하게 여행하는 것을 좋아하는 당신입니다.';
					resultImage.src = 'img/relax.jpg';
				} else {
					console.log('동점입니다.')
					if (natureCount === cityCount &&  natureCount > relaxCount && natureCount > foodCount) {
						console.log('nature와 city가 같습니다.')
						resultTitle.textContent = '자연 속에서 때로는 도심에서 즐기는 여행 스타일입니다.';
						resultSubText.textContent = '아름다운 자연의 여유로움과 도시의 활기찬 매력을 모두 즐기는 당신입니다.';
						resultImage.src = 'img/nature_city.jpg';
					} else if (natureCount === relaxCount &&  natureCount > cityCount && natureCount > foodCount) {
						console.log('nature와 relax가 같습니다.')
						resultTitle.textContent = '자연 속에서 편안한 휴식을 즐기는 여행 스타일입니다.';
						resultSubText.textContent = '자연 속에서 마음의 여유를 찾고 편안한 휴식을 즐기는 당신입니다.';
						resultImage.src = 'img/nature_relax.jpg';
					} else if (natureCount === foodCount &&  natureCount > cityCount && natureCount > relaxCount) {
						console.log('nature와 food가 같습니다.')
						resultTitle.textContent = '자연 속에서 맛있는 음식을 즐기는 여행 스타일입니다.';
						resultSubText.textContent = '아름다운 풍경을 감상하며 그곳의 특별한 맛을 경험하는 것을 좋아하는 당신입니다.';
						resultImage.src = 'img/nature_food.jpg';
					}

					if (cityCount === relaxCount &&  cityCount > natureCount && cityCount > foodCount) {
						console.log('city와 relax가 같습니다.')
						resultTitle.textContent = '도심 속에서 편안한 휴식을 즐기는 여행 스타일입니다.';
						resultSubText.textContent = '새로운 도시를 탐험하면서도 나만의 여유로운 시간을 소중히 여기는 당신입니다.';	
						resultImage.src = 'img/city_relax.jpg';		
					} else if (cityCount === foodCount &&  cityCount > natureCount && cityCount > relaxCount) {
						console.log('city와 food가 같습니다.')
						resultTitle.textContent = '도심 속에서 맛있는 음식을 즐기는 여행 스타일입니다.';	
						resultSubText.textContent = '도시 곳곳을 둘러보며 특별한 맛집과 새로운 미식 경험을 찾아다니는 당신입니다.';
						resultImage.src = 'img/city_food.jpg';		
					}

					if (  relaxCount === foodCount && relaxCount > natureCount && relaxCount > cityCount ) {
						console.log('relax와 food가 같습니다.')
						resultTitle.textContent = '호캉스를 즐기며 맛있는 음식을 즐기는 여행 스타일입니다.';
						resultSubText.textContent = '편안한 공간에서 맛있는 음식을 즐기며 느긋한 시간을 보내는 당신입니다.';
						resultImage.src = 'img/relax_food.jpg';
					}
					

					if (  natureCount === cityCount && cityCount === relaxCount && relaxCount === foodCount ) {
						console.log('모두 같습니다.');
						resultTitle.textContent = '모든 여행 스타일을 좋아하는 여행자입니다.';
						resultSubText.textContent = '자연, 도시, 휴식, 미식까지! 다양한 매력을 즐길 줄 아는 자유로운 여행자입니다.';
						resultImage.src = 'img/all.jpg';
					}
					
				}

			}
			

			

		});

	});

	// const test = ["nature", "city", "nature", "relax"];
	// console.log(test.filter((answer)=>{return answer === 'nature'}))
	// console.log(test.filter((answer)=>{return answer === 'nature'}).length)


})