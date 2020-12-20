let num = 0;
let itemWith = 500;
let total = $("#main .carousel ul li").length;
let angle = 360 / total;
let zDepth = (itemWith / 2) / Math.tan(Math.PI / total);//거리 = 가로의 반/tan(파이/전체 갯수/2) = 250/tan(15)
let alpha = 0.8;
//제이쿼리에서의 css 설정1
$("#main .carousel ul").css({ transform: `translateZ(${-zDepth}px)` });
$("#main .carousel ul li").each(function (i, item) {
    $(this).css({ 
        transform: `rotateY(${angle * i}deg) translateZ(${zDepth}px)`,
        backgroundColor: `rgba(${i*20}, ${(i+3)*10}, ${(i+10)*20}, ${alpha})`,
    })
});

$('#main .btns .next').on("click", function () {
    num--;
    gsap.to("#main .carousel ul", {
        rotateY: angle * num,
        ease: "power4",
        duration: 1,
    });
});
$('#main .btns .prev').on("click", function () {
    num++;
    gsap.to("#main .carousel ul", {
        rotateY: angle * num,
        ease: "power4",
        duration: 1,
    });
});