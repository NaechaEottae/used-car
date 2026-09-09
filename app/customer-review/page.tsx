import Image from "next/image";
import review01 from "../../public/review01.jpg";
import review02 from "../../public/review02.jpg";
import review03 from "../../public/review03-1.jpg";
import review04 from "../../public/review04.jpg";
import review05 from "../../public/review05.jpg";
import review06 from "../../public/review06.jpg";
import review07 from "../../public/review07.jpg";
import review08 from "../../public/review08.jpg";
import review09 from "../../public/review09.jpg";
import review10 from "../../public/review10.jpg";
import review11 from "../../public/review11.jpg";
import review12 from "../../public/review12.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "실제 고객 리뷰 | 내차어때",
  description:
    "실제 내차어때를 이용하신 고객님들의 생생한 중고차 매입·수출·폐차 이용 후기를 확인해보세요. 높은 만족도와 솔직한 평가로 신뢰할 수 있는 거래를 약속드립니다.",
  alternates: {
    canonical: "/customer-review",
  },
};

export default function CustomerReview() {
  return (
    <>
      <div className="review-wrap">
        <h1>내차어때 고객리뷰</h1>
        <div className="content-wrap">
          <div className="card">
            <Image className="card-image" src={review12} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                첫 차량 처분인데 처음부터 끝까지 너무 자세히 설명해주시고
                <br />
                깔끔하게 진행해 주셔서 감사합니다.
              </p>
              <span className="small-font">
                2026.07.22{"  "}|{"  "}dbajrkarkr
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review11} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                지인 소개 받고 평택 내차어때(신화모터스)에서 구매 했습니다.
                <br />
                차량 소개도 친절하고 세세하게 잘 알려주셔서 마음에 드는 차량 잘
                구매하고 왔습니다!
                <br />
                차량 구매 하실때 추천 드려요
              </p>
              <span className="small-font">
                2026.07.06{"  "}|{"  "}초코초코쵹a
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review10} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                이번에 중고차를 판매했는데 처음부터 끝까지 정말 만족스러웠어요.
                <br />
                차량 상태를 꼼꼼하게 확인한 뒤 시세를 자세히 설명해 주셔서
                믿음이 갔고, 불필요한 감가 없이 합리적인 가격으로 매매를 진행할
                수 있었어요.
                <br />
                계약 절차도 빠르고 친절하게 안내해 주셔서 어렵지 않았고, 필요한
                서류 처리까지 신속하게 도와주셔서 편했습니다.
                <br />
                궁금한 점도 하나하나 자세히 답변해 주셔서 안심할 수 있었고,
                입금도 약속한 시간에 정확하게 이루어졌어요.
                <br />
                중고차를 처음 판매하는 분들도 부담 없이 이용할 수 있을만큼
                만족스러운 거래였습니다.
                <br />
                다음에도 차량을 사고팔 일이 생기면 다시 이용하고 싶은 곳이에요.
              </p>
              <span className="small-font">
                2026.07.13{"  "}|{"  "}체리쥬빌레레
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review09} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                너무 친절하게 잘해주셨어요
                <br />
                블박 하이패스 오일정비까지 다해주시고
                <br />
                가격도 너무 합리적으로 잘해주셨어요
                <br />
                주변에 추천도 꼭 드릴게요
              </p>
              <span className="small-font">
                2026.05.26{"  "}|{"  "}sso****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review08} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                제 첫 차를 떠나보내는 것이라 마음이 많이 복잡했는데
                <br />
                주실장님께서 직접 찾아와 시간에 맞추어 잘 안내해주시고
                <br />
                적절한 사유와 가격을 제시해주셔서
                <br />
                좋은 추억으로 소중했던 차를 떠나보냈습니다
              </p>
              <span className="small-font">
                2026.05.03{"  "}|{"  "}won****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review01} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                너무 잘해주셔서 아이들이랑 잘 타고 다닐 수 있을 것 같아요!
                <br />
                다음에도 중고차 필요하면 또 연락드릴것같아요~
                <br />
                중고차 처음 사보는거라 걱정도 많이했는데
                <br />잘 알려주셔서 진짜 잘산 것 같아서 기분이 너무 좋습니다
                감사합니다!
              </p>
              <span className="small-font">
                2026.01.28{"  "}|{"  "}Stemo
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review06} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                첫 중고차인데 상태가 너무 좋아서 항상 감사합니다 ㅎㅎ
                <br />
                꼭 여기서 구매하세여 사장님도 친절하셨습니다 ㅎㅎ
                <br />
                감사합니다👍
              </p>
              <span className="small-font">
                2026.01.26{"  "}|{"  "}jel****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review03} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                차 수리비가 많이 나오면서 중고로 팔지, 수출을 보낼지, 폐차
                진행을 해야될 지
                <br />
                고민이 많았는데 사장님께서 친절하게 잘 설명해주셔서
                <br />
                고민 끝에 폐차 진행하고 왔습니다.
                <br />
                폐차가 처음이긴 하지만 평택 근교에 거주하시는 분들은 무조건 여기
                방문하시면 될 거 같습니다!!
              </p>
              <span className="small-font">
                2025.12.15{"  "}|{"  "}lk****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review04} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                친절하게 상담해주셔서 차 잘 구매했습니다.
              </p>
              <span className="small-font">
                2025.12.2{"  "}|{"  "}rudals7412
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review05} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                이번에 중고차 넘기면서 내차어때이용하게 되었는데
                <br />
                가격도 최대한 맞춰주시고 편안한분위기속에 친절하게 응대해주셔서
                잘 판매했네요.
                <br />
                다음에도 판매하게 되면 또 이용하겠습니다. 번창하십쇼~!
              </p>
              <span className="small-font">
                2025.11.6{"  "}|{"  "}긍정의힘2785
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review02} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                사장님이 너무 친절하시고 잘 처리해주셔서 감사합니다!!
              </p>
              <span className="small-font">
                2025.09.12{"  "}|{"  "}죠셉긱스
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review07} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                스쿠버다닐때 필요한 차를 찾고있었는데 차도 많이보여주시고 딱
                맞고 가성비도 좋은차로 구했습니다
                <br />
                친절하시고 좋아요 주실장님ㅎ
              </p>
              <span className="small-font">
                2025.09.12{"  "}|{"  "}임정희7
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
