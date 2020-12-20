$.ajax({
    url:"bigbang.json"
})
.done(function(res){
    console.log(res);
    const clock = res.clock;
    $.each(clock,function(i,item){
        $("#main .cardWrap ul").append(
            `
            <li>
                <div class="card">
                    <div class="front">
                        <img src="${item.bg}" alt="">
                    </div>
                    <div class="back">
                        <div class="info">
                            <p class="category">${item.category}</p>
                            <p class="title">${item.title}</p>
                            <p class="depth">${item.depth}</p>
                            <p class="price">${item.price}</p>
                        </div>
                    </div>
                </div>
            </li>
            `
        );
    });
});

//없는 DOM에 이벤트를 설정할 수 없음 -> body에 이벤트 설정 후 위임
//$("#main .cardWrap ul li").on("click",function(){
$("body").on("click mouseenter","#main .cardWrap ul li",function(){
    let _card = $(this).find(".card");
    let ty;
    if (!$(this).hasClass("flip")) {
        ty=-180;
        $(this).addClass("flip");
    }else{
        ty=0;
        $(this).removeClass("flip");
    }
    gsap.to(_card,{
        rotateY: ty,
        ease: "back.inOut",
        duration:1,
    });
});