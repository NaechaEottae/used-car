import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "중고차 수출 | 평택·안성·천안 및 전국 어디서나 내차어때",
  description:
    "주행거리가 많거나 연식이 오래되어 국내 판매가 어려운 차량도 OK! 해외 직수출로 국내 시세 대비 더 높은 가격을 받아보세요. 무료 견적 상담 가능.",
  alternates: {
    canonical: "/export-car",
  },
};

export default function ExportCar() {
  return (
    <>
      <div className="export-bg"></div>
      <div className="export-wrap">
        <h1>중고차 수출</h1>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}중고차 수출시 진행 절차가 어떻게 되나요?
          </h5>
          <p>
            직접 방문하여 차량 검수 후,
            <br />
            다양한 국가에 <span>비교 견적하여 최고가로 </span> 수출 진행해
            드립니다.
            <br />
            차량 픽업 전, 수출 대금은 <span>현장에서 즉시 지급</span>해
            드립니다.
            <br />
            서류 및 행정처리는 당일 또는 다음 날이면 완료되며
            <br />
            이전된 서류를 보내드립니다.
          </p>
        </div>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}중고차 수출시 필요한 서류는 무엇인가요?
          </h5>
          <p>
            차량명의자의 <span>신분증</span>과 <span>자동차등록증</span>이
            필요합니다.
            <br />
            신분증과 자동차등록증은 사진전송으로도 가능합니다.
          </p>
        </div>
      </div>
    </>
  );
}
