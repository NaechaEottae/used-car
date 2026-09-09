import Image from "next/image";
import car from "../public/sportage.png";
import carCheck from "../public/car_check_icon.png";
import carIcon from "../public/white_car_icon.png";
import handshack from "../public/handshake_icon.png";
import ChartCanvas from "@/components/chart";

export default function Home() {
  return (
    <>
      <div className="sec1"></div>
      <div className="sec2">
        <div className="msg-box">
          <h1>
            내 차, <br />
            어디에 팔아야
            <br />
            가장 이득일까?
            <br />
          </h1>
          <p>
            내 차, 현명하게 처분하세요.
            <br />
            <br />
            중고차 매매부터 수출, 폐차까지
            <br />
            내차어때에서 한 번에 비교하고
            <br />
            가장 유리한 방법으로 선택하세요.
          </p>
          <a href="tel:+821044715896">
            <button>내 차 무료 견적 받기</button>
          </a>
        </div>
        <div className="car-wrap">
          <div className="car-box">
            <div className="car-info">
              <div className="car-num">89다1234</div>
              <div className="info-line">
                <span className="title">모델명</span>
                <span className="content">스포티지</span>
              </div>
              <div className="info-line">
                <span className="title">연식</span>
                <span className="content">2017년식</span>
              </div>
              <div className="info-line">
                <span className="title">주행거리</span>
                <span className="content">300,000km</span>
              </div>
            </div>
            <Image className="car-icon" src={car} alt="car icon" />
          </div>
          <div className="chart-box">
            <div>
              <span>
                내차 <strong>중고차 수출</strong> 예상 시세
              </span>
              <br />
              <span className="price">1000</span>
              <span>만원</span>
            </div>
            <ChartCanvas />
          </div>
        </div>
      </div>
      <div className="sec3">
        <h3>내 차 처분, 한 곳에서 비교하고 결정하세요.</h3>
        <div className="card-wrap">
          <div className="card">
            직접 운영
            <br />
            <Image className="carCheck" src={carCheck} alt="car check image" />
            <span className="small">
              매매상사와 수출 업체를
              <br />
              직접 운영하여
              <br />
              거품 없는 견적 제공
            </span>
          </div>
          <div className="card">
            맞춤 솔루션
            <Image className="carIcon" src={carIcon} alt="car image" />
            <span className="small">
              차량 상태에 맞춰
              <br />
              가장 유리한 처분 방법 제안
              <br />
              매매 · 수출 · 폐차
              <br />
            </span>
          </div>
          <div className="card">
            원스톱 진행
            <Image
              className="handshack"
              src={handshack}
              alt="handshack image"
            />
            <span className="small">
              복잡한 말소 및 <br />
              서류 절차까지 깔끔하게 해결
              <br />
            </span>
          </div>
        </div>
      </div>
      <div className="sec4">
        <p>
          <br />
          이런 차량도 상담 가능합니다
          <br />
          <br />✅ 주행거리 20만km 이상
          <br />✅ 사고 이력 차량
          <br />✅ 오래된 연식
          <br />✅ 외관 손상 차량
          <br />✅ 침수/고장 차량
          <br />✅ 노후 경유 차량
          <br />✅ 압류 차량
          <br />✅ 방전된 차량
          <br />
          <br /> 무작정 폐차하지말고, <br />
          <span style={{ fontFamily: "GiantsInline" }}>내차어때 </span>
          에서 편하게 상담해보세요!
          <br />
          <br />
        </p>
        <a href="tel:+821044715896">
          <button>무료 상담 받기</button>
        </a>
      </div>
      <div className="sec5">
        <h3>실제 고객 후기</h3>
        <p>내차어때를 이용하신 고객님들의 실제 이용 후기입니다.</p>
        <div>
          <div className="review-card">
            <h5>중고차 구매</h5>
            <p>
              "너무 친절하게 잘해주셨어요
              <br />
              블박 하이패스 오일정비까지 다해주시고
              <br />
              가격도 너무 합리적으로 잘해주셨어요
              <br />
              주변에 추천도 꼭 드릴게요"
            </p>
            <span>sso****고객님</span>
          </div>
          <div className="review-card">
            <h5>중고차 수출</h5>
            <p>
              "제 첫 차를 떠나보내는 것이라 마음이 많이 복잡했는데
              <br />
              주실장님께서 직접 찾아와 시간에 맞추어 잘 안내해주시고
              <br />
              적절한 사유와 가격을 제시해주셔서
              <br />
              좋은 추억으로 소중했던 차를 떠나보냈습니다"
            </p>
            <span>won****고객님</span>
          </div>
          <div className="review-card">
            <h5>폐차</h5>
            <p>
              "차 수리비가 많이 나오면서 중고로 팔지, 수출을 보낼지, 폐차 진행을
              해야될 지
              <br />
              고민이 많았는데 사장님께서 친절하게 잘 설명해주셔서
              <br />
              고민 끝에 폐차 진행하고 왔습니다.
              <br />
              폐차가 처음이긴 하지만 평택 근교에 거주하시는 분들은 무조건 여기
              방문하시면 될 거 같습니다!!"
            </p>
            <span>lk****고객님</span>
          </div>
        </div>
        <a href="/customer-review">
          <button>더보기</button>
        </a>
      </div>
    </>
  );
}
