"use client";

import dynamic from "next/dynamic";

// ✅ 중요: dynamic 선언은 반드시 컴포넌트 함수 "외부"에 있어야 합니다.
const KakaoMap = dynamic(() => import("../../components/kakaomaps"), {
  ssr: false, // 이 설정이 제대로 먹히려면 외부에 선언해야 합니다.
  loading: () => <div>지도를 불러오는 중...</div>,
});

export default function Directions() {
  return (
    <>
      <div className="directions-wrap">
        <p style={{ fontSize: "24px" }}>
          방문 전 반드시 예약이 필요합니다.
          <br />
          꼭! 상담 후 방문해 주세요.
          <br />
          <a href="tel:+821044715896" style={{ textDecoration: "underline" }}>
            상담하기
          </a>
        </p>
        <KakaoMap />
      </div>
    </>
  );
}
