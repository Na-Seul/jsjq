//gsap의 플러그인들은 사용 시 .registerPlugin(플러그인 명);
gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin);

Splitting();//글자 쪼개기

const redPoint = $("#header .circle");

//gnb활성화
$("#gnb li").on("mouseenter", function () {
    $("#header").addClass("on");
    let tx = $(this).offset().left + $(this).width() / 2;//내가 위치하고 있는 li의 왼쪽 지점 + 위치하고 있는 li의 가로값/2
    gsap.to(redPoint, {
        left: tx,
        ease: "power4",
    });
});
$("#gnb li").on("mouseleave", function () {
    $("#header").removeClass("on");
});

const mainTL = gsap.timeline({
    scrollTrigger:{
        trigger:"#mainVisual",
        markers:true,
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        toggleActions:"restart none none reverse",
    },
});
mainTL.from("#mainVisual .txtBox .char", {
    x: 100,
    opacity: 0,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.05
    }
})
    .from(CSSRulePlugin.getRule("#mainVisual .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
        ease: "power4"
    });

const businessTL = gsap.timeline({
    scrollTrigger:{
        trigger:"#business",
        markers:true,
        start:"top top",
        end:"bottom top",
        scrubL:1,
        pin:true,
        toggleActions:"restart none none reverse",
    }
});
businessTL.from("#business .txtBox .char", {
    x: 100,
    opacity: 0,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.05
    }
})//메서드 체이닝: ;를 찍지 않고 메서드를 계속 이어나가는 것
    .from(CSSRulePlugin.getRule("#business .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
        ease: "power4"
    })
    .from("#business .iconBox li", {
        x: 100,
        opacity: 0,
        ease: "back",
        duration: 1,
        stagger: {
            each: 0.05
        }
    },"-=1");

const portfolioTL = gsap.timeline({
    scrollTrigger:{
        trigger:"#portfolio",
        markers:true,
        start:"top top",
        end:"bottom top",
        scrubL:1,
        pin:true,
        toggleActions:"restart none none reverse",
    }
});//paused: 멈춤
portfolioTL.from("#portfolio .txtBox .char", {
    x: 100,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: {
        each: 0.05
    }
})
    .from(CSSRulePlugin.getRule("#portfolio .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
        ease: "power4"
    })
    .from("#portfolio .more", {
        x: 100,
        opacity: 0,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.05
        }
    })
    .from("#portfolio .portfolioBox li", {
        x: 100,
        opacity: 0,
        ease: "back",
        duration: 1,
        stagger: {
            each: 0.05
        }
    });

const communityTL = gsap.timeline({
    scrollTrigger:{
        trigger:"#community",
        markers:true,
        start:"top top",
        end:"bottom top",
        scrubL:1,
        pin:true,
        toggleActions:"restart none reverse none",
    }
});
communityTL.from("#community .txtBox .char", {
    x: 100,
    opacity: 0,
    ease: "back",
    duration: 1,
    stagger: {
        each: 0.05
    }
})
    .from(CSSRulePlugin.getRule("#community .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
        ease: "power4"
    })
    .from("#community .communityBox li", {
        x: 100,
        opacity: 0,
        ease: "back",
        duration: 1,
        stagger: {
            each: 0.05
        }
    });