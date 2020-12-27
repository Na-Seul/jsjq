let oldY = 0;
let boundH = $(window).height();
let up = false;
$(window).on("resize",function(){//display 사이즈가 바꼈을 때
    boundH = $(window).height();//다시 설정
});
Draggable.create("#mobileNav",{//움직일 대상
    type:"y",//움직일 축
    edgeResistance:1,//돌출 범위
    bounds:{//움직일 범위
        top:boundH-30,
        left:0,
        height:30,
    },
    onDrag:function(){
        console.log(this.y);
        //비례식
        //y위치:opacity = -370:1 = this.y:x
        //x = this.y/-370
        gsap.set("#cover",{
            //opacity:this.y/-370,//드래깅에 따른 opacity 값 조정
            autoAlpha:this.y/-370,//opacity와 visibility 동시 컨트롤. jQuery의 fade와 같음
        });
        if (this.y < oldY) {//위로 올릴 때
            up = true;
        }else{//내릴 때
            up = false;
        }
        oldY = this.y;
    },
    onDragEnd:function(){//드래그를 놓았을 때 완전히 드래깅 되도록
        //조건을 걸어, 위로 올라갈 때 아래로 내려올 때 다르게
        if (up) {//위로 올릴 때
            gsap.to("#mobileNav",{
                y:-370,
            });
            gsap.to("#cover",{
                autoAlpha:1,
            });
        }else{//아래로 내릴 때
            gsap.to("#mobileNav",{
                y:0,
            });
            gsap.to("#cover",{
                autoAlpha:0,
            });
        }
        
    },
});
$(window).trigger("resize");