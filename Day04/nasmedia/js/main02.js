const paginationArray = ["Main", "Our value", "What we do", "Nas report", "Let's be together"];
new Swiper("#main", {
    direction: "vertical",
    mousewheel: true,
    speed: 1000,
    parallax: true,
    pagination: {
        el: ".pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `
            <span class="${className}">
                <span class="name">${paginationArray[index]}</span>
                <span class="dot"></span>
            </span>
            `;
        },
    },
    on:{
        slideChangeTransitionEnd: function(swiper){
            console.log(this.activeIndex);
        },
        slideChangeTransitionStart: function(swiper){
            console.log(this.activeIndex);
            let idx = this.activeIndex;
            if (idx===1 || idx===3) {
                $("body").addClass("white");
            }else{
                $("body").removeClass("white");
            }
        }
    }
});