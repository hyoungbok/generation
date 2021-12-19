
const lotto = [] // 로또번호 배열로 저장하기
let isCreate = false; // 현재 생성 중인지를 표시하는 변수
let step = 0; // 하난하난 표시할 때 인덱스 접근하기!
let intervalId = 0; // 시간차 동작을 제어하기 위한 id 저장 변수

const creatingComent = ['생성중..', '생성중...', '생성중.', '생성중..', '생성중...', '생성중.']

// 만들어진 버호 하나하나를 웹에서 표시하는 함수
function pointNumbers(){
    $(`#no-${lotto[step]}`).addClass("selected")
    $(".js-ing").text(creatingComent[step]) //글자 에니메이션 효과
    step++;

    if(step == 6){
        clearInterval(intervalId) // 시간차 동작그만
        step = 0;
        isCreate = false; // 이제 생성 종료
        $(".js-ing").removeClass("visible")
        
        displayNumbers()
    }
}

function clearNumbers(){
    $(".selected").removeClass("selected");
}



function createWholeNumber(){
    for(let i = 1; i <= 45; i++){
        const numDiv = $("<div>") //div생성
        numDiv.html(`<p class="number">${i}</p>`) //숫자가 쓰여있는 p태그 추가
        numDiv.attr("id", `no-${i}`) // 고유한 식별자인 id를 개별 추가
        $(".js-numbers").append(numDiv); //만든 div를 번호 div안에 추가
    }
}

// 로또 번호 생성하기 함수
function createNumers(){
    // 생성을 이미 하고 있다면 하지 마라
    if(isCreate) return;
    // 위에서 return이 되지 않았으면, isCreate를 true로 변경!
    isCreate = true;

    clearNumbers();

    // 1부터 45중에서 6개가 랜덤으로 선택되어야 한다.
    // Math.floor(Math.random()) 소수점 없이
    // 주의! 이미 선택된 숫자를 또 랜덤으로 선택하면 안됨
    

    // 배열 비우기 (pop)
    while(lotto.length>0){
        lotto.pop(); //배열 요소 하나씩 제거(뒤에서부터)
    }
    // 새롭게 번호 추첨하기
    while(lotto.length < 6){
        let ran = Math.floor(Math.random()*45)+1
        // indexOf() - // 배열에서 지정된 요소를 찾을 수 있는 첫번쨰 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
        if(lotto.indexOf(ran) === -1){  
            lotto.push(ran) // 배열 요소 하나씩 추가(뒤에다가)
        }
    }
    console.log(lotto)

    // 번호 보여주기 시작하니까, '생성주.' 텍스트 보여주기
    $(".js-ing").addClass("visible")

    // 번호가 생겼으니 pointNumbers()로 하나하나 색상을 칠하기
    intervalId = setInterval(pointNumbers, 500);
}


// .result 영역에다 여섯개 번호 모아서 표시하기
// 6개의 숫자가 색칠되었을때 불러와 표시하기 -> pointNumbers()에서 불러오기
function displayNumbers(){
    const numberContainer = document.createElement("div")  //숫자 6개 생성
    for(let i=0; i<6; i++){
        const number = document.createElement("div")
        // $(number).text() or
        number.textContent = `${lotto[i]}`
        numberContainer.appendChild(number)

        // 번호에 색상 넣기
        if(lotto[i] < 10){
            $(number).css("backgroundColor", "orange")
        } else if(lotto[i] < 20){
            $(number).css("backgroundColor", "blue")
        } else if(lotto[i] < 30){
            $(number).css("backgroundColor", "red")
        } else if(lotto[i] < 40){
            $(number).css("backgroundColor", "yellowgreen")
        } else {
            $(number).css("backgroundColor", "purple")
        }
    }
    $(".result").append(numberContainer)
    $(".js-reset").show()
}


// 초기화 버튼 눌렀을 때 일어날 일!
function resetNumbers(){
    clearNumbers() // 색상 없애기
    // 표시하고 있던 숫자 리스트와 초기화 버튼 사라지게 하기!
    $(".result").empty(); // 비운다.
    $(".js-reset").hide(); // 버튼 숨긴다.
}


function init(){
    createWholeNumber(); // 번호만들어서 뿌리기
    $(".js-ing").removeClass("visible") // '생성중.' 글자 안보이게 만들어두기
}

$(document).ready(function(){
    init(); // 화면 준비를 위한 기능들을 모은 함수
    $(".js-btn").click(createNumers);
    $(".js-reset").click(resetNumbers);
})