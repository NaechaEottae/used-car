"use client";
import Image from "next/image";
import mockup from "../../public/mockup2.png";

export default function Information() {
  return (
    <>
      <div className="information-wrap">
        <h1>회사소개</h1>
        <div className="content">
          <div>
            <span className="strong">내차어때</span>는 자동차{" "}
            <span className="strong">매매 상사</span>와 중고차{" "}
            <span className="strong">수출 업체</span>를<br />
            <span className="strong">직접 운영</span>하고 있습니다.
            <br />
            <br />
            소비자의 입장에서 매매, 수출, 폐차 중<br />
            <span className="strong">가장 좋은 가격</span>을 받으실 수 있도록
            <br />
            제안 및 진행해 드리고있습니다.
            <br />
            <br />
            항상 친절한 상담을 약속드리겠습니다.
            <br />
            감사합니다 ^^
            <br />
          </div>
          {/* <div className="small"> */}
          {/* 자동차 매매, 수출, 폐차 견적까지 내차어때에서 한 번에 가능합니다.
            <br />
            소중한 내 차 이제 제값 받고 처리하세요. */}
          {/* 내 가족에게 추천 해주고 싶은 중고차 업체. <br />재 거래율이 높은
            중고차 매매 업체. */}
          {/* </div> */}
          <Image className="mockup" src={mockup} alt="mockup" />
        </div>
      </div>
    </>
  );
}
