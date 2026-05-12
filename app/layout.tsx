import type { Metadata } from "next";
import Image from "next/image";

import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigaion from "../components/navigation";
import Floatings from "../components/floatings";
import logo from "../public/logo.png";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "내차어때",
  description: "내차어때에서 매매, 수출, 폐차까지 한번에 해결하세요!",
  openGraph: {
    siteName: "내차어때",
    images: {
      url: "/logo.png",
    },
  },
  other: {
    "naver-site-verification": "9452a2aa9833c54cbb5d0ebd512da001524855de",
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
            {/* <Image style={{ width: "120px" }} src={logo} alt="logo" /> */}
            <p style={{ paddingLeft: "4px" }}>
              <span style={{ fontFamily: "GiantsInline", fontSize: "20px" }}>
                내차어때
              </span>
              <br />
              <br />
              사업자등록번호 : 677-32-01488 | 대표자 : 주형우
              <br />
              이메일 : chea789@naver.com
              <br />
              전화번호 : 010-4471-5896
              <br />
              주소 : 경기 평택시 유천2길 41-20 A동
              {/* 주소 : 경기 평택시 비전1로 44, 2층 */}
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
