let clearID;//실질적인 값은 바뀌지 않으나 선언을 밑에서 따로 하기 때문에 let
let clearGame;
let sel;
let count = 1;
const gameTotal = 2;//값이 바뀌지 않는 상수임을 선언
let computerSel = function(){
    //랜덤 숫자
    sel = Math.floor(Math.random()*3);
    //0 <= Math.random() < 1
    //0*3 <= Math.random()*3 < 1*3
    
    $("#computer li").hide();
    //해당 숫자의 li만 보이게 하기
    $("#computer li").eq(sel).show();//eq: nth-child와 같음
}

//함수 선언
function clickFunc(){
    //사람이 선택하는 버튼 클릭 시
    $("#human li").on("click",function(){
        if(count <= gameTotal){
            //무한으로 돌아가는거 멈춤
            clearInterval(clearID);

            //sel값과 선택한 값 비교
            if(sel === $(this).index()){
                //같다면
                //console.log("비김");
                //요소 추가:Manipulation > append
                $("#result ul").append("<li class='draw'>D</li>");

            }else if(sel === 2 && $(this).index() === 0){
                //이긴다면
                //console.log("이김");
                $("#result ul").append("<li class='win'>W</li>");
            }else if(sel - $(this).index() === -1){
                //이긴다면
                //console.log("이김");
                $("#result ul").append("<li class='win'>W</li>");
            }else{
                //console.log("졌음");
                $("#result ul").append("<li class='lose'>L</li>");
            }

            //잠깐 확인 후: setTimeout
            //재시작: restart
            clearGame = setTimeout(restart,1000);
            //단점: timeout이 끝나기 전에 마구 누르면 setTimeout이 누적되어 더이상 작동하지 않는다
            //숙제: clearTimeout 찾아서 구현하기
            $("#human li").off("click");//클릭 이벤트 제거
        }
        if(count >= gameTotal) {
            //커버 보이기
            //$(".cover").show();
            //html 소스 뜯어보기 어렵게 게임이 종료됬을 때 body에 내용 추가
            $("body").append(
                `
                <div class="cover">
                    <div class="contents">
                        <p class="title">GAME OVER</p>
                        <button class="btnRestart">RESTART!!</button>
                        <p class="totalResult">
                            <!-- 당신이 졌어요ㅠㅠ
                            당신이 이겼어요 ^^
                            비겼어요 --; -->
                        </p>
                    </div>
                </div>
                `
            );
            clearTimeout(clearGame);//게임 재실행 하지 않음
        }
        //이벤트 횟수 체크
        count = count + 1;
    });
}

function restart(){
    clearID = setInterval(computerSel, 10);//주어진 함수를 주어진 시간에 맞게 실행하는 것
    //실행 시 무한으로 돌아가기
    //setInterval(실행함수, 시간)
    clickFunc();
}

restart();//게임 실행

//이벤트 위임
$("body").on("click",".btnRestart",function(){
    $(".cover").remove();//커버 제거
    
    //$("#result ul li").remove();//결과 li요소 제거
    $("#result ul").html("");//결과 li요소 제거

    count = 0;//변수 리셋

    restart();//재실행
});

//이벤트 off 확인용
// $("#human li").on("mouseenter",function(){
//     console.log($(this).index());
// })