Splitting();


const mySkill = [
    {title:"html/css",capacity:90},
    {title:"javascript",capacity:80},
    {title:"ui",capacity:70}
];

gsap.fromTo("#main .sloganBox .slogan text",{
    strokeDashoffset: 1000,
},{
    strokeDashoffset: 0,
    duration:10,
});

const skillTL = gsap.timeline();
skillTL.from("#skill h2 .char", {
    opacity: 0,
    x: 100,
    stagger: {
        each: 0.25,
    },
})
.add(function(){
    for (let i = 0; i < mySkill.length; i++) {
        //원그래프 그리기
        gsap.fromTo(`#skill li:nth-child(${i+1}) circle`, {
            strokeDashoffset: 1000,//pathLength 값
        }, {
            strokeDashoffset: 1000-(mySkill[i].capacity*10),//0이면 다 그려지는 것, 값이 클수록 덜 그려진다
            ease: "bounce",
            duration: 2,
        });//깃발부터 시작
    
        //숫자 변경
        gsap.from(mySkill[i],{
            capacity:0,
            duration:2,
            onUpdate:function(){
                $(`#skill .skillBox li:nth-child(${i+1}) .txt`).text(Math.round(mySkill[i].capacity)+"%");
            },
        });
    };
});