"use client";
import Image from "next/image";
import mockup from "../../public/mockup2.png";

export default function Information() {
  return (
    <>
      <div className="information-wrap">
        <div className="content">
          <h1>팔 곳은 많지만, 제대로 비교하는 곳은 내차어때.</h1>
          <div>
            안녕하세요, 내차어때입니다.
            <br />
            <span className="strong">내차어때</span>는 자동차{" "}
            <span className="strong">매매 상사</span>와 중고차{" "}
            <span className="strong">수출 업체</span>를<br />
            <span className="strong">직접 운영</span>하고 있습니다.
            <br />
            <br /> 중고차 매매, 수출, 폐차까지 한 곳에서 투명하게 비교하여
            <br />
            고객님의 차량 상태와 조건에 가장 맞는{" "}
            <span className="strong">최선의 처분 방법</span>을 찾아드립니다.
            <br />
            <br />
            내 차의 가치를 제대로 알고 파는 것,
            <br />
            지금 내차어때에서 시작해 보세요.
            <br />
            언제나 정직하고 친절한 상담을 약속드립니다.
            <br />
          </div>
          {/* <Image className="mockup" src={mockup} alt="mockup" /> */}
        </div>
      </div>
    </>
  );
}
