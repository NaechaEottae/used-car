import "./globals.css";
import Navigaion from "../components/navigation";
import Floatings from "../components/floatings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "중고차 매매·수출·폐차 | 내차어때",

  description:
    "중고차 매입부터 수출, 폐차까지 한 곳에서 상담하세요. 주행거리 많은 차량, 사고차, 오래된 차량도 무료 견적 및 방문 상담을 제공합니다. 평택, 안성, 천안 등 전국 방문 가능.",

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

  metadataBase: new URL("http://www.내차어때.com"),

  // metadataBase: new URL("https://used-car-tau.vercel.app"),

  alternates: {
    canonical: "/",
  },
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
