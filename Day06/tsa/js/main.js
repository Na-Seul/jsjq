Splitting();//글자 쪼개기

setInterval(function(){
    gsap.from(".iconScroll img",{
        y:100,
        opacity:0,
        ease:"elastic",
        duration:2,
    });
},2000);


//gsap의 플러그인들은 사용 시 .registerPlugin(플러그인 명);
gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin);

//애니메이션 1개만 쓸 때: gsap
//애니메이션 여러개 쓸 때: gsap.timeline
const section01TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section01",
        markers: true,
        start: "top top",
        end: "bottom+=3000 top",//속도조절 bottom+=n
        scrub: 1,
        pin: true,
        toggleActions: "restart none reverse none",
    },
});
section01TL.from(".section01 .txt01 .char", {
    x: 100,
    opacity: 0,
    stagger: {//차례대로 움직이기
        each: 0.05//개당 걸리는 시간
    }
})
    .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {//css에서 지정한 그대로 적어줘야 함
        cssRule: {
            scaleX: 0,
        },
    })
    .from(".section01 .txt02 .char", {
        x: 100,
        opacity: 0,
        stagger: {//차례대로 움직이기
            each: 0.05//개당 걸리는 시간
        }
    })
    .from(".section01 .txt03", {
        x: -100,
        opacity: 0,
        stagger: {
            each: 0.05
        }
    })
    .from(".section01 .txt04", {
        scale: 0,
        opacity: 0,
    });

/*============*/
const section02TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section02",
        markers: true,
        start: "top top",
        end: "bottom+=3000 top",//속도조절 bottom+=n
        scrub: 1,
        pin: true,
        toggleActions: "restart none reverse none",
    },
});
section02TL.from(".section02 .title .char", {
    x: 100,
    opacity: 0,
    stagger: {//차례대로 움직이기
        each: 0.05//개당 걸리는 시간
    }
})
    .from(".section02 .mainTxt .char", {
        x: 100,
        opacity: 0,
        stagger: {//차례대로 움직이기
            each: 0.05//개당 걸리는 시간
        }
    })
    .from(".section02 .circleList li", {
        y: 100,
        opacity: 0,
        stagger: {
            each: 0.5,
        }
    })
    .from(".section02 .cduBox", {
        scale:0,
    });

/*============*/
const section03TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section03",
        markers: true,
        start: "top top",
        end: "bottom+=3000 top",//속도조절 bottom+=n
        scrub: 1,
        pin: true,
        toggleActions: "restart none reverse none",
    },
});
section03TL.from(".section03 .title .char", {
    x: 100,
    opacity: 0,
    stagger: {//차례대로 움직이기
        each: 0.05//개당 걸리는 시간
    }
})
    .from(".section03 .mainTxt .char", {
        x: 100,
        opacity: 0,
        stagger: {//차례대로 움직이기
            each: 0.05//개당 걸리는 시간
        }
    })
    .from(".section03 .list li .listBox", {
        opacity: 0,
        stagger: {
            each: 0.5,
        }
    });