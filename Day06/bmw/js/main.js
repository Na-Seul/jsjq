let imgNum = 0;
let imgTotal = $("#view .car").length;
function showImg() {
    let selectedImg = $("#view .car").eq(imgNum);
    selectedImg.siblings().hide();//모든 이미지 숨기기
    selectedImg.show();//n번째 이미지만 보이기
}

//드래깅 플러그인
Draggable.create("#drag .knob", {//움직일 대상
    type: "x",//움직일 축
    edgeResistance: 1,//저항. 범위에서 빠져나가는 범위, 작을수록 많이 나갈 수 있다
    bounds: "#drag .bg",//움직일 범위
    onDrag: function () {//드래그 하는 동안 발생할 이벤트
        showImg();
        imgNum = Math.floor(imgTotal * this.x / 720) - 1,//소숫점 제거! 비례식으로 구한 imgNum값
            //움직이는 x 위치 구하기
            console.log(this.x);//720 = 범위bg길이(800)-버튼knob길이(80)
    },
});

Draggable.create("#dragRotation .knob", {//움직일 대상
    type: "rotation",//회전
    edgeResistance: 1,//저항. 범위에서 빠져나가는 범위, 작을수록 많이 나갈 수 있다
    bounds: { minRotation: 0, maxRotation: 360, },
    onDrag: function () {//드래그 하는 동안 발생할 이벤트
        showImg();
        imgNum = Math.floor(imgTotal * this.rotation / 360),//소숫점 제거! 비례식으로 구한 imgNum값
            //움직이는 각도 구하기
            console.log(this.rotation);
    },
});

//비례식
//이미지 개수:범위 길이 = 선택 이미지:범위 위치
//imgTotal:720 = imgNum:this.x
//imgTotal*this.x = 720*imgNum
//imgTotal*this.x/720 = imgNum