import type { Metadata, ResolvingMetadata } from "next";
// import { usePathname, useSearchParams } from "next/navigation";

import "./globals.css";
import Navigaion from "../components/navigation";
import Floatings from "../components/floatings";

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
              사업자등록번호 : 677-32-01488 | 대표자 : 주형우
              <br />
              이메일 : chea789@naver.com
              <br />
              전화번호 : 010-4471-5896
              <br />
              주소 : 경기 평택시 유천2길 41-20 A동
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
