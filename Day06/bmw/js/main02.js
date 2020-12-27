let imgNum = 0;
let imgTotal = 38;
function showImg() {
    //div 안에 이미지 1개씩만 불러오기
    
    //let num = Math.floor(this.x*imgTotal/720);
    //imgNum = num%imgTotal+1;
    imgNum = imgNum%imgTotal+1;
    if(imgNum<10){
        imgNum = "0"+imgNum;
    }
    $("#view .car").attr({src:"../images/"+imgNum+".jpg"});
}

//드래깅 플러그인
Draggable.create("#drag .knob", {//움직일 대상
    type: "x",//움직일 축
    edgeResistance: 1,//저항. 범위에서 빠져나가는 범위, 작을수록 많이 나갈 수 있다
    bounds: "#drag .bg",//움직일 범위
    onDrag: function () {//드래그 하는 동안 발생할 이벤트
        imgNum = Math.floor(imgTotal * this.x / 720),//소숫점 제거! 비례식으로 구한 imgNum값
        showImg();
    },
});

Draggable.create("#dragRotation .knob", {//움직일 대상
    type: "rotation",//회전
    edgeResistance: 1,//저항. 범위에서 빠져나가는 범위, 작을수록 많이 나갈 수 있다
    bounds: { minRotation: 0, maxRotation: 360, },
    onDrag: function () {//드래그 하는 동안 발생할 이벤트
        imgNum = Math.floor(imgTotal * this.rotation / 360),//소숫점 제거! 비례식으로 구한 imgNum값
        showImg();
    },
});

//비례식
//이미지 개수:범위 길이 = 선택 이미지:범위 위치
//imgTotal:720 = imgNum:this.x
//imgTotal*this.x = 720*imgNum
//imgTotal*this.x/720 = imgNum