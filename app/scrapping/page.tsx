import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "폐차 견적 및 말소 | 평택·안성·천안 및 전국 어디서나 내차어때",
  description:
    "일반 폐차, 조기 폐차, 압류 폐차까지! 최고가 폐차 보상금 당일 지급 및 무료 견인 서비스를 제공합니다. 복잡한 말소 절차까지 깔끔하게 대행해 드립니다.",
  alternates: {
    canonical: "/scrapping",
  },
};

export default function Scrapping() {
  return (
    <>
      <div className="export-wrap">
        <h1>폐차</h1>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}폐차시 진행 절차가 어떻게 되나요?
          </h5>
          <p>
            아쉽게도 <span>매매나 수출이 불가능한 경우</span>에는
            <br />
            <span>최고가에 폐차</span>를 할 수 있도록 도와드리고 있습니다.
            <br />
            폐차비는 <span>폐차장 입고 후, 즉시 지급</span>됩니다.
            <br />
            서류 및 행정처리는 당일 또는 다음 날이면 완료되며
            <br />
            말소 서류를 보내드립니다.
          </p>
        </div>
        <div className="question-card">
          <h5>
            <span>Q.</span>
            {"  "}폐차시 필요한 서류는 무엇인가요?
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
