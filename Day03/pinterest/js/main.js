$.ajax({
    url: "typo.json",//js파일이 불러와지는 html의 경로에서 상대경로 시작
}).done(function (res) {
    //키 typoList의 값(배열) 가져오기
    let typoList = res.typoList;
    //키 imgFolder의 값 가져오기
    let imageFolder = res.imageFolder;

    //배열의 값(객체) 한개씩 가져오기
    $.each(typoList, function (i, item) {
        //이미지 주소 변수화
        let img = imageFolder + item.img;

        //ul에 내용 삽입
        $("#works .grid").append(
            `
            <li class="item">
                <a href="${img}" data-fancybox="${item.category}">
                    <div class="imgBox">
                        <img src="${img}" alt="">
                    </div>
                    <div class="infoBox">
                        <h2>${item.title}</h2>
                        <p class="desc">${item.desc}</p>
                        <p class="point"><span>${item.point}</span></p>
                    </div>
                </a>
            </li>
            `
        );
    });
    //이미지가 로딩되면
    $('#works').imagesLoaded()
    .done(function(instance){
        //isotope 적용
        $('.grid').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry',
        });
        //로딩문구 제거
        $("#works li").addClass("end");
    });
});

//커서 따라오기
$(window).on("mousemove", function (e) {
    gsap.to(".cursor", {
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
        ease: "power4"
    });
});
$(window).on("mousemove", function (e) {
    gsap.to(".cursorFollower", {
        left: e.clientX,
        top: e.clientY,
        duration: 0.7,
        ease: "power2",
    });
});

//li에 커서가 올라가면 on 클래스 추가
$("body").on("mouseenter", "#works li", function () {
    $(".cursor").addClass("on");
    $(".cursorFollower").addClass("on");
});
$("body").on("mouseleave", "#works li", function () {
    $(".cursor").removeClass("on");
    $(".cursorFollower").removeClass("on");
});