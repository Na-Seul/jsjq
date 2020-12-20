$.ajax({
    url:"bigbang.json",
})
.done(function(res){
    let clock = res.clock;
    $.each(clock,function(i,item){
        $("#main").append(
            `
            <div class="section" style="background-image:url(${item.bg})">
                <div class="info">
                    <p class="category" data-splitting>${item.category}</p>
                    <p class="title" data-splitting>
                        ${item.title}
                    </p>
                    <p class="depth" data-splitting>
                        ${item.depth}
                    </p>
                    <p class="price" data-splitting>
                        CHF ${item.price}
                    </p>
                </div>
            </div>
        `
        );
    });
    Splitting();
    $("#main").fullpage({
        //있으면 스크롤이 움직이는데, 없으면 main이 움직임
        scrollBar:true,
        onLeave:function(origin,destination,diraction){
            let idx = destination.index;
            gsap.set(`.section:nth-child(${idx+1}) .char`,{
                y:-200,
                opacity:0,
            });
        },
        afterLoad:function(origin,destination,diraction){
            let idx = destination.index;
            gsap.fromTo(`.section:nth-child(${idx+1}) .char`,{
                y:-200,
                opacity:0,
            },{
                y:0,
                opacity:1,
                ease:"bounce",
                duration:1.5,
                stagger:{
                    each:0.02,
                    from:"random",//아무렇게나 낙하
                }
            });
        },
    });
});