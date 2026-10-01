import { Metadata } from "next";
import Image from "next/image";
import sportage from "../../public/car_icon_sportage.png";
import text from "../../public/말풍선.png";
import car from "../../public/car.svg";
import dashboard from "../../public/dashboard.svg";
import clipboard from "../../public/clipboard-text.svg";
import arrow from "../../public/arrow-right-square.svg";
import coin from "../../public/coin.svg";
import helpHexagon from "../../public/help-hexagon.svg";
import settings from "../../public/settings.svg";
import carCheck from "../../public/zoom-check.svg";
import shieldCheck from "../../public/shield-check.svg";
import clock from "../../public/clock.svg";
import talk from "../../public/messages.svg";
import carSuv from "../../public/car-suv.svg";
import cashBanknote from "../../public/cash-banknote.svg";
import send from "../../public/send.svg";
import clipboardCheck from "../../public/clipboard-check.svg";
import presentationAnalytics from "../../public/presentation-analytics.svg";
import world from "../../public/world.svg";
import trash from "../../public/trash-x.svg";

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
        <div className="sec" style={{ justifyContent: "space-between" }}>
          <div className="left">
            <h1>
              내 차, 제대로 비교하고
              <br />
              <strong>판매하세요.</strong>
            </h1>
            <p>
              중고차 매매부터 수출, 폐차까지
              <br />내 차에 가장 유리한 방법을 비교해드립니다.
            </p>
            <a href="tel:01099545896" target="_parent">
              <button>무료 견적 받기</button>
            </a>
          </div>
          <div className="image-box">
            <div className="circle"></div>
            <div className="circle"></div>
            <Image className="sportage" src={sportage} alt="car image" />
            <Image
              className="text"
              src={text}
              alt="내 차, 더 좋은 방법이 있을 수 있습니다."
            />
          </div>
        </div>
        <div className="sec">
          <div className="left">
            <div className="row">
              <div className="icon-box">
                <Image className="icon" src={car} alt="car icon" />
              </div>
              <div className="column">
                <h3>중고차 매매가 유리한 차량은?</h3>
                <p>
                  다음과 같은 차량은 중고차 매매를 통해 더 높은 가격을 받을 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="right condition-grid">
            <div className="condition-card">
              <span className="check">✓</span>
              <span>비교적 최근 연식</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>짧은 주행거리</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>적은 사고 이력</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>양호한 차량 상태</span>
            </div>
          </div>
        </div>
        <div className="sec">
          <div className="left">
            <div className="row">
              <div className="icon-box">
                <Image className="icon" src={coin} alt="coin icon" />
              </div>
              <div className="column">
                <h3>
                  중고차 가격은
                  <br />
                  무엇으로 결정될까요?
                </h3>
                <p>
                  중고차 가격은 다양한 요소를 종합적으로 고려하여 결정됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="right what-grid">
            <div className="what-card">
              <Image className="icon" src={clock} alt="clock icon" />
              연식
            </div>
            <div className="what-card">
              <Image className="icon" src={dashboard} alt="dashboard icon" />
              주행거리
            </div>
            <div className="what-card">
              <Image
                className="icon"
                src={shieldCheck}
                alt="shield check icon"
              />
              사고이력
            </div>
            <div className="what-card">
              <Image className="icon" src={settings} alt="settings icon" />
              옵션
            </div>
            <div className="what-card">
              <Image className="icon" src={carCheck} alt="carCheck icon" />
              차량상태
            </div>
            <div className="what-card">
              <Image
                className="icon"
                src={presentationAnalytics}
                alt="presentation-analytics icon"
              />
              시장수요
            </div>
          </div>
        </div>
        <div className="sec">
          <div className="left">
            <div className="row">
              <div className="icon-box">
                <Image className="icon" src={arrow} alt="clipboard icon" />
              </div>
              <div className="column">
                <h3>중고차 매매 진행 과정</h3>
                <p>간단한 절차로 빠르고 안전하게 진행해드립니다.</p>
              </div>
            </div>
          </div>
          <div className="right process-grid">
            <div className="process-card">
              견적 상담<span>01</span>
              <Image className="icon" src={talk} alt="견적 상담" />
            </div>
            <div className="process-card">
              차량 확인<span>02</span>
              <Image className="icon" src={carSuv} alt="차량 확인" />
            </div>
            <div className="process-card">
              대금 지급<span>03</span>
              <Image className="icon" src={cashBanknote} alt="대금 지급" />
            </div>
            <div className="process-card">
              차량 이전<span>04</span>
              <Image className="icon" src={clipboardCheck} alt="차량 이전" />
            </div>
            <div className="process-card">
              서류 전달<span>05</span>
              <Image className="icon" src={send} alt="서류 전달" />
            </div>
          </div>
        </div>
        <div className="sec">
          <div className="left">
            <div className="row">
              <div className="icon-box">
                <Image className="icon" src={helpHexagon} alt="question icon" />
              </div>
              <div className="column">
                <h3>매매가 어려운 차량이라면?</h3>
                <p>
                  차량 상태에 따라 수출이나 폐차가 더 유리할 수 있습니다. 내
                  차에 가장 유리한 방법으로 추천드립니다.
                </p>
              </div>
            </div>
          </div>
          <div className="right how-grid">
            <div className="how-card">
              <Image className="icon" src={carSuv} alt="car icon" />
              <h3>중고차 매매</h3>
              <p>
                수출 시세보다 국내 시세가
                <br />더 높은 차량
              </p>
            </div>
            <div className="how-card">
              <Image className="icon" src={world} alt="world icon" />
              <h3>중고차 수출</h3>
              <p>연식·주행거리가 많거나 사고가 있는 차량</p>
            </div>
            <div className="how-card">
              <Image className="icon" src={trash} alt="trash icon" />
              <h3>폐차</h3>
              <p>
                매매와 수출이
                <br />
                어려운 차량
              </p>
            </div>
          </div>
        </div>
        <div className="sec estimate-section">
          <div className="estimate-content">
            <h3>내 차 무료 견적</h3>

            <p>
              지금 바로 간편하게 견적을 받아보세요.
              <br />
              전문 상담사가 차량에 맞는 방법을 친절하게 안내해드립니다.
            </p>

            <a href="tel:01099545896" target="_parent">
              <button>내 차 무료 견적 받기</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
