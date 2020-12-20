$.ajax({
    url:"mario.json"
})
.done(function(res){
    //console.log(res);
    const mario = res.mario;
    let items="";
    let gnbItems="";

    $.each(mario,function(i,item){
        gnbItems+=
            `
            <li><span>${item.title}</span></li>
            `;
        items+=
            `
            <li>
                <div class="mario">
                    <img src="${item.img}" alt="">
                </div>
                <div class="txt">
                    <h2 class="title">${item.title}</h2>
                    <p>${item.desc}</p>
                    <a href="${item.link}">MORE</a>
                </div>
                <div class="bg" style="background-image:${item.bg}"></div>
            </li>
            `;
    });
    //list를 만들 때 마다 바로 append하는 것 보다 list를 다 만들어놓고 append 하는게 더 효율적임
    $("#main .marioList").append(items);
    $("#menu .list").append(gnbItems);
    
    //휠 이벤트
    const total = $("#main .marioList li").length;
    let tz = 0;
    const zDistance = 5000;//떨어진 간격
    let zAmount = zDistance/2;//휠 돌릴 때 마다 더해줄 값. 떨어진 간격만큼 주면, 휠 돌릴 때 마다 객체가 한개씩 움직임
    const lastZdistance = zDistance*(total-1);//마지막 li z깊이
    let selected =0;
    
    //세팅
    $("#main .marioList li").each(function(i,item){
        //$(this).css();
        gsap.set(item,{
            z:i*-zDistance,
            zIndex:total-i,
        });
    });
    //이벤트
    $(window).on("mousewheel DOMMouseScroll",function(e){
        let wheel = e.originalEvent.deltaY;//마우스 휠 값. 100:위로, -100: 아래로
        //console.log(wheel);
        if (wheel>0) {//마우스를 내리면
            tz+=zAmount;//500씩 더해주기(숫자가 커질수록 가까워짐)
            if (tz>=lastZdistance) {//마지막 z깊이보다 작아지면
                tz=lastZdistance;//z깊이 고정
            }
        }else{//마우스를 올리면
            tz-=zAmount;//500씩 빼주기(숫자가 낮아질수록 멀어짐)
            if (tz<=0) {//첫번째 z깊이(0)보다 커지면
                tz=0;//z깊이 고정
            }
        }
        $("#main .marioList li").each(function(i,item){
            gsap.to(item,{
                z:i*-zDistance+tz,
            });
        });

        //menu 작동
        selected = Math.floor(tz/zDistance);
        $("#menu ul li").eq(selected).siblings().removeClass("on");
        $("#menu ul li").eq(selected).addClass("on");
    });

    $("#main .marioList li").each(function(i,item){
        moveMario($(this).find(".mario"));
    });

});
//재귀함수 예제
function factorial(num){
    if (num===0) {
        return 1;
    }else{
        return num*(factorial(num-1));
    }
};
let temp = factorial(5);
console.log(temp);

//마리오 재귀함수
function moveMario(moveItem){
    gsap.to(moveItem,{
        x:Math.random()*100-50,
        y:Math.random()*100-50,
        ease:"power4",
        duration: Math.random()+1,
        onComplete:function(){
            moveMario(moveItem);
        },
    });
};