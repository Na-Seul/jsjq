Splitting();//데이터 쪼개기
let mainTL = gsap.timeline();
mainTL.from("#mainVisual .slogan .main .char", {
    //위치가 정해져있을 땐 from을 쓰는게 좋다
    y:-100,
    opacity: 0,
    ease: "bounce",
    duration:1,
    stagger:0.05,
})
.from("#mainVisual .slogan .sub .char", {
    x:100,
    opacity: 0,
    ease: "power4",
    duration:1,
    stagger:0.01,
},"-=1");
//풀다운 메뉴
// $("#gnb .list > li").on("mouseenter",function(){
//     $("#header").addClass("over");
// });
// $("#gnb .list > li").on("mouseleave",function(){
//     $("#header").removeClass("over");
// });

//개별메뉴
$("#gnb .list > li").on("mouseenter",function(){
    $(this).find(".depth02").stop().slideDown(150);
});
$("#gnb .list > li").on("mouseleave",function(){
    $(this).find(".depth02").stop().slideUp(150);
});

//슬라이드
let mainVisualSlider = new Swiper("#mainVisual",{
    //지나가는 시간
    speed: 1000,
    //좌우 버튼
    navigation:{
        nextEl: "#mainVisual .btnNext",
        prevEl: "#mainVisual .btnPrev"
    },
    //효과
    effect: "coverflow",
    //슬라이드 무한 반복
    loop: true,//양 끝으로 마지막 객체가 생성되는 것
    //슬라이드 자동 실행
    autoplay: {
        delay:5000,//슬라이드 실행 시간
        disableOnInteraction: false,//사용자가 넘겼을 때 자동기능 꺼짐 비활성화
    },
    pagination: {
        el: '#mainVisual .pagination .bullets',
        type: 'bullets',
        clickable: 'true',//페이징 아이콘 클릭 시 이동
      },
});

$("#mainVisual .autoBox .pause").on("click",function(){
    $(this).hide();//멈춤버튼 사라짐
    $(this).siblings().show();//이웃인 재생버튼 나타남
    mainVisualSlider.autoplay.stop();//자동재생 멈춤
});
$("#mainVisual .autoBox .auto").on("click",function(){
    $(this).hide();//재생버튼 사라짐
    $(this).siblings().show();//이웃인 멈춤버튼 나타남
    mainVisualSlider.autoplay.start();//자동재생 실행
    mainVisualSlider.slideNext();//다음 슬라이드로 바로 넘김
});

//btnSitemap 클릭 시 on 클래스 추가/제거 하기
$(".btnSitemap").on("click",function(){
    $(this).toggleClass("on");
});

//윈도우가 스크롤 됬을 때 on 클래스 추가/제거 하기
function addClass(element,className){
    if(!$(element).hasClass(className)){//클래스가 없으면 이벤트를 해라
        $(element).addClass(className);
    }
}
function removeClass(element,className){
    if($(element).hasClass(className)){//클래스가 없으면 이벤트를 해라
        $(element).removeClass(className);
    }
}

//윈도우가 스크롤 됬을 때 header와 btnTop, mainLink에 on 클래스 추가/제거 하기
$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    //console.log(st);
    if(st > 0 ){//스크롤이 움직일 때마다 이벤트가 일어남
        addClass("#header","on");
        addClass(".btnTop","on");
        addClass("#mainLink","on");
        addClass("#mainVisual","on");
    }else{
        removeClass("#header","on");
        removeClass(".btnTop","on");
        removeClass("#mainLink","on");
        removeClass("#mainVisual","on");
    }
});


gsap.registerPlugin(ScrollToPlugin);//플러그인 호출 방법

//btnTop 클릭 시 최상단으로 이동
$(".btnTop").on("click",function(){
    //방법1
    // gsap.to("html,body",{
    //     scrollTop:0,
    //     duration: 1,
    //     ease:"power4.inOut",
    // });
    //방법2
    gsap.to("html,body",{
        scrollTo:0,
        //응용) 스크롤내린만큼 올라가는 시간이 걸리게 하나, 최소 시간 2초를 리미트로 설정
        duration:Math.min($(window).scrollTop()/1000, 1.5),
        ease:"power4.inOut",
    });
});

//var header = jQuery("#header");
let lnbMenu = $("#lnb .dropMenu ul");
let lnbBtn = $("#lnb .dropMenu .btnDrop");

//변수는 적용되는 범위를 가진다.
let st = 0;
//let st = 0;
//const st = 10;
function scope() {
    
    {
        let b = 20;
        var a = 10;
    }
    console.log(a);
    console.log(b);
}
//arrow function
lnbBtn.on("click",function(){
    //e.preventDefault();
    //lnbMenu.toggle();
    let dropMenu =  $(this).next("ul");
    dropMenu.stop().slideToggle(300);
    //fadeIn()  / fadeOut();       fadeToggle();
    //addClass / removeClass();    toggleClass();
    //alideUp() / slideDonw();     slideToggle(); 
    $(this).toggleClass("on");
    return false;
});

$(".tab .menu li").on("click",function(){
    //메뉴 li 클릭 시 클래스명 on 추가
    let _this = $(this);
    _this.addClass("on");
    _this.siblings("li").removeClass("on");

    //클릭한 메뉴 li 동일 인덱스의 내용 li 표기
    let idx = _this.index();
    let selectedItem = _this.parents(".tab").find(".contents > ul > li").eq(idx);
    selectedItem.show();
    selectedItem.siblings().hide();
});