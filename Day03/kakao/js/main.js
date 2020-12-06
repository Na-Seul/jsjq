let pageNum = 1, once = 30;
function searchImage() {
    //input값 받아오기
    let searchWord = $("#searchWord").val();

    $.ajax({
        //카카오 이미지 검색
        //size: 검색 표기 갯수, 1 ~ 80 사이의 값, 기본 80게
        //url: `https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=30`,

        //카카오 동영상 검색
        //size: 검색 표시 갯수, 1 ~ 30 사이의 값, 기본은 15개
        url: `https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=${once}&page=${pageNum}`,
        headers: {
            "Authorization": "KakaoAK b24f08b55b53be2ad9214cf8a60e149c"
        },
    }).done(function (res) {
        console.log(res);
        let documents = res.documents;
        //배열 순환
        $.each(documents, function (i, item) {
            //타이틀에 "가 들어오면 '로 변경
            let _title = item.title.replace("'", "", "\"", "");
            //ul에 배열의 내용(item)의 값 집어넣기

            //이미지
            //$("#thumbs .list").append(`<li><a data-fancybox="gallery" data-caption="<a href='${item.doc_url}'>${item.display_sitename}</a>" href="${item.image_url}" target="_blank"><img src="${item.thumbnail_url}" alt=""></a></li>`);

            //동영상
            $("#thumbs .list").append(`
            <li class="">
                <a data-fancybox="gallery" href="${item.url}" target="_blank">
                    <img src="${item.thumbnail}" alt="">
                </a>
            </li>
            `);
        });

        //검색 결과가 나올 때
        //(페이지 넘버-1)*한번에 나오는 갯수의 다음 요소들 전부
        //즉, 추가되는 요소들만 적용
        if (pageNum !== 1) {
            gsap.from($("#thumbs .list li").eq((pageNum - 1) * once - 1).nextAll(), {
                //사이즈 0에서 1로 나옴
                scale: 0,
                //각각 나옴
                stagger: {
                    //each:0.02,//각자 나타남
                    amount: 0.5,//총 걸리는 시간
                    //grid: "auto",//가로세로 격자
                    //from:"start",//좌측 상단에서 번지듯 나타남
                    //from: "center",//가운데서 번지듯 나타남
                }
            });
        } else {
            gsap.from("#thumbs .list li", {
                //사이즈 0에서 1로 나옴
                scale: 0,
                //각각 나옴
                stagger: {
                    //each:0.02,//각자 나타남
                    amount: 0.5,//총 걸리는 시간
                    //grid: "auto",//가로세로 격자
                    //from:"start",//좌측 상단에서 번지듯 나타남
                    //from: "center",//가운데서 번지듯 나타남
                }
            });
        }
    });
}

//키보드가 눌렸다 떼질 때 실행
$("#searchWord").on("keyup", function (e) {
    //매개변수 e의 엔터값 구하기: keycode 13.
    //console.log(e); //-> 엔터치고 console 확인
    pageNum = 1, once = 30;
    if (e.keyCode === 13) {
        //기존 출력된 내용 제거
        $("#thumbs .list").html("");
        searchImage();
    }
});

//검색버튼 누를 때 실행
$("#search .btn").on("click", function () {
    pageNum = 1, once = 30;
    //기존 출력된 내용 제거
    $("#thumbs .list").html("");
    searchImage();
});

//페이지 증가
$(".more .btn").on("click", function () {
    pageNum++;
    searchImage();
});