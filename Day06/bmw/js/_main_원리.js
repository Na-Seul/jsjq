//돌아가는 원리
let imgNum = 0;
let imgTotal = $("#view .car").length;
let frame = 36;
setInterval(function(){//무한 실행
    let selectedImg = $("#view .car").eq(imgNum);
    selectedImg.siblings().hide();//모든 이미지 숨기기
    selectedImg.show();//n번째 이미지만 보이기
    
    imgNum++;//n+1
    if(imgNum >= imgTotal){//n이 이미지 갯수보다 커지면
        imgNum = 0;//0으로 돌려주기
    }
},frame);//frame초마다 보게 한다