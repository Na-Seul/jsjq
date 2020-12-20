new Swiper("#mainVisual", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: "#mainVisual .btnPrev",
        nextEl: "#mainVisual .btnNext",
    },
    pagination: {
        el: "#mainVisual .pagination",
        clickable: true,
    }
});

// 12.19 팝업 추가
//닫기
$(".popup .close").on("click", function () {
    //나를 기준으로 내 부모 중 popup을 만났을 때
    //여기서 this는 close
    //$(this).parents(".popupWrap").remove();//제거
    //$(this).parents(".popupWrap").hide();//안보이게

    let _this = $(this);//변수설정
    //팝업 올라가기 효과1
    gsap.to(".popup", {
        top: "-110%",
        ease: "back.in",
        duration: 1,
        //움직임이 끝났을 때
        onComplete: function () {
            //여기서 this는 Tween -> 변수설정 후 사용
            //console.log(this);
            _this.parents(".popupWrap").remove();//제거
        }
    });
});
//하루동안 안보이기
$(".popup .oneday").on("click", function () {
    //나를 기준으로 내 부모 중 popup을 만났을 때

    //팝업 올라가기 효과2
    gsap.to(".popup", {
        top: "-110%",
        ease: "back.in",
        duration: 1,
        //움직임이 끝났을 때
        onComplete: () => {
            //여기서 this는 click: arrow function은 this를 바인딩 하지 않기 때문에!
            //console.log(this);
            $(this).parents(".popupWrap").remove();//제거
        }
    });

    //쿠키 설정
    Cookies.set("oneday", "1", { expires: 1 });
});
//Cookies 메소드 oneday 값 확인
//console.log(Cookies.get("oneday"));
if (Cookies.get("oneday") != 1) {
    //쿠키가 설정되어 있지 않다면

    //새로고침 시 깜빡거림 제어하기 위한 css에서 display none -> js에서 show
    $(".popupWrap").show();

    //팝업 내려오기 효과
    gsap.from(".popup", {
        top: "-110%",
        ease: "back",
        duration: 1,
    });
} else {
    //쿠키가 설정되어 있다면
    $(".popupWrap").remove();//제거
}