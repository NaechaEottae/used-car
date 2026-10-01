import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "실제 고객 리뷰 | 내차어때",
  description:
    "실제 내차어때를 이용하신 고객님들의 생생한 중고차 매입·수출·폐차 이용 후기를 확인해보세요. 높은 만족도와 솔직한 평가로 신뢰할 수 있는 거래를 약속드립니다.",
  alternates: {
    canonical: "/customer-review",
  },
};

export default function CustomerReview() {
  const galleryImages = [
    {
      src: "/review/001.png",
      alt: "내차어때 중고차 매입 차량",
      platform: "네이버",
    },
    {
      src: "/review/002.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/003.png",
      alt: "내차어때 중고차 폐차 차량",
      platform: "네이버",
    },
    {
      src: "/review/004.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/005.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/006.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/007.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/008.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/009.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/010.png",
      alt: "내차어때 중고차 폐차 차량",
      platform: "네이버",
    },
    {
      src: "/review/011.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/012.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/013.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/014.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/015.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/016.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/017.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/018.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/019.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/020.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/021.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/022.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/023.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/024.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/025.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/026.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/027.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/028.png",
      alt: "내차어때 중고차 수출 차량",
      platform: "네이버",
    },
    {
      src: "/review/029.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/030.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/031.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/032.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/033.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/034.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/035.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/036.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/037.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/038.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/039.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/040.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/041.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/042.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/043.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/044.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/045.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/046.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/047.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/048.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/049.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/050.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/051.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/052.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/053.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/054.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
    {
      src: "/review/055.png",
      alt: "내차어때 중고차 매매 차량",
      platform: "네이버",
    },
  ];

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-title">
          <span></span>
          <h2>내차어때 고객 리뷰</h2>
          <p>
            매매부터 수출, 폐차까지
            <br />
            실제 진행된 사례를 확인해보세요.
          </p>
        </div>

        <div className="gallery">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              {/* <a
                href={
                  image.platform === "네이버"
                    ? "https://naver.me/GntHDy5w"
                    : "https://share.google/8ekL1eAUeZAwSHJPH"
                }
                target="_blank"
              > */}
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1200}
                sizes="
                (max-width: 640px) 50vw,
                (max-width: 1024px) 33vw,
                25vw
              "
              />
              {/* </a> */}
            </div>
          ))}
        </div>
      </section>

      <div className="review-floating">
        <a
          href="https://blog.naver.com/howsmycar"
          target="_blank"
          rel="noopener noreferrer"
        >
          블로그에서 더 많은 사례를 확인해보세요!
        </a>
      </div>
    </>
  );
}
