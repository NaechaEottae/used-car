import type { Metadata } from "next";
import Image from "next/image";
import sportage from "../../public/car_icon_sportage.png";
import text from "../../public/말풍선수출.png";
import world from "../../public/world-white.svg";
import clipboard from "../../public/clipboard-text.svg";
import talk from "../../public/messages.svg";
import carSuv from "../../public/car-suv.svg";
import presentationAnalytics from "../../public/presentation-analytics.svg";
import squareCheck from "../../public/square-check.svg";
import cashBanknote from "../../public/cash-banknote.svg";
import carCrane from "../../public/car-crane.svg";
import doc from "../../public/document.svg";
import arrow from "../../public/arrow-right-square.svg";
import 필요서류 from "../../public/필요서류.png";
import zoomQuestion from "../../public/zoom-question.svg";

export const metadata: Metadata = {
  title: "중고차 수출 | 평택·안성·천안 및 전국 어디서나 내차어때",
  description:
    "주행거리가 많거나 연식이 오래되어 국내 판매가 어려운 차량도 OK! 해외 직수출로 국내 시세 대비 더 높은 가격을 받아보세요. 무료 견적 상담 가능.",
  alternates: {
    canonical: "/export-car",
  },
};

export default function ExportCar() {
  return (
    <>
      <div className="export-wrap">
        <div className="sec" style={{ justifyContent: "space-between" }}>
          <div className="left">
            <h1>
              국내에서의 가치는 낮아도
              <br />
              <strong>해외에서는 높은 가치!</strong>
            </h1>
            <p>
              중고차 수출은 주행거리, 연식, 사고 이력과 관계없이 다양한 국가의
              수요를 통해 더 높은 가격을 받을 수 있습니다. 내차어때가 가장
              유리한 수출 방법을 찾아드립니다.
            </p>
            <a href="tel:01044715896">
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
              alt="전 세계로. 내 차의 새로운 가치를 찾아드립니다."
            />
          </div>
        </div>

        <section className="sec">
          <div className="left" style={{ alignItems: "center" }}>
            <div className="icon-box">
              <Image className="icon" src={world} alt="world icon" />
            </div>
            <div className="column" style={{ textAlign: "center" }}>
              <h3>
                이런 차량은
                <br />
                <strong>중고차 수출을 비교해보세요</strong>
              </h3>

              <p>
                국내에서 매매가 어렵거나 감가가 큰 차량도 해외에서는 높은 가치를
                받을 수 있습니다.
              </p>
            </div>
          </div>

          <div className="right condition-grid">
            <div className="condition-card">
              <span className="check">✓</span>
              <span>주행거리가 많은 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>국내 감가가 큰 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>연식이 오래된 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>특정 SUV / 승합 / 화물차</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>사고 이력이 있는 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>고장차 / 노후 경유차</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>외관 손상 차량</span>
            </div>

            <div className="condition-card">
              <span className="check">✓</span>
              <span>기타 매매가 어려운 차량</span>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="left" style={{ alignItems: "center" }}>
            <div className="icon-box">
              <Image className="icon" src={arrow} alt="진행 과정" />
            </div>

            <div
              className="column"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h3>중고차 수출 진행 과정</h3>
              <p>간단한 절차로 빠르고 안전하게 진행해드립니다.</p>
            </div>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <Image className="icon" src={talk} alt="견적 상담" />
              <strong>01</strong>
              <b>견적 상담</b>
            </div>

            <div className="process-card">
              <Image className="icon" src={carSuv} alt="차량 확인" />
              <strong>02</strong>
              <b>차량 확인</b>
            </div>

            <div className="process-card">
              <Image
                className="icon"
                src={presentationAnalytics}
                alt="견적 비교"
              />
              <strong>03</strong>
              <b>견적 비교</b>
            </div>

            <div className="process-card">
              <Image
                className="icon"
                src={squareCheck}
                alt="가격 확정 및 결정"
              />
              <strong>04</strong>
              <b>가격 확정 및 결정</b>
            </div>

            <div className="process-card">
              <Image className="icon" src={cashBanknote} alt="대금 지급" />
              <strong>05</strong>
              <b>대금 지급</b>
            </div>

            <div className="process-card">
              <Image className="icon" src={carCrane} alt="차량 인도" />
              <strong>06</strong>
              <b>차량 인도</b>
            </div>

            <div className="process-card">
              <Image className="icon" src={doc} alt="수출 말소" />
              <strong>07</strong>
              <b>수출 말소</b>
            </div>
          </div>
        </section>

        <div className="sec-two">
          <section className="sec" style={{ backgroundColor: "#ddf3ea" }}>
            {/* DOCUMENT */}
            <div
              className="column"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <div className="icon-box">
                <Image className="icon" src={clipboard} alt="필요 서류" />
              </div>
              <h3>중고차 수출 필요서류</h3>
              <p>아래 서류를 준비해주시면 보다 빠르게 진행하실 수 있습니다.</p>

              <div className="document-content">
                <ul className="check-list">
                  <li>
                    <span>✓</span>
                    자동차등록증
                  </li>

                  <li>
                    <span>✓</span>
                    신분증 사본
                  </li>
                </ul>
              </div>
              <Image
                className="document-visual"
                src={필요서류}
                alt="필요 서류"
              />
            </div>
          </section>

          <section className="sec" style={{ backgroundColor: "#f0f9f5" }}>
            <div className="column">
              <div className="faq-title">
                <div className="icon-box">
                  <Image
                    className="icon"
                    src={zoomQuestion}
                    alt="이런 점이 궁금해요!"
                  />
                </div>

                <h3>
                  중고차 수출,
                  <br />
                  <strong>이런 점이 궁금해요!</strong>
                </h3>

                <p>고객님들이 가장 많이 궁금해하시는 내용을 모았습니다.</p>
              </div>

              <div className="faq-grid">
                {/* 기존 FAQ 01 */}
                <div className="faq-card">
                  <h4>Q. 주행거리가 20만km가 넘어도 수출할 수 있나요?</h4>
                  <span className="faq-plus">+</span>

                  <p>
                    가능합니다. 차량의 연식과 주행거리만으로 수출 가능 여부가
                    결정되는 것은 아닙니다. 차량 상태와 수출 시장의 수요 등을
                    종합적으로 확인해야 합니다.
                  </p>
                </div>

                {/* 기존 FAQ 02 */}
                <div className="faq-card">
                  <h4>Q. 사고차도 중고차 수출이 가능한가요?</h4>
                  <span className="faq-plus">+</span>

                  <p>
                    사고 부위와 차량 상태에 따라 수출이 가능한 경우가 있습니다.
                    사진이나 차량 정보를 보내주시면 먼저 상담해드립니다.
                  </p>
                </div>

                {/* 기존 FAQ 03 */}
                <div className="faq-card">
                  <h4>Q. 수출 진행 시 차량 말소는 어떻게 하나요?</h4>
                  <span className="faq-plus">+</span>

                  <p>
                    수출 진행에 필요한 절차에 따라 차량 말소를 진행하고 말소증을
                    전달해드립니다.
                  </p>
                </div>

                {/* 기존 FAQ 04 */}
                <div className="faq-card">
                  <h4>Q. 차량을 직접 가져가야 하나요?</h4>
                  <span className="faq-plus">+</span>

                  <p>
                    아닙니다. 차량 상태 확인 후 진행이 결정되면 무료 탁송을 통해
                    차량 인도를 도와드립니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="sec estimate-section"
          style={{ backgroundColor: "#ddf3ea" }}
        >
          <div className="estimate-content">
            <h3>내 차 무료 견적</h3>

            <p>
              지금 바로 간편하게 견적을 받아보세요.
              <br />
              전문 상담사가 차량에 맞는 방법을 친절하게 안내해드립니다.
            </p>

            <a href="tel:01044715896">
              <button>내 차 무료 견적 받기</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
