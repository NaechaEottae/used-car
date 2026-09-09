import { Metadata } from "next";

export async function generateMetadata(params: string): Promise<Metadata> {
  const resolvedParams = await params;
  console.log("업데이트 resolvedParams", resolvedParams);
  return {
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
}
