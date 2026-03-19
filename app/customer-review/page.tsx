"use client";

import { useEffect, useState } from "react";
import searchBlogReview from "../api/GET";
import Image from "next/image";
import review01 from "../../public/review01.jpg";
import review02 from "../../public/review02.jpg";
import review03 from "../../public/review03-1.jpg";
import review04 from "../../public/review04.jpg";
import review05 from "../../public/review05.jpg";
import review06 from "../../public/review06.jpg";
import review07 from "../../public/review07.jpg";

export default function CustomerReview() {
  // const [reviewData, setReviewData] = useState([]);
  // useEffect(() => {
  //   console.log("useEffect");
  //   searchBlogReview().then((data) => {
  //     setReviewData(data);
  //     console.log("고객리뷰LIST", data);
  //   });
  // }, []);

  return (
    <>
      <div className="review-wrap">
        <h3>고객리뷰</h3>
        <div className="content-wrap">
          <div className="card">
            <Image className="card-image" src={review01} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                너무 잘해주셔서 아이들이랑 잘 타고 다닐 수 있을 것 같아요!
                <br />
                다음에도 중고차 필요하면 또 연락드릴것같아요~
                <br />
                중고차 처음 사보는거라 걱정도 많이했는데
                <br />잘 알려주셔서 진짜 잘산 것 같아서 기분이 너무 좋습니다
                감사합니다!
              </p>
              <span className="small-font">
                2026.01.28{"  "}|{"  "}Stemo
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review06} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                첫 중고차인데 상태가 너무 좋아서 항상 감사합니다 ㅎㅎ
                <br />
                꼭 여기서 구매하세여 사장님도 너무 친절하셨습니다 ㅎㅎ
                <br />
                감사합니다👍
              </p>
              <span className="small-font">
                2026.01.26{"  "}|{"  "}jel****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review03} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                차 수리비가 많이 나오면서 중고로 팔지, 수출을 보낼지, 폐차
                진행을 해야될 지
                <br />
                고민이 많았는데 사장님께서 친절하게 잘 설명해주셔서
                <br />
                고민 끝에 폐차 진행하고 왔습니다.
                <br />
                폐차가 처음이긴 하지만 평택 근교에 거주하시는 분들은 무조건 여기
                방문하시면 될 거 같습니다!!
              </p>
              <span className="small-font">
                2025.12.15{"  "}|{"  "}lk****
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review04} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                친절하게 상담해주셔서 차 잘 구매했습니다.
              </p>
              <span className="small-font">
                2025.12.2{"  "}|{"  "}rudals7412
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review05} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                이번에 중고차 넘기면서 내차어때이용하게 되었는데
                <br />
                가격도 최대한 맞춰주시고 편안한분위기속에 친절하게 응대해주셔서
                잘 판매했네요.
                <br />
                다음에도 판매하게 되면 또 이용하겠습니다. 번창하십쇼~!
              </p>
              <span className="small-font">
                2025.11.6{"  "}|{"  "}긍정의힘2785
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review02} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                사장님이 너무 친절하시고 잘 처리해주셔서 감사합니다!!
              </p>
              <span className="small-font">
                2025.09.12{"  "}|{"  "}죠셉긱스
              </span>
            </div>
          </div>
          <div className="card">
            <Image className="card-image" src={review07} alt="review" />
            <div className="card-content">
              <p className="reivew-content">
                스쿠버다닐때 필요한 차를 찾고있었는데 차도 많이보여주시고 딱
                맞고 가성비도 좋은차로 구했습니다
                <br />
                친절하시고 좋아요 주실장님ㅎ
              </p>
              <span className="small-font">
                2025.09.12{"  "}|{"  "}임정희7
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
