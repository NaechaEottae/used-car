import type { Metadata, ResolvingMetadata } from "next";
// import { usePathname, useSearchParams } from "next/navigation";
// import Image from "next/image";

// import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigaion from "../components/navigation";
import Floatings from "../components/floatings";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export const metadata: Metadata = {
  title: "중고차 매입·수출·폐차 | 내차어때",
  description:
    "중고차 매입부터 수출, 폐차까지 한 곳에서 상담하세요. 주행거리 많은 차량, 사고차, 오래된 차량도 무료 견적 및 방문 상담을 제공합니다. 평택, 안성, 천안 등 전국 방문 가능.",
  openGraph: {
    siteName: "내차어때",
    images: {
      url: "/logo.png",
    },
  },
  other: {
    "naver-site-verification": "9452a2aa9833c54cbb5d0ebd512da001524855de",
    "google-site-verification": "b37BTrJB_RuH9ElDsUaG61sKOOJz4WNejwbE8rIOBwk",
  },
  metadataBase: new URL("http://www.내차어때.com"),
  // metadataBase: new URL("https://used-car-tau.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

// TODO : 메타 OG 타이틀, 설명 동적 생성 작업
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// https://nextjs-ko.org/docs/app/api-reference/functions/generate-metadata
// type Props = {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };
// export async function GenerateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   console.log("메타");
//   return {
//     title: "Next.js",
//   };
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log("usePathname", usePathname());
  // console.log("useSearchParams", useSearchParams());

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
