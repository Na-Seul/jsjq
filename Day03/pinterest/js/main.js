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
            //class로 item과 category 값 추가
            `
            <li class="item ${item.category}">
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
        let gallery = $('.grid').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry',
        });
        //로딩문구 제거
        $("#works li").addClass("end");

        //필터 리스트(all(item)/paint/photo/sketch) 배열화
        let filterArray = ["item","paint","photo","sketch"]
        //필터 생성
        $(".filter li").on("click", function(e){
            //a태그 이벤트 제어 방법1
            //e.preventDefault();

            //필터링 방법1
            //선택리스트의 인덱스
            let selected = $(this).index();
            //선택리스트의 인덱스와 동일한 필터리스트의 배열값
            gallery.isotope({filter:"."+filterArray[selected]});

            //필터링 방법2
            //임의 속성을 이용한 필터링
            //HTML에서 임의로 만든 속성은 data-어쩌구 로 작성해야한다
            //js에서 불러올 때는 data("어쩌구") 로 불러온다
            //gallery.isotope({filter:"."+$(this).data("filter-word")});

            //선택 리스트 색 변화
            $(this).addClass("on");
            $(this).siblings().removeClass("on");

            //a태그 이벤트 제어 방법2
            return false;
            console.log("return아래는 동작하지 않아요");
        });
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