import Image from "next/image";
import car from "../public/sorento.png";
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
          <h3>
            내 차, <br />
            어디에 팔아야
            <br />
            가장 이득일까?
            <br />
          </h3>
          <p>
            아직도 내 차 팔려고 여기저기 발품 파세요?
            <br />
            <br />
            <br />
            내 차를 파는 가장 현명한 방법.
            <br />
            매매부터 수출,폐차까지 비교하는 내차어때.
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
          <br />✅ 운행 불가 차량
          <br />✅ 수출 가능 차량
          <br />✅ 폐차 대상 차량
          <br />
          <br /> 폐차하기 전에 <br />
          <span style={{ fontFamily: "GiantsInline" }}>내차어때 </span>
          에서 편하게 상담해보세요!
          <br />
          <br />
        </p>
        <a href="tel:+821044715896">
          <button>상담하기</button>
        </a>
      </div>
    </>
  );
}
