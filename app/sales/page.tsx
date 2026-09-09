import { Metadata } from "next";

export const metadata: Metadata = {
  title: "중고차 매매 | 평택·안성·천안 및 전국 어디서나 내차어때",
  description:
    "평택·안성·천안 및 전국 어디서나 간편하게! 중고차 매매, 복잡한 서류 절차 없이 방문 상담부터 당일 명의 이전까지 한 번에 처리해 드립니다.",
  alternates: {
    canonical: "/sales",
  },
};
export default function Sales() {
  return (
    <>
      <div className="export-wrap">
        <h1>중고차 매매</h1>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}중고차 매매시 진행 절차가 어떻게 되나요?
          </h5>
          <p>
            유선 혹은 직접 방문해서 견적 안내해드린 후,
            <br />
            차량 픽업 전, <span>대금 지급</span> 후 차량 매매 진행하고 있습니다.
            <br />
            서류 및 행정처리는 당일 또는 다음 날이면 완료되며
            <br />
            이전된 서류를 보내드립니다.
          </p>
        </div>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}매매시 필요한 서류는 무엇인가요?
          </h5>
          <p>
            차량명의자의 <span>신분증</span>과 <span>자동차등록증</span>,{"  "}
            <span>매도용 인감</span>이 필요합니다.
            <br />
            매도용 인감은 가까운 주민센터에서 발급 가능합니다.
            <br />
            신분증과 자동차등록증은 사진전송으로도 가능합니다.
          </p>
        </div>
      </div>
    </>
  );
}
