// components/kakaomaps.tsx 수정 버전
"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

export default function KakaoMap() {
  const [isReady, setIsReady] = useState<boolean>(false);

  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_API_KEY_KAKAOMAP_KEY!,
    libraries: ["services", "clusterer"],
  });

  useEffect(() => {
    // 로딩이 끝나고, 실제 window.kakao.maps 객체가 존재할 때만 Ready 상태로 변경
    if (!loading && window.kakao && window.kakao.maps) {
      setIsReady(true);
    }
  }, [loading]);

  if (error) return <div>지도를 불러오기를 실패했습니다.</div>;
  if (!isReady) return <div>지도를 준비 중입니다...</div>;

  // 경기 평택시 유천2길 41-20 좌표
  const position = { lat: 36.969634, lng: 127.10668 };
  const placeName = "내차어때"; // 여기에 가게 이름이나 회사명을 적으세요.

  // 1. 큰 지도로 보기 (웹 페이지)
  const openKakaoMap = () => {
    const url = `https://map.kakao.com/link/map/${placeName},${position.lat},${position.lng}`;
    window.open(url, "_blank");
  };

  // 2. 카카오내비 실행 (길찾기)
  const openKakaoNavi = () => {
    const url = `https://map.kakao.com/link/to/경기 평택시 유천2길 41-20,${position.lat},${position.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="map-area">
      <Map
        center={position}
        style={{ width: "100%", height: "100%" }}
        level={7}
      >
        <MapMarker position={position} onClick={openKakaoMap}></MapMarker>
      </Map>
      {/* <span onClick={openKakaoNavi}>카카오네비로 안내하기</span> */}
    </div>
  );
}
