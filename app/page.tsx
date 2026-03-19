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
            내차 가격
            <br />
            <span style={{ color: "rgb(249 66 57)" }}>더~ 높게</span>
          </h3>
          <p>
            차량 상담을 통해
            <br />
            <span style={{ color: "rgb(249 66 57)" }}>가장 높은 가격을 </span>
            받을 수 있도록
            <br />
            제시해드리겠습니다
          </p>
        </div>
        <div className="car-wrap">
          <div className="car-box">
            <div className="car-info">
              <div className="car-num">89다1234</div>
              <div className="info-line">
                <span className="title">모델명</span>
                <span className="content">올 뉴쏘렌토</span>
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
              <span>내차 해외 수출 예상 시세</span>
              <br />
              <span className="price">1000</span>
              <span>만원</span>
            </div>
            <ChartCanvas />
          </div>
        </div>
      </div>
      <div className="sec3">
        <h3>
          <span style={{ fontFamily: "GiantsInline" }}>내차어때</span> 의
          신속하고 정확한 서비스를 약속합니다
        </h3>
        <div className="card-wrap">
          <div className="card">
            차량 대금 즉시 입금!
            <br />
            서류처리 24시간 이내!
            <Image className="carCheck" src={carCheck} alt="car check image" />
            <span className="small">
              번거로운 매매 절차 NO!
              <br />
              하루면 모든 절차 완료!
            </span>
          </div>
          <div className="card">
            오래된 내차
            <br />제 값 받고 파세요!
            <Image className="carIcon" src={carIcon} alt="car image" />
            <span className="small">
              주행거리가 많아도, <br />
              사고가 있어도 OK!
            </span>
          </div>
          <div className="card">
            대한민국 어디라도
            <br />
            직접 찾아갑니다!
            <Image
              className="handshack"
              src={handshack}
              alt="handshack image"
            />
            <span className="small">
              거리가 멀어도,
              <br />
              출장상담 가능합니다.
            </span>
          </div>
        </div>
      </div>
      <div className="sec4">
        <p>
          자동차 매매, 수출, 폐차까지
          <br /> 모두 한곳에서 상담 가능합니다.
          <br /> <span style={{ fontFamily: "GiantsInline" }}>내차어때 </span>
          에서 편하게 상담해보세요!
          <br /> 친절한 상담을 약속 드립니다.
        </p>
        <a href="tel:+821044715896">
          <button>상담하기</button>
        </a>
      </div>
    </>
  );
}
