import "./globals.css";
import Navigaion from "../components/navigation";
import Floatings from "../components/floatings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "중고차 매매·수출·폐차 | 내차어때",

  description:
    "중고차 매매·수출·폐차를 한 곳에서 비교하고, 차량 상태에 맞는 견적과 전국 방문 상담을 제공합니다.",

  openGraph: {
    siteName: "내차어때",

    images: {
      url: "/logo.png",
    },
  },

  other: {
    "naver-site-verification": "804561ee4bd6f6b10ffdd970cf17201498beb491",

    "google-site-verification": "b37BTrJB_RuH9ElDsUaG61sKOOJz4WNejwbE8rIOBwk",
  },

  metadataBase: new URL("https://내차어때.com"),

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "내차어때",
    "중고차",
    "중고차 매매",
    "중고차 판매",
    "중고차 매입",
    "중고차 견적",
    "중고차 비교견적",

    "중고차 수출",
    "중고차 수출업체",
    "중고차 수출 견적",
    "중고차 수출 시세",

    "폐차",
    "폐차 견적",
    "폐차 시세",
    "조기폐차",
    "조기폐차 보조금",

    "사고차 매입",
    "사고차 수출",
    "사고차 폐차",
    "고장차 매입",
    "고장차 수출",
    "고장차 폐차",
    "압류차 매입",
    "압류차 수출",
    "압류차 폐차",
    "차령초과 말소",
    "차령초과 폐차",
    "망자 폐차",

    "평택 중고차",
    "평택 중고차 수출",
    "평택 폐차",
    "안성 중고차",
    "안성 중고차 수출",
    "안성 폐차",
    "오산 중고차",
    "오산 중고차 수출",
    "오산 폐차",
    "천안 중고차",
    "천안 중고차 수출",
    "천안 폐차",
    "수원 중고차",
    "수원 중고차 수출",
    "수원 폐차",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <header>
          <Navigaion />
          <Floatings />
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <p style={{ paddingLeft: "4px" }}>
              <span style={{ fontFamily: "GiantsInline", fontSize: "20px" }}>
                내차어때
              </span>
              <br />
              <br />
              사업자등록번호 : 248 - 21 - 02639 | 대표자 : 이현하
              <br />
              E-Mail : howsmycar@naver.com
              <br />
              전화번호 : 010-9954-5896
              <br />
              <br />
              <br />
              Copyright 2026. 내차어때. All right reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
