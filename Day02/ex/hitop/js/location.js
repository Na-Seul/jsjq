//주소, 장소명, 링크 배열
let addressList = [{
        add: "서울 송파구 성내천로 14길 13",
        title: "HITOP 서울 사무소",
        link: "http://kko.to/QBcQowbDB"
    },
    {
        add: "강원도 동해시 동굴로 147",
        title: "HITOP 강원 사무소",
        link: "http://kko.to/0bzgD6sDo"
    },
    {
        add: "경기도 남양주시 화도읍 비룡로 464번길 42",
        title: "HITOP 1공장",
        link: "http://kko.to/1V6ZDwsDT"
    },
    {
        add: "경기도 파주시 광탄면 명봉산로 352번길 34-54",
        title: "HITOP 2공장",
        link: "http://kko.to/H8xSY6bDB"
    },
];

//지도 함수 호출
loadMap(addressList[0]);

//지도를 함수로
function loadMap(obj) {
    $("#map").html(""); //호출될 때마다 기존에 있던 내용 제거

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    //=======주소로 위도 경도 찾기=======//
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(obj.add, function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var imageSrc = '../images/contents/location.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                imageOption = {
                    offset: new kakao.maps.Point(27, 69)
                }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = coords; // 마커가 표시될 위치입니다

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImage // 마커이미지 설정 
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var content = '<div class="customoverlay">' +
                '  <a href="' + obj.link + '" target="_blank">' +
                '    <span class="title">' + obj.title + '</span>' +
                '  </a>' +
                '</div>';

            // 커스텀 오버레이가 표시될 위치입니다 
            var position = coords;

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: position,
                content: content,
                yAnchor: 1
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });
    //=======주소로 위도 경도 찾기=======//
}

$("#location .tab .menu li").on("click", function () {
    loadMap(addressList[$(this).index()]); //함수 호출
});