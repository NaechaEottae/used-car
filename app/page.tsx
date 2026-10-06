import Image from "next/image";
import car from "../public/bh330.png";
import 수출단지 from "../public/수출단지.png";
import 차량확인 from "../public/차량확인.png";
import 말소증 from "../public/말소증.png";
import 매매 from "../public/후기-매매.png";
import 수출 from "../public/후기-수출.png";
import 폐차 from "../public/후기-폐차.png";
import ChartCanvas from "@/components/chart";
import squareRoundedCheck from "../public/square-rounded-check.svg";

export default function Home() {
  return (
    <>
      <div className="sec1">
        <div className="intro-box">
          <span className="intro-label"></span>

          <h2>
            정직하고 투명한 거래,
            <br />
            <strong>내차어때의 원칙입니다.</strong>
          </h2>

          <p>
            내차어때의 핵심은 <strong>정직하고 투명한 거래</strong>입니다.
            <br />
            <br />
            차량을 인도받은 후 말소를 빌미로
            <br className="pc-br" />
            처음 안내드린 금액을 깎거나,
            <br />
            예상하지 못한 감액을 요구하는 일은 하지 않습니다.
          </p>

          <div className="intro-line"></div>

          <div className="intro-bottom-wrap">
            <p className="intro-bottom">
              안전하고 정직한 차량 처분,
              <br />
              <strong>내차어때에서 시작하세요.</strong>
            </p>

            <a href="tel:01099545896" className="intro-button">
              문의하기
            </a>
          </div>
        </div>
      </div>
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
            중고차 매매부터 수출까지
            {/* 중고차 매매부터 수출 · 폐차까지 */}
            <br />
            <br />
            내차어때에서 한 번에 비교하고,
            <br />
            가장 유리한 방법으로 선택하세요!
          </p>
          <a href="tel:01099545896" target="_parent">
            <button>내 차 무료 견적 받기</button>
          </a>
        </div>
        <div className="car-wrap">
          <div className="car-box">
            <div className="car-info">
              <div className="car-num">23차1234</div>
              <div className="info-line">
                <span className="title">모델명</span>
                <span className="content">제네시스 BH330</span>
              </div>
              <div className="info-line">
                <span className="title">연식</span>
                <span className="content">2013년식</span>
              </div>
              <div className="info-line">
                <span className="title">주행거리</span>
                <span className="content">210,000km</span>
              </div>
            </div>
            <Image className="car-icon" src={car} alt="car icon" />
          </div>
          <div className="chart-box">
            <div>
              <span>
                해당 차량은 <strong>중고차 수출</strong>이<br />
                가장 유리합니다.
              </span>
              <br />
              <ChartCanvas />
              <br />
              <span>예상 시세 </span>
              <span className="price"> 450</span>
              <span>만원</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sec3">
        <h3>내 차 처분, 한 곳에서 비교하고 결정하세요.</h3>

        <div className="card-wrap">
          {/* 직접 운영 */}
          <div className="card">
            <div className="card-image">
              <Image
                src={수출단지}
                alt="중고차 수출단지 전경"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 360px"
              />
            </div>

            <div className="card-content">
              <h4>직접 운영</h4>

              <p>
                매매상사와 수출 업체를
                <br />
                직접 운영하여
                <br />
                거품 없는 견적 제공
              </p>
            </div>
          </div>

          {/* 맞춤 솔루션 */}
          <div className="card">
            <div className="card-image">
              <Image
                src={차량확인}
                alt="차량의 엔진과 상태를 확인하는 모습"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 360px"
              />
            </div>

            <div className="card-content">
              <h4>맞춤 솔루션</h4>

              <p>
                차량 상태에 맞춰
                <br />
                가장 유리한 처분 방법 제안
                <br />
                매매 · 수출
                {/* 매매 · 수출 · 폐차 */}
              </p>
            </div>
          </div>

          {/* 원스톱 진행 */}
          <div className="card">
            <div className="card-image card-image-document">
              <Image
                src={말소증}
                alt="자동차 말소등록사실증명서 예시"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 360px"
              />
            </div>

            <div className="card-content">
              <h4>원스톱 진행</h4>

              <p>
                복잡한 말소 및
                <br />
                서류 절차까지
                <br />
                깔끔하게 해결
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec4">
        <div>
          이런 차량도 상담 가능합니다
          <br />
          <br />
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>주행거리 20만km 이상</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>사고 이력 차량</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>오래된 연식</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>외관 손상 차량</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>침수/고장 차량</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>노후 경유 차량</span>
          </div>
          <div className="row">
            <Image
              className="checkIcon"
              src={squareRoundedCheck}
              alt="check icon"
            />
            <span>압류 차량</span>
          </div>
          <br /> 무작정 폐차하지말고, <br />
          <span style={{ fontFamily: "GiantsInline", color: "#38832f" }}>
            내차어때{" "}
          </span>
          에서 편하게 상담해보세요!
          <br />
          <br />
        </div>
        <a href="tel:01099545896" target="_parent">
          <button>무료 상담 받기</button>
        </a>
      </div>
      <div className="sec5">
        <h3>실제 고객 후기</h3>
        <p>내차어때를 이용하신 고객님들의 실제 이용 후기입니다.</p>
        <div>
          <div className="review-card">
            <h5>중고차 구매 [네이버 플레이스 후기]</h5>
            <Image
              className="review-image"
              src={매매}
              alt="내차어때 매매 후기"
            />
          </div>
          <div className="review-card">
            <h5>중고차 수출 [당근마켓 후기]</h5>

            <Image
              className="review-image"
              src={수출}
              alt="내차어때 수출 후기"
            />
          </div>
          <div className="review-card">
            <h5>[네이버 플레이스 후기]</h5>
            <Image
              className="review-image"
              src={폐차}
              alt="내차어때 폐차 후기"
            />
          </div>
        </div>
        <a href="/customer-review">
          <button>고객 후기 더보기</button>
        </a>
      </div>
    </>
  );
}
