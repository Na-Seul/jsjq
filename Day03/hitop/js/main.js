new Swiper("#mainVisual",{
    loop:true,
    speed:1000,
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },
    navigation: {
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    pagination: {
        el:"#mainVisual .pagination",
        clickable:true,
    }
});