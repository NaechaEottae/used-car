import type { Metadata } from "next";
import Image from "next/image";

import clipboard from "../../public/clipboard-text.svg";
import sportage from "../../public/car_icon_sportage.png";
import text from "../../public/말풍선폐차.png";
import talk from "../../public/messages.svg";
import car from "../../public/car.svg";
import carSuv from "../../public/car-suv.svg";
import cashBanknote from "../../public/cash-banknote.svg";
import carCrane from "../../public/car-crane.svg";
import doc from "../../public/document.svg";
import arrow from "../../public/arrow-right-square.svg";
import zoomQuestion from "../../public/zoom-question.svg";

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
      <div className="export-wrap scrap-wrap">
        {/* --------------------------------
            HERO
        -------------------------------- */}
        <section
          className="sec scrap-hero"
          style={{ justifyContent: "space-between" }}
        >
          <div className="left">
            <h1>
              오래된 내 차,
              <br />
              <strong>폐차도 현명한 선택입니다.</strong>
            </h1>

            <p>
              내차어때는 복잡한 폐차 절차를 간편하게 도와드립니다
              <br />
              빠르고 안전한 말소 처리와 함께, 정당한 보상금까지 지급해드립니다.
            </p>

            <a href="tel:+821044715896">
              <button className="scrap-button">무료 견적 받기</button>
            </a>
          </div>

          <div className="image-box">
            <div className="circle"></div>
            <div className="circle"></div>
            <Image className="sportage" src={sportage} alt="car image" />
            <Image
              className="text"
              src={text}
              alt="폐차, 복잡하지 않게 내차어때가 도와드립니다."
            />
          </div>
        </section>

        {/* --------------------------------
            어떤 차량이 폐차에 유리한가
        -------------------------------- */}

        <section className="sec">
          <div className="left" style={{ alignItems: "center" }}>
            <div className="icon-box">
              <Image className="icon" src={car} alt="폐차 차량" />
            </div>
            <div className="column" style={{ textAlign: "center" }}>
              <h3>
                폐차가 유리한
                <br />
                <strong>차량은?</strong>
              </h3>

              <p>
                다음과 같은 차량은 중고차 매매나 수출보다 폐차가 더 유리할 수
                있습니다.
              </p>
            </div>
          </div>

          <div className="right condition-grid">
            <div className="condition-card">
              <span className="check">✓</span>
              <span>사고로 수리가 어려운 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>노후된 차량 (연식이 오래된 차량)</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>주행거리가 많은 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>정비 비용이 과도하게 발생하는 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>차량 상태가 전반적으로 좋지 않은 경우</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>압류 금액이 너무 큰 차량</span>
            </div>
          </div>
        </section>

        {/* --------------------------------
            폐차 진행 과정
        -------------------------------- */}
        <section className="sec">
          <div className="left" style={{ alignItems: "center" }}>
            <div className="icon-box">
              <Image className="icon" src={arrow} alt="폐차 진행 과정" />
            </div>

            <div
              className="column"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h3>폐차 진행 과정</h3>

              <p>
                폐차가 처음이라도 걱정하지 마세요.
                <br />
                복잡한 절차는 저희가 대신합니다.
                <br />
                간편하게 상담만 신청해주세요.
              </p>
            </div>
          </div>

          <div className="right process-grid scrap-process-grid">
            <div className="process-card">
              <Image className="icon" src={talk} alt="전화 상담" />
              <strong>01</strong>
              <b>전화 상담</b>
              <small>(차량 정보 확인)</small>
            </div>

            <div className="process-card">
              <Image className="icon" src={carSuv} alt="차량 확인" />
              <strong>02</strong>
              <b>차량 확인</b>
              <small>(현장 방문 또는 탁송)</small>
            </div>

            <div className="process-card">
              <Image className="icon" src={carCrane} alt="차량 인수" />
              <strong>03</strong>
              <b>차량 인수</b>
              <small>(견인 또는 직접 방문)</small>
            </div>

            <div className="process-card">
              <Image className="icon" src={cashBanknote} alt="보상금 지급" />
              <strong>04</strong>
              <b>폐차비 지급</b>
              <small>(당일 지급)</small>
            </div>

            <div className="process-card">
              <Image className="icon" src={doc} alt="말소 처리" />
              <strong>05</strong>
              <b>말소 처리</b>
              <small>(당일 또는 익일)</small>
            </div>
          </div>
        </section>

        {/* --------------------------------
            FAQ
        -------------------------------- */}
        <section className="sec">
          <div className="left" style={{ alignItems: "center" }}>
            <div className="icon-box">
              <Image className="icon" src={zoomQuestion} alt="자주 묻는 질문" />
            </div>

            <div
              className="column"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h3>폐차 관련 자주 묻는 질문</h3>

              <p>
                고객님들이 가장 많이 궁금해하시는
                <br />
                내용을 모았습니다.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="faq-grid">
              <div className="faq-card">
                <h4>폐차 비용은 얼마인가요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  차량의 종류와 상태, 폐차장 및 지역 등에 따라 차이가 있을 수
                  있습니다. 차량 정보를 알려주시면 상담을 통해 안내해드립니다.
                </p>
              </div>

              <div className="faq-card">
                <h4>자동차세 환급이 가능한가요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  자동차세를 미리 납부한 경우 폐차 말소 후 남은 기간에 대한 환급
                  대상이 될 수 있습니다.
                </p>
              </div>

              <div className="faq-card">
                <h4>조기 폐차 보조금도 받을 수 있나요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  조기 폐차가 가능한 지정된 전문 폐차장으로서 조기 폐차 접수와
                  보조금 지급까지 모두 도와드립니다.
                </p>
              </div>

              <div className="faq-card">
                <h4>보험료도 환급받을 수 있나요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  폐차로 차량 말소가 완료되면 자동차보험의 잔여 기간에 대해
                  환급이 가능한 경우가 있습니다.
                </p>
              </div>

              <div className="faq-card">
                <h4>압류나 저당이 있어도 폐차가 가능한가요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  압류 및 저당의 종류와 차량 상태에 따라 처리 방법이 달라질 수
                  있으므로 상담을 통해 확인해주세요.
                </p>
              </div>

              <div className="faq-card">
                <h4>폐차 시 필요한 서류는 무엇인가요?</h4>
                <span className="faq-plus">+</span>
                <p>
                  일반적으로 자동차등록증과 신분증만 있으면 됩니다. 단, 차량
                  소유 형태에 따라 추가 서류가 필요할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------
            BOTTOM CTA
        -------------------------------- */}
        <section className="sec estimate-section">
          <div className="estimate-content">
            <h3>내 차 무료 견적</h3>

            <p>
              지금 바로 간편하게 견적을 받아보세요.
              <br />
              전문 상담사가 차량에 맞는 방법을 친절하게 안내해드립니다.
            </p>

            <a href="tel:+821044715896">
              <button>내 차 무료 견적 받기</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
