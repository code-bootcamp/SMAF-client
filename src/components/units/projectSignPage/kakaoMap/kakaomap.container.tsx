// 카카오지도
import { useEffect } from "react";
import KakaoMapUI from "./kakaomap.presenter";

declare const window: typeof globalThis & {
    kakao: any;
};

export default function KakaoMapPage(props: any) {
    useEffect(() => {
        const script = document.createElement("script"); // <script></script>
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2354913af21df03ad4d0ed912052c38&libraries=services&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(function () {
                const mapContainer = document.getElementById("map"); 
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };

                // 지도를 생성합니다
                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                const geocoder = new window.kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(props.address, function (result: any, status: any) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                        map.setCenter(coords);
                    }
                });
            });
        };
    }, [props.address, props.data?.fetchProject.address?.address]);

    return <KakaoMapUI />;
}
