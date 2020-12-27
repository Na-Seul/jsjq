gsap.to("#red",{
    x:1000,
    rotation:360,
    duration:3,
});
gsap.to("#green",{
    x:1000,
    rotation:360,
    duration:3,
    scrollTrigger:{
        trigger:"#green",
        markers:{//스크롤과 trigger의 시작과 끝지점 표기. 값으로는 객체{} 혹은 true/false
            startColor:"#fff",
            endColor:"#f00",
            fontSize:"30px",
        },
        start:"top center",//시작지점 위치 변경. 첫번째는 trigger의 top, 두번째는 window의 top. 기본값: top bottom
        end:"bottom top+=300",//첫번째는 trigger의 bottom, 두번째는 window의 bottom. 기본값: bottom top
        scrub:1,//스크롤의 값을 따라 같이 움직임
        pin:true,//스크롤이 끝날때 까지 화면에 고정되어 움직임. fixed와 비슷

        //toggleActions: 4가지 사용 가능.
        //내려오면서 start-start, 내려오면서 end-end, 올라가면서 end-end , 올라가면서 start-start
        //play(한번), restart(~때마다 재시작), reverse(역), resume(), reset(), none
        toggleActions:"restart pause reset reverse",
    },
});
gsap.to("#blue",{
    x:1000,
    rotation:360,
    duration:3,
    scrollTrigger:"#blue",//보이면 움직임
});
/*
$(window).on("scroll",function(){
    console.log($(window).scrollTop());//스크롤의 위치값
});
console.log($("#green").offset().top);//green의 위치값
*/